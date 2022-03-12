const signIn = () => {
    if (email != null && email.length != 0 && email != '' && password != null && password.length != 0 && password != '') {
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch(() => alert('Incorrect email or password!'));
    } else {
        alert("Please enter your email and password");
    }
}

export default signIn;