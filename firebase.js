const admin = require("firebase-admin");

const serviceAccount = require("../toolshed-private-key/toolshed-9bcb5-firebase-adminsdk-3jx3i-5158dfe9ae.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const user1 = {
  username: "adamiscool69",
  name: "Adam",
  age: 25,
  hobbies: ["reading", "hiking"],
};

const postUser = async (user) => {
  const postItem = await db.collection("users").add(user);
  console.log(postItem);
};

postUser(user1);
