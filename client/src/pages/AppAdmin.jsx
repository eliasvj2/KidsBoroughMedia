import React from 'react';
import { Admin, Resource } from 'react-admin';
import UserList from '../resources/users'; // Custom Resource components
import { ListGuesser } from 'react-admin';
import { Layout } from 'react-admin';
import { AppBar } from 'react-admin';
import { TitlePortal } from 'react-admin';
import { InspectorButton } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";

import { dataProvider } from '../dataProvider'; 
const MyAppBar = () => (
    <AppBar>
        <TitlePortal />
        <InspectorButton />
    </AppBar>
);



const AppAdmin = () => (
    <div>


    <Admin dataProvider={jsonServerProvider("http://localhost:3500")}   basename='/admin'>
      <Resource name="users"  list={UserList} />
      <Resource name="order" list={ListGuesser}/>
     
      </Admin>
    
    </div>
);

export default AppAdmin;