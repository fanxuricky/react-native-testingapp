import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import InputBox from './InputBox';
import { Container, Content,  Text } from 'native-base';
import { ListView } from 'realm/react-native';
import TaskItem from './TaskItem';
import DataQuery from './DataQuery';

let todoList = DataQuery.findAll();

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
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

    componentWillMount() {
            this.setState({ dataSource: this.state.dataSource.cloneWithRows(todoList) });
    }

    render() {
        return (
            <Container>
              <InputBox/>
                  <ListView
                      dataSource = {this.state.dataSource}
                      initialListSize = {200}
                      renderRow={(items) =>  <TaskItem data={items} onCompletedChange={this.onCompletedChange}/>}
                    />
            </Container>
        );
    }
}
