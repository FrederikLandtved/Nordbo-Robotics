import { database } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';

export const getVideos = () => {
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

export const getVideo = (id) => {
  const collectionRef = collection(database, 'tutorials');
  var tutorialArray = [];
  var videoArray = [];

   return getDocs(collectionRef).then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
      tutorialArray.push(doc.data());
     });

     tutorialArray.sort((a, b) => a.id - b.id);

     tutorialArray.forEach((item => {
      if(item.tutorials){
          item.tutorials.forEach((tutorial) => {
          if(tutorial.videos){
            tutorial.videos.forEach((video) => videoArray.push(video));
          }
        })
      }
     }))

     var video = videoArray.filter(video => video.id == id)[0];
     return video;
 });
}