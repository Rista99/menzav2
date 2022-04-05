import firestore from '@react-native-firebase/firestore';

function getAvailableOrderDay() {
  const now = new Date();
  now.setDate(now.getDate() + 2);
  now.setHours(0, 0, 0, 0);
  const timestamp = firestore.Timestamp.fromDate(now);
  return timestamp;
}

export default getAvailableOrderDay;
