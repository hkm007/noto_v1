const firebaseConfig = {
  apiKey: "${{ secrets.APIKEY }}",
  authDomain: "${{ secrets.AUTHDOMAIN }}",
  projectId: "${{ secrets.PROJECTID }}",
  storageBucket: "${{ secrets.STORAGEBUCKET }}",
  messagingSenderId: "${{ secrets.MESSAGINGSENDERID }}",
  appId: "${{ secrets.APPID }}",
  measurementId: "${{ secrets.MEASUREMENTID }}"
};

export default firebaseConfig;