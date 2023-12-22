import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  snapshotEqual,
  where,
} from "firebase/firestore";
import firebaseApp from ".";
import bcrypt from "bcrypt";

const firestore = getFirestore(firebaseApp);

// export async function retrieveData(collectionName:string)

export async function signUp(
  userData: { username: string; email: string; password: string },
  callback: Function
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapShot = await getDocs(q);
  const data = snapShot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({ status: false });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback(true);
        console.log("successSignup");
      })
      .catch((e) => {
        callback(false);
        console.log("errorSignup", e);
      });
  }
}
