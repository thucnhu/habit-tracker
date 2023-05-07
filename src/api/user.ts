import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from "./firebase";

export default async function getUser() {
  const users = collection(db, "users");
  const usersSnapshot = await getDocs(users);
  const usersList = usersSnapshot.docs.map((doc) => doc.data());

  console.log(usersSnapshot);
  console.log(usersList)
}