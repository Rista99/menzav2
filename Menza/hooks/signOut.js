import auth from '@react-native-firebase/auth';

const signOut = () => {
    auth().signOut().catch(() => alert("Unsuccessful sign out"));
}

export { signOut };