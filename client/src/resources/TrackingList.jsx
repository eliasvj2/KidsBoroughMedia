import { ArrayField, ChipField, Datagrid, DateField, List, ReferenceField, SingleFieldList, TextField } from 'react-admin';

export const TrackingList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
          
            <TextField source="trackingNumber" />
            <TextField source="shippingProvider" />
            <ArrayField source="statusUpdates">
                <SingleFieldList><ChipField source="status" />
                </SingleFieldList></ArrayField>
            <DateField source="createdAt" showTime/>
            <DateField source="updatedAt" showTime />
        </Datagrid>
    </List>
);

export default TrackingList;