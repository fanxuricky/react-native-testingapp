import React, { Component } from 'react';
import { TouchableHighlight, View, Text, ToastAndroid, Alert } from 'react-native';
import { Moment } from 'moment';
import DataQuery from './DataQuery';

export default class TaskItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: this.props.data
      }
    }

    onCompletePressed = () => {
      var data = this.state.data;
      DataQuery.update(data, () => {
        data.completed = !data.completed;
      });
      this.setState({
         data: data
      });

      this.props.onCompletedChange();
    }

    deleteQuery = (data) => {
      DataQuery.delete(data);
      ToastAndroid.show('Deleted', ToastAndroid.SHORT);
      this.props.onCompletedChange();
    }

    onDeletePressed = () => {
      var data = this.state.data;
      // DataQuery.delete(data);
      Alert.alert(
          'Delete Todo',
          'Are you sure you want to delete '+ data.title +'?',
          [
            {text: 'Cancel'},
            {text: 'OK', onPress: () => this.deleteQuery(data)},
          ]
      )
    }

    componentWillReceiveProps(props) {
      this.setState({
        data: props.data
      })
    }

    render() {
      let data = this.state.data;
      let color = data.completed ? '#FD0000' : '#000';
      let textDecorationLine = data.completed ? 'line-through' : 'none';
      return (
        <TouchableHighlight
          underlayColor={'#eee'}
          style={{paddingTop: 10, paddingBottom: 10, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}}
          onPress={this.onCompletePressed}
          onLongPress={this.onDeletePressed}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize:18, color: color, textDecorationLine: textDecorationLine}}>{data.title}</Text>
          </View>
        </TouchableHighlight>
      )
    }
}
