import React, { Component } from 'react';
import InputBox from './InputBox';
import { Container, Content,  Text } from 'native-base';
import { ListView } from 'realm/react-native';
import TaskItem from './TaskItem';
import DataQuery from './DataQuery';

let todoList = DataQuery.findAll();
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TaskList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todoList: todoList ,
        dataSource: ds.cloneWithRows([todoList]),
      };
    }

    render() {
        var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
        return (
            <Container>
              <InputBox/>
                  <ListView
                      dataSource={this.state.dataSource}
                      renderRow={(item) =>  <Text>{item}</Text>}
                    />
            </Container>
        );
    }
}
