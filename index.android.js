 import React, { Component } from 'react';
 import TaskList from './src/TaskList';
 import { Container, Content, InputGroup, Input, Icon, Button, Text, Spinner, Item } from 'native-base';
 import {  AppRegistry, BackHandler, ToastAndroid } from 'react-native';

 class whatTodo extends Component {
   render() {
     var backButtonPressed = false;

        BackHandler.addEventListener('hardwareBackPress', () => {
            if(!this.backButtonPressed){
                ToastAndroid.show("Press back once more to exit the app.", 1500);
                this.backButtonPressed = true;
                setTimeout(() => {
                    this.backButtonPressed = false;
                }, 1500);
            }else{
                BackHandler.exitApp();
            }
            return true;
        });

         return (
           <Container>
             <TaskList/>
           </Container>
         );
     }
 }

AppRegistry.registerComponent('whatTodo', () => whatTodo);
