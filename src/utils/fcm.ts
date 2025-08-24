import admin from "firebase-admin";

const serviceKey: any = {
  type: "service_account",
  project_id: "pycray-3fd07",
  private_key_id: "1f7dc77be9b910f34abaf886e675750c3a3b734c",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPTK5MikA3MAhD\neeMmkRF3GvzWBgMha1COa/z8OSwXu4uN+6w3QQZJGUiILZqgJQf1jWyO2YKnncZ/\n4mM0iFh+89GpVJkc8zyqIlS5h7qV4kqQyMc5Kra8JUenEOb0keu5Yuz0EbuihpgT\nSqS9kBnrbZvWXIkRBlKaK8CPc4k2jrq3rNB2rXg2j9gZQQ7/AcJlScNF9VvOxTt+\n3KTnFuAK3Zk85oP+KwCOMn6tcelbIDW25TkqmgD7l8uudPvXUoYKjNOnpTkiXjKR\njNrhZT+HbR7aN3K7AMlGXrp+re8+kIIltMK5CnUQLPEzeGNeZiXJwlaKoQpV0KOA\nO40JLAMDAgMBAAECggEAGva56znGXYdRY9l8Wt1evLPVdE9G4/dt/IB+YR5cpl+e\nKOM2BN/f3e08en4YEUGP1fhFyRTwwjWrBqJfTgt4G1dCi7h1zAa1etnJVHKbqfhL\nw6ZiB4UPTMy6k7gGmoRKeYwtDxgpZFwGdufsIr4WKQHSVeEmcQD2CJitTNt12xMc\nkOdmFa+29lfqapoBri+kyUtb0ohCYNvsRIQR78/pTK4A2tuMkHAWBneBXKx+ypc9\n9Jbs+rm2jPNxqQdIl1bVvUhdq4NDlYLi/Gw25tRXQ0FH/TF7t4XzhX1nu/Obo9Go\n5ZZDZ9dEuoUoyUptfWALUkbHmyglNX9WGFsUFL9sIQKBgQD3S+rbWU+Za/m2WCC9\nBHwFkAkZG+tQIOneDTBkBBOa+Y+u/DQ3ND32x61TEqx3wv3Q5EWPfTk4W4xo48cN\nAO93F9qSAwtqElZR9SsjUtcLxwZZcYm7JXUx6Ga51IRhx9wFvXQpumYPqocFnLD8\ngbApIx50/iVyPsoh7aj74czJowKBgQDWmGZgxgrUcaNWdVwxmWwTr03Ql57G+r4Q\n3dmG2QRY+biKFRRHWoGO200AmDzoj1G4sIq+e/ic0eVwM5CPGDt5nWt9VVnLb4P3\nRmllLiX90+9zRk8P1I96nTOQAeNKyCfE0d3qa71o7pu3K9Tv+ZmKpK9i8InwHy1w\nTIUR5vw3IQKBgF0LUVgqaEqfV5sF2XuEvm0RXnr2CDljyNplN/nJlt7OWwNJnRPQ\nMigxxMLm2cFNulXoLUvpn6fWuiOU4AXCflbewLwDLT5Bm/zGM+7cclDaF0d78ohZ\ndZjLiisNDKoFmoEGYTh6C4CFdrvj0quO2AsCTalTHh+4BDFzzArJUFXlAoGBAImu\nvgDZD5m+T03pfn1UMkNu9j4fCYAg4FFyBV6/Xkq37e6qF5iwOO+vRHhdNLcBPS2C\nF4Kfh6MWCF80tksZAQ/GMHD5keM0aTb9tiF0umtgzwDm21MMzgGdWrfKfko8oUdm\nXztIZP4uGTospTJSsnCBuQWBzv6BAmZKshYKXUgBAoGAUko5GQC4C7tDMU56EBWD\nWOzQ/8ZcdwvXjAwbE8DKKVMbq9iAYsZGAabY9NMHMzijp4uofBY5OfGc43YSRabP\nI5UbY267o3W0oU1BR02wnLU/4LecQJx4tlwMmhYKqrCDJybEV0zwh0JVA5cbOQyv\nzU0CcFZQdgJt0uHiNfK3/KE=\n-----END PRIVATE KEY-----\n",
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
    credential: admin.credential.cert(serviceKey),
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
