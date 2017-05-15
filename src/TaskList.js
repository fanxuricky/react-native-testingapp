import React, { Component } from 'react';
import { View, StyleSheet, ToolbarAndroid, ToastAndroid } from 'react-native';
import InputBox from './InputBox';
import { Container, Content,  Text } from 'native-base';
import { ListView } from 'realm/react-native';
import { StackNavigator } from 'react-navigation';
import TaskItem from './TaskItem';
import DataQuery from './DataQuery';

let todoList = DataQuery.findAll();

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 50,
  },
});

export default class TaskList extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        todoList: todoList,
        dataSource : ds
      };
    }

    onCompletedChange = () => {
      // if (this.forceUpdate) this.forceUpdate();
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(todoList) });
    }

    _onActionSelected = (x) => {
      switch (x) {
        case 0:
          ()=>navigate('HelpScreen');
          ToastAndroid.show('help pressed', ToastAndroid.SHORT);

          return;
        case 1:
          ToastAndroid.show('settings pressed', ToastAndroid.SHORT);
          return;
      }
    }

    componentWillMount() {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(todoList) });
    }

    render() {
        return (
            <Container>
              <ToolbarAndroid
                actions={toolbarActions}
                onActionSelected={this._onActionSelected}
                style={styles.toolbar}
                title="whatTodo" />
              <InputBox onCompletedChange={this.onCompletedChange}/>
                  <ListView
                      dataSource = {this.state.dataSource}
                      initialListSize = {100}
                      renderRow={(items) =>  <TaskItem data={items} onCompletedChange={this.onCompletedChange}/>}
                    />
            </Container>
        );
    }
}

class HelpScreen extends React.Component {
  static navigationOptions = {
    title: 'Help',
  };
  render() {
    return (
      <View>
        <Text>How to use this application?</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: TaskList },
  Help: { screen: HelpScreen },
});

var toolbarActions = [
  {title: 'Help'},{title: 'Settings'}
];
