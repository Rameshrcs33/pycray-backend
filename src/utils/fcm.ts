import admin from "firebase-admin";

const serviceAccount: any = {
  type: "service_account",
  project_id: "pycray-3fd07",
  private_key_id: "7f65cff0fe61eb8bd75155b6d29513189315449f",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2YaqqdkR6g9QO\nnMJ6Yooc66TYcNl3W3rjkSLUeY53HrgmKNgqdeO1vm2pp9weSUa2Xpih7n6CmW+a\nMfXWWFzjewNxgEI8Ym8nsT4+AkZrRzqCMJYTL/o1Ok5t+ke5gCE9FoSmyinJE+7u\nONmNYDkPzYmq19BJGl09Y3tLwv83g3S+2EBYabyxMHhtTbSu2C7dSNs0vUOw3IBc\nT9suOdhauSi8UwFl++ZeuBEXQQgVJpBoKxgb3GT1gVNwi+1yHn1iOmOfYzHLDDHx\nxEIeQCoDF96UZgI3q6q/41q0meYr4ponvVpld08SfvFaVPmKHmPxewIk1xFIlfCd\nbz5CsFTpAgMBAAECggEAAf1gyklOB/QmPR6StJkcnqIng0D/7mBuH8t2kNDesAgC\nxE/Pw+7TVClGswIk0aPFBLpVefbLJIud/xWqc/M02DqAWB2pG1WLluhFIJIPyJ3X\nUpJLINx2I1yGfIatf6WZNzxmqBcui4YPJkQyg2tYVAbPCLEgEZwbBk9uie4PsMBW\nr41PoOJHWLDxNc7gZX2pndxNm9xfzUac4SIgy43FM4VP4+2maW8cMem5un4l17/K\nNezz841FVzpqfurRJ9XxRNdYZRtU0DJ/ZTg6lmcA15WuQd2gW+iTyGlTrRNhjONq\njC2RJfq7bFiMtIb+dYhpE3aBWXS/eaPLLoO90TPDHQKBgQDb0oQI4xKUqjjvNOfZ\nFtmQsRAKZr6dKnjlEXZ2zvfMz93w0yBe88X/TEPad7DNF0EYbyrn1o2bIwYdUY/g\nqZ7Q1KRGahGYdkUypt7KZv9qafvtZKTzwOVsbC4ulEMNJwuQkzyLSZq+gR7D9eSM\nxDdpMZyatR0X3RDFBw6k8IqpFwKBgQDUZbTSx12ExVeGzauaTG023o44OFbZfgFy\nkQXQnVrWcq8INI0Y7YxS1Z2EPYESkeYy+PEx4VWhL00fcfA1XcRhcRTGwiCTacpd\njw8RzlBqLG9sKEbiO7hj7OkOn2x20abnWnWXxlUUqEzTI2Ibqrze3hgdsZJBmwsk\nUPHYWz+x/wKBgQCpuk+sNPfhxdUUDXt+iUAPkkdaYJ6I54RVCji333JBt7Yb/kge\nSIb2akJx6ryefngKj7tHKshHorFT7efzhcRUZfs5Syiu2ZLwWxvml8Rau96DG5Sp\niKUcJCM8X8mt3Bn31VeIDJrowPWqRK/laJOIK4BJi9Ic3NnX520NOZU2nQKBgHIO\nX8jkiGK4+mSIY4NLUUaqwqKMFo9aq/pSyFWbemE4WqfEWJSvU7BTx+9we7R2JrDu\nn88SW0JgPUEKlVyDCubsq6SEMKwYnjQZk5UTPnmVfQwOoOnx+fWnDgvtLnir4r3Q\nBN/JAH1EV2T2VkPXLu9bQoYHiiuyz4vj78soTQ8PAoGABT2Xaaig9Sajbxwf+ECQ\nN98jofdyRDRbtbwjTEC3Wi0lwMqn4yCXPdthsYoCIQ/W50zEYibpJ0IX6Tb+vVs9\nlFfxownnZZ78RSTj22kSatAgkGhtSM94iumtd7FAkEox3nNNKYblRMX1Rw9tJa5u\nf9xeNMMetoGrdkAcQOnGo7U=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-fbsvc@pycray-3fd07.iam.gserviceaccount.com",
  client_id: "112493375456605397486",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40pycray-3fd07.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

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
