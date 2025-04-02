import React from 'react';
import { Admin, Resource } from 'react-admin';
import UserList from '../resources/users'; // Custom Resource components
import { ListGuesser } from 'react-admin';
import { Layout } from 'react-admin';
import { AppBar } from 'react-admin';
import { TitlePortal } from 'react-admin';
import { InspectorButton } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import { MyAppBar } from '../components/MyAppBar';

import { dataProvider } from '../dataProvider'; 
import OrderList from '../resources/OrderList';
import UserEdit from '../resources/UserEdit';
import TrackingList from '../resources/TrackingList';
import DocumentList from '../resources/DocumentList';

const CustomLayout = (props) => (
    <Layout {...props} appBar={(defaultAppBarProps) => <MyAppBar {...defaultAppBarProps} />}>
      {props.children}
    </Layout>
  );


const AppAdmin = () => (
    <div>


    <Admin dataProvider={jsonServerProvider("http://localhost:3500")} layout={CustomLayout}   basename='/admin'>
      <Resource name="user"  list={UserList} edit={UserEdit} />
      <Resource name="order" list={OrderList}/>
      <Resource name="tracking" list={TrackingList}/>
      <Resource name="document" list={DocumentList}/>
   
     
      </Admin>
    
    </div>
);

export default AppAdmin;