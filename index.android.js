 import React, { Component } from 'react';
 import TaskList from './src/TaskList';
 import { Container, Content, InputGroup, Input, Icon, Button, Text, Spinner, Item } from 'native-base';
 import {  AppRegistry } from 'react-native';

 class whatTodo extends Component {
   render() {
         return (
           <Container>
             <TaskList/>
           </Container>
         );
     }
 }

AppRegistry.registerComponent('whatTodo', () => whatTodo);
