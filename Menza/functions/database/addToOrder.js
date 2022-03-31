import { firestoreAutoId } from '../firestoreAutoId';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const addToOrder = async (currentUser, meal, day) => {
    let abortController = new AbortController()
    try {
        const exists = (await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).get()).exists
        switch (meal.type) {
            case 1:
                if (currentUser.brojDorucaka !== 0) {
                    if (!exists) {
                        await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).set({
                            id: firestoreAutoId(),
                            date: day.date,
                            meals: firestore.FieldValue.arrayUnion(meal)
                        })

                        await firestore().collection('users').doc(auth().currentUser.uid).update({ brojDorucaka: firestore.FieldValue.increment(-1) })
                    } else if (exists) {

                        await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).update({
                            meals: firestore.FieldValue.arrayUnion(meal = {
                                ...meal,
                                id: firestoreAutoId()
                            })
                        })

                        await firestore().collection('users').doc(auth().currentUser.uid).update({ brojDorucaka: firestore.FieldValue.increment(-1) })

                    }
                } else {
                    alert('Nemate dovoljno bonova za odabrani obrok')
                }
                break;
            case 2:
                if (currentUser.brojRuckova !== 0) {
                    if (!exists) {
                        await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).set({
                            id: firestoreAutoId(),
                            date: day.date,
                            meals: firestore.FieldValue.arrayUnion(meal)
                        })
                        await firestore().collection('users').doc(auth().currentUser.uid).update({ brojRuckova: firestore.FieldValue.increment(-1) })


                    } else if (exists) {

                        await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).update({
                            meals: firestore.FieldValue.arrayUnion(meal = {
                                ...meal,
                                id: firestoreAutoId()
                            })
                        })

                        await firestore().collection('users').doc(auth().currentUser.uid).update({ brojRuckova: firestore.FieldValue.increment(-1) })

                    }
                } else {
                    alert('Nemate dovoljno bonova za odabrani obrok')
                }
                break;
            case 3:
                if (currentUser.brojVecera !== 0) {
                    if (!exists) {
                        await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).set({
                            id: firestoreAutoId(),
                            date: day.date,
                            meals: firestore.FieldValue.arrayUnion(meal)
                        })

                        await firestore().collection('users').doc(auth().currentUser.uid).update({ brojVecera: firestore.FieldValue.increment(-1) })

                    } else if (exists) {

                        await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).update({
                            meals: firestore.FieldValue.arrayUnion(meal = {
                                ...meal,
                                id: firestoreAutoId()
                            })
                        })

                        await firestore().collection('users').doc(auth().currentUser.uid).update({ brojVecera: firestore.FieldValue.increment(-1) })

                    }
                } else {
                    alert('Nemate dovoljno bonova za odabrani obrok')
                }
        }



    } catch (error) {
        console.error(error)
    } finally {
        abortController.abort()
    }

}

export { addToOrder }