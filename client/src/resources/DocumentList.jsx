import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const DocumentList = () => (
    <List >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="fileName" />
      <TextField source="fileType" />
      <TextField source="fileUrl" />
      {/* <ReferenceField label="User" source="userId" reference="users">
        <TextField source="username" />
      </ReferenceField>
      <ReferenceField label="Order" source="orderId" reference="orders">
        <TextField source="id" />
      </ReferenceField> */}
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
    </Datagrid>
  </List>
);

export default DocumentList;