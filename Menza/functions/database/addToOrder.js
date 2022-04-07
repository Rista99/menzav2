import {firestoreAutoId} from '../firestoreAutoId';
import firestore from '@react-native-firebase/firestore';

const addToOrder = async (user, meal, day) => {
  try {
    // Preuzimanje order-a
    const order = await firestore()
      .collection('users')
      .doc(user.userID)
      .collection('orders')
      .doc(day.date.toDate().toDateString())
      .get();
    switch (meal.type) {
      case 1:
        if (user.brojDoruckova !== 0) {
          if (!order.exists) {
            await firestore()
              .collection('users')
              .doc(user.userID)
              .collection('orders')
              .doc(day.date.toDate().toDateString())
              .set({
                id: firestoreAutoId(),
                date: day.date,
                meals: firestore.FieldValue.arrayUnion({
                  ...meal,
                  id: firestoreAutoId(),
                }),
              });

            await firestore()
              .collection('users')
              .doc(user.userID)
              .update({brojDoruckova: firestore.FieldValue.increment(-1)});
          } else if (order.exists) {
            let counter = 0;
            order.data().meals.forEach(m => {
              if (m.type === 1) {
                counter++;
              }
              if (counter === 2) {
                throw new Error('Maksimalan broj doručkova u jednom danu je 2');
              }
            });
            await firestore()
              .collection('users')
              .doc(user.userID)
              .collection('orders')
              .doc(day.date.toDate().toDateString())
              .update({
                meals: firestore.FieldValue.arrayUnion({
                  ...meal,
                  id: firestoreAutoId(),
                }),
              });

            await firestore()
              .collection('users')
              .doc(user.userID)
              .update({brojDoruckova: firestore.FieldValue.increment(-1)});
          }
        } else {
          alert('Nemate dovoljno bonova za odabrani obrok');
        }
        break;
      case 2:
        if (user.brojRuckova !== 0) {
          if (!order.exists) {
            await firestore()
              .collection('users')
              .doc(user.userID)
              .collection('orders')
              .doc(day.date.toDate().toDateString())
              .set({
                id: firestoreAutoId(),
                date: day.date,
                meals: firestore.FieldValue.arrayUnion(meal),
              });
            await firestore()
              .collection('users')
              .doc(user.userID)
              .update({brojRuckova: firestore.FieldValue.increment(-1)});
          } else if (order.exists) {
            let counter = 0;
            order.data().meals.forEach(m => {
              if (m.type === 2) {
                counter++;
              }
              if (counter === 2) {
                throw new Error('Maksimalan broj ručkova u jednom danu je 2');
              }
            });
            await firestore()
              .collection('users')
              .doc(user.userID)
              .collection('orders')
              .doc(day.date.toDate().toDateString())
              .update({
                meals: firestore.FieldValue.arrayUnion(
                  (meal = {
                    ...meal,
                    id: firestoreAutoId(),
                  }),
                ),
              });

            await firestore()
              .collection('users')
              .doc(user.userID)
              .update({brojRuckova: firestore.FieldValue.increment(-1)});
          }
        } else {
          alert('Nemate dovoljno bonova za odabrani obrok');
        }
        break;
      case 3:
        if (user.brojVecera !== 0) {
          if (!order.exists) {
            await firestore()
              .collection('users')
              .doc(user.userID)
              .collection('orders')
              .doc(day.date.toDate().toDateString())
              .set({
                id: firestoreAutoId(),
                date: day.date,
                meals: firestore.FieldValue.arrayUnion(meal),
              });

            await firestore()
              .collection('users')
              .doc(user.userID)
              .update({brojVecera: firestore.FieldValue.increment(-1)});
          } else if (order.exists) {
            let counter = 0;
            order.data().meals.forEach(m => {
              if (m.type === 3) {
                counter++;
              }
              if (counter === 2) {
                throw new Error('Maksimalan broj večera u jednom danu je 2');
              }
            });
            await firestore()
              .collection('users')
              .doc(user.userID)
              .collection('orders')
              .doc(day.date.toDate().toDateString())
              .update({
                meals: firestore.FieldValue.arrayUnion(
                  (meal = {
                    ...meal,
                    id: firestoreAutoId(),
                  }),
                ),
              });

            await firestore()
              .collection('users')
              .doc(user.userID)
              .update({brojVecera: firestore.FieldValue.increment(-1)});
          }
        } else {
          alert('Nemate dovoljno bonova za odabrani obrok');
        }
    }
  } catch (error) {
    if (
      error.message === 'Maksimalan broj doručkova u jednom danu je 2' ||
      error.message === 'Maksimalan broj ručkova u jednom danu je 2' ||
      error.message === 'Maksimalan broj večera u jednom danu je 2'
    ) {
      alert(error.message);
    } else {
      console.error(error);
    }
  }
};

export {addToOrder};
