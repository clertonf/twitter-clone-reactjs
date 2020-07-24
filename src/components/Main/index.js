import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
    Container, 
    Header , 
    BackIcon , 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon,
    SearchIcon, 
    BellIcon, 
    EmailIcon  
    } from './styles';

export default function Main(){
    return(
        <Container>
            <Header>
               <button>
                   <BackIcon />
                   </button> 
           
            <ProfileInfo>
                <strong>Clerton Filho</strong>
                <span> 623 Tweets </span>
            </ProfileInfo>
          </Header>
       
        <ProfilePage />

         <BottomMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu> 

        </Container>
    )
    
}

