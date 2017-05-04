import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon, Button, Text, Item } from 'native-base';

export default class InputBox extends Component {
    render() {
        return (
            <Container>
                    <Item rounded>
                        <Input placeholder='Rounded Textbox'/>
                    </Item>
                    <Button rounded>
                        <Text>Add</Text>
                    </Button>
            </Container>
        );
    }
}
