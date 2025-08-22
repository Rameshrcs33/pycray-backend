import admin from "firebase-admin";

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT!, "base64").toString("utf8")
);

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
