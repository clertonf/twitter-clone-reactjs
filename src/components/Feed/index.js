import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

export default function Feed(){
    return (
        <Container>
            <Tab>Tweets</Tab>

            <Tweets>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            </Tweets>
        </Container>
    );
}