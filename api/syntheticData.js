// syntheticData.js
import mongoose, { ObjectId } from 'mongoose'; 
import {Order} from './Models/order.js'; // Adjust path as needed
import {User} from './Models/user.js'; // Adjust path as needed
import {Tracking} from './Models/tracking.js'; // Adjust path as needed
import {Document} from './Models/document.js'; // Adjust path as needed

export async function seedData() {
  try {
    const orders = await Order.find({}, '_id');
    const users = await User.find({}, '_id');

    const orderIds = orders.map((order) => order._id);
    const userIds = users.map((user) => user._id);
  
    if (orders.length === 0 || users.length === 0) {
      console.log('no orders or users found, please seed those first');
      return;
    }

    const trackingData = generateTrackingData(orderIds);
    const documentData = generateDocumentData(userIds, orderIds);

    await Tracking.insertMany(trackingData);
    await Document.insertMany(documentData);

    console.log('Synthetic data seeded successfully');
  } catch (err) {
    console.error('Error seeding data in seed data:', err);
  }
}

function generateTrackingData(orderIds) {
  const trackingData = [];
  for (let i = 0; i < 5; i++) {
    const orderId = orderIds[Math.floor(Math.random() * orderIds.length)]; // Randomly select an orderId
    trackingData.push({
      orderId: new ObjectId(orderId),
      trackingNumber: `TRACK${Math.floor(Math.random() * 10000)}`,
      shippingProvider: ['UPS', 'FedEx', 'USPS'][Math.floor(Math.random() * 3)],
      statusUpdates: [
        {
          timestamp: new Date(Date.now() - Math.random() * 86400000), // Random timestamp within last day
          status: ['Shipped', 'In Transit', 'Delivered'][Math0floor(Math.random() * 3)],
          location: ['Warehouse', 'Shipping Hub', 'Destination'][Math.floor(Math.random() * 3)],
        },
        {
          timestamp: new Date(Date.now() - Math.random() * 86400000 * 2), // Random timestamp within last 2 days
          status: ['Shipped', 'In Transit', 'Delivered'][Math.floor(Math.random() * 3)],
          location: ['Warehouse', 'Shipping Hub', 'Destination'][Math.floor(Math.random() * 3)],
        },
      ],
    });
  }
  console.log(trackingData)
  return trackingData;
}

function generateDocumentData(userIds, orderIds) {
  const documentData = [];
  for (let i = 0; i < 5; i++) {
    const userId = userIds[Math.floor(Math.random() * userIds.length)];
    const orderId = orderIds[Math.floor(Math.random() * orderIds.length)];
    documentData.push({
      userId: ObjectId(userId),
      orderId: ObjectId(orderId),
      fileName: `document${i + 1}.pdf`,
      fileType: 'application/pdf',
      fileUrl: `https://example.com/document${i + 1}.pdf`,
    });
  }
  console.log(documentData)
  return documentData;
}