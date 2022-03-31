import auth from '@react-native-firebase/auth';

const signIn = async (email, password) => {
    let abortController = new AbortController()
    try {
        if (email != null && email.length != 0 && email != '' && password != null && password.length != 0 && password != '') {
            await auth().signInWithEmailAndPassword(email, password)
        } else {
            alert("Please enter your email and password");
        }
    } catch (error) {
        alert('Incorrect email or password!')
    } finally {
        abortController.abort()
    }
}

export { signIn };