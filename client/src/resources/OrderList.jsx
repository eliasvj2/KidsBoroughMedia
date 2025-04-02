import React from 'react';
import { EditButton, Edit, SimpleForm, TextInput, Create, EditActions, DeleteButton } from 'react-admin';

import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="participantId" />
            <NumberField source="totalAmount" />
            <TextField source="orderDate" />
            <TextField source="status" />
      
           
            {/* <TextField source="items" />
            
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <DateField source="__v" /> */}
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

export default OrderList;