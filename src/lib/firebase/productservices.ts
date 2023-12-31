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

async function checkPLUProduct(plu: string) {
  const q = query(collection(db, "products"), where("plu", "==", plu));

  const snapShot = await getDocs(q);
  const data = snapShot.docs.map((doc) => ({
    ...doc.data(),
  }));

  return data.length === 0 ? true : false;
}

export async function addProduct(productData: any, callback: Function) {
  const checkPLU = await checkPLUProduct(productData.plu);

  if (checkPLU) {
    await addDoc(collection(db, "products"), productData)
      .then(() => {
        callback({ status: true });
      })
      .catch((e) => {
        callback({ status: false, message: "Something went wrong !" });
      });
  } else {
    callback({ status: false, message: "PLU is duplicated !" });
  }
}

export async function getProducts(callback: Function) {
  const snapShot = await getDocs(collection(db, "products"));
  const data = snapShot.docs.map((doc) => ({
    ...doc.data(),
  }));

  console.log(data);

  if (data.length !== 0) {
    return callback({ status: true, data: data });
  } else {
    return callback({ status: false, data: null });
  }
}
