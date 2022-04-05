import firestore from '@react-native-firebase/firestore';

function getStartOfToday() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const timestamp = firestore.Timestamp.fromDate(now);
  return timestamp;
}

export default getStartOfToday;
