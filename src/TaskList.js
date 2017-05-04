import React, { Component } from 'react';
import InputBox from './InputBox';
import { Container, Content, List, ListItem, Text } from 'native-base';
export default class DynamicListExample extends Component {
    render() {
        var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
        return (
            <Container>
              <InputBox/>
                <Content>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}
