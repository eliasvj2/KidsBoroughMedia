import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, EditActions } from 'react-admin';
import {  EmailField, DeleteButton } from 'react-admin';

const UserList = () => (
  <List>
  <Datagrid rowClick="edit">
      <TextField source="id" label="_id" />
      <TextField source="username" label="username" />
      <TextField source="role" label="role" />
      <TextField source="email" label="email" />
      
      <EditButton />
      <DeleteButton />
  </Datagrid>
</List>
);


const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Create>
);

export default UserList;
