import auth from '@react-native-firebase/auth';

const signOut = () => {
    auth().signOut().then(() => alert("Sign-out uspesan!")).catch(() => alert("Not signed in"));
}

export { signOut };