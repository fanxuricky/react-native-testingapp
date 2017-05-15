import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Button, Text, Item } from 'native-base';
import { View, ToastAndroid } from 'react-native';
import DataQuery from './DataQuery';
import DataStruc from './DataStruc';

export default class InputBox extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.setState({
        newValue: ''
      });
    }

    onChange = (event) => {
      var title = event.nativeEvent.text;

      this.setState({
        newValue: title
      });
    }

    onAddPressed = () => {
        var newDataItem = new DataStruc(this.state.newValue);

        var dataList = this.props.data;

        // dataList.unshift(newDataItem);
        DataQuery.save(newDataItem);

        this.setState({
          newValue: ''
        });
        ToastAndroid.show('New todo added!', ToastAndroid.SHORT);
        this.props.onCompletedChange();
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                    <Item rounded style={{flex: 1}}>
                        <Input placeholder='What to do?'
                        value={this.state.newValue}
                        onChange={this.onChange}/>
                    </Item>
                    <Button rounded
                      onPress={this.onAddPressed}>
                        <Text>Add</Text>
                    </Button>
            </View>
        );
    }
}
