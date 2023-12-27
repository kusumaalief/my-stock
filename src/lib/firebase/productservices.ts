import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import firebaseApp from ".";
import bcrypt from "bcrypt";

const db = getFirestore(firebaseApp);

export async function addProduct(productData: any, callback: Function) {
  await addDoc(collection(db, "products"), productData)
    .then(() => {
      callback(true);
      console.log("Data is submitted");
    })
    .catch((e) => {
      callback(false);
      console.log("Failed !");
    });
}

export async function getProducts(callback: Function) {
  const snapShot = await getDocs(collection(db, "products"));
  const data = snapShot.docs.map((doc) => ({
    ...doc.data(),
  }));

  if ((data.length <<= 0)) {
    return callback({ status: false, data: null });
  } else {
    return callback({ status: true, data: data });
  }
}
