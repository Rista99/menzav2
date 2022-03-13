import { TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { signOut } from '../hooks/signOut'

function HeaderRightButtons({ navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../images/profile.png')} style={{ width: 25, height: 25, marginRight: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={signOut}>
                <Image source={require('../images/logout.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </View>
    );
}

export { HeaderRightButtons }