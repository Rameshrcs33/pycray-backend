import admin from "firebase-admin";

var serviceAccount: any = require("../firebase-service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const sendPushNotification = async (token: string, message: any) => {
  await admin.messaging().send({
    token,
    notification: {
      title: message.title,
      body: message.body,
    },
    data: message.data,
  });
};
