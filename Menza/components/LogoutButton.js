import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { signOut } from '../hooks/signOut'

function LogoutButton() {
    return (
        <TouchableOpacity onPress={signOut}>
            <Image source={require('../images/logout.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
    );
}

export default LogoutButton