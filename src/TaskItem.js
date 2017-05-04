import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import DataQuery from './DataQuery';

export default class TaskItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: this.props.data
      }
    }

    render() {
      let data = this.state.data;
      <TouchableHighlight>
        <View>
          <Text>{data.title}</Text>
        </View>
      </TouchableHighlight>
    }
}