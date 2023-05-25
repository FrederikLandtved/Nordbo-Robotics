import { database } from "../../firebase";
import { collection, getDocs, addDoc, doc } from 'firebase/firestore';
import { getUserEmail } from './AuthService';

export const registerVideoView = async(id) => {
  const email = getUserEmail();
  const collectionRef = collection(database, 'user-video-views');
  const usersVideos = await getUsersVideos();

  if (usersVideos.some(video => video.videoId == id && video.email == email)) {
    console.log('User has already watched the video.');
    return;
  }
  
  await addDoc(collectionRef, {
    email: email,
    videoId: id
  });
}

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

export const getUsersVideos = () => {
  const collectionRef = collection(database, 'user-video-views');
  const email = getUserEmail();

  var userVideoViews = [];

   return getDocs(collectionRef).then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
      userVideoViews.push(doc.data());
     });

     var videos = userVideoViews.filter(video => video.email == email);

     return videos;
 });
}