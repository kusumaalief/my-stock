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

// export async function retrieveData(collectionName:string)

export async function signUp(userData: IFUserData, callback: Function) {
  const q = query(
    collection(db, "users"),
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
    await addDoc(collection(db, "users"), userData)
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

const checkPassowrd = async (username: string, userPassword: string) => {
  const q = query(collection(db, "users"), where("username", "==", username));
  const getPasswordSnapShot = await getDocs(q);
  const hashedPassword = getPasswordSnapShot.docs.map(
    (doc) => doc.data().password
  );

  let password;

  if (hashedPassword.length != 0) {
    password = await bcrypt.compare(userPassword, hashedPassword[0]);
  } else {
    return false;
  }

  return password;
};

export async function login(userData: IFUserData, callback: Function) {
  const responseCheck = await checkPassowrd(
    userData.username,
    userData.password
  );
  responseCheck;
  if (responseCheck) {
    const q = query(
      collection(db, "users"),
      where("username", "==", userData.username)
    );
    const snapShot = await getDocs(q);
    const data = snapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (data.length <= 0) {
      callback({ status: false });
    } else {
      callback({ status: true });
    }
  } else {
    callback({ status: false, message: "Password doesnt match" });
  }
}
