import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { Moment } from 'moment';
import DataQuery from './DataQuery';

export default class TaskItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: this.props.data
      }
    }

    onCheckBoxPressed = () => {
      var data = this.state.data;
      TodoService.update(data, () => {
        data.completed = !data.completed;
      });
      this.setState({
         data: data
      });

      this.props.onCompletedChange();
    }

    componentWillReceiveProps(props) {
      this.setState({
        data: props.data
      })
    }

    render() {
      let data = this.state.data;
      let color = data.completed ? '#C5C8C9' : '#000';
      let textDecorationLine = data.completed ? 'line-through' : 'none';
      return (
        <TouchableHighlight
          underlayColor={'#eee'}
          style={{paddingTop: 10, paddingBottom: 10, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}}
          onPress={this.onCheckBoxPressed}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{data.title}</Text>
          </View>
        </TouchableHighlight>
      )
    }
}
