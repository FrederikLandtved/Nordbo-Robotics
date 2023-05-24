import { database } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';

export const getTutorials = () => {
  const collectionRef = collection(database, 'tutorials');
  var tutorialArray = [];

   return getDocs(collectionRef).then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
      tutorialArray.push(doc.data());
     });

     tutorialArray.sort((a, b) => a.id - b.id);
     return tutorialArray;
 });
}

export const getTutorial = () => {
  const collectionRef = collection(database, 'tutorials');
  var tutorialArray = [];

  return getDocs(collectionRef).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
     tutorialArray.push(doc.data());
    });

    tutorialArray.sort((a, b) => a.id - b.id);

    return tutorialArray;
  });
}