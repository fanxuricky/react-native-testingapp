import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Button, Text, Item } from 'native-base';
import { View } from 'react-native';

export default class InputBox extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                    <Item rounded style={{flex: 1}}>
                        <Input placeholder='Rounded Textbox'/>
                    </Item>
                    <Button rounded>
                        <Text>Add</Text>
                    </Button>
            </View>
        );
    }
}
