
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="role" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;