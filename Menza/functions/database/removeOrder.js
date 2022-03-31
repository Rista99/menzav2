import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';


const removeOrder = async (meal, day) => {
    try {
        switch (meal.type) {
            case 1:
                await firestore().collection('users').doc(auth().currentUser.uid).update({ brojDoruckova: firestore.FieldValue.increment(1) })
                break
            case 2:
                await firestore().collection('users').doc(auth().currentUser.uid).update({ brojRuckova: firestore.FieldValue.increment(1) })
                break
            case 3:
                await firestore().collection('users').doc(auth().currentUser.uid).update({ brojVecera: firestore.FieldValue.increment(1) })
                break
        }
        await firestore().collection('users').doc(auth().currentUser.uid).collection('orders').doc(day.date.toDate().toDateString()).update({
            meals: firestore.FieldValue.arrayRemove(meal)
        })
    } catch (error) {
        console.error(error)
    }
}

export { removeOrder }