const signOut = () => {
    auth().signOut().then(() => alert("Sign-out uspesan!")).catch(() => alert("Not signed in"));
}

export default signOut;