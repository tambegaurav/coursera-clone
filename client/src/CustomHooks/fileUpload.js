/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable max-len */
import { storage } from '../utils/firebase';

const fileUpload = (file) => {
  // Create a storage reference from our storage service
  const storageRef = storage.ref();
  // Create a child reference
  const imagesRef = storageRef.child('images');
  // imagesRef now points to 'images'
  const uploadTask = imagesRef.put(file);
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // eslint-disable-next-line prefer-template
      console.log('Upload is ' + progress + '% done');
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    },
    () => {
      // Handle successful uploads on complete
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    },
  );
};

export default fileUpload;
