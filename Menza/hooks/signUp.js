import auth from '@react-native-firebase/auth';

const register = (email, password) => {
    if (email != null && email.length != 0 && email != '' && password != null && password.length != 0 && password != '') {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCred => {
                alert(userCred.user.email);
            })
            .catch(error => {
                alert(error.message);
            });
    } else {
        alert("Please enter your email and password");
    }
};

export { register };