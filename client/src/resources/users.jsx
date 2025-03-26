import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, EditActions } from 'react-admin';
import {  EmailField, DeleteButton } from 'react-admin';

const UserList = () => (
  <List>
  <Datagrid rowClick="edit">
      <TextField source="id" label="_id" />
      <TextField source="userName" label="userName" />
      <TextField source="roles" label="roles" />
      <TextField source="active" label="active" />
      
      <EditButton />
      <DeleteButton />
  </Datagrid>
</List>
);

const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
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
