import admin from "firebase-admin";

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("FIREBASE_CONFIG env variable is missing");
}

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, "base64").toString("utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const sendPushNotification = async (token: any, message: any) => {
  await admin.messaging().send({
    token,
    notification: {
      title: message.title,
      body: message.body,
    },
    data: message.data,
  });
};
