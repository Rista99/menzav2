import auth from '@react-native-firebase/auth';

const signOut = async () => {
    let abortController = new AbortController()
    try {
        await auth().signOut()

    } catch (error) {
        alert("Unsuccessful sign out")
    } finally {
        abortController.abort()
    }
}

export { signOut };