import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAGGzIlAa7n_zmQ9W2V8csiKgnocNc5PQ",
  authDomain: "nordbo-robotics-85ff2.firebaseapp.com",
  projectId: "nordbo-robotics-85ff2",
  storageBucket: "nordbo-robotics-85ff2.appspot.com",
  messagingSenderId: "18179342611",
  appId: "1:18179342611:web:13f465dd25834354651ae6"
};

const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);
const database = getFirestore(app);

// const myCollectionRef = collection(database, 'tutorials');
//  var hej = [];
// getDocs(myCollectionRef).then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     hej.push(doc.data());
//   });
//   console.log(hej);
// });


export { authentication, database };