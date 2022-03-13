import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'

const ProfileScreen = () => {

    const user = {
        ime: 'Nebojša',
        prezime: 'Zoraja',
        brIndeksa: 'IT38/2019',
        univerzitet: 'Univerzitet u Novom Sadu',
        fakultet: 'Fakultet tehničkih nauka',
        godinaStudija: '3.',
        email: 'nebojsa.zoki@gmail.com',
        nacinFinansiranja: 'Budžet',
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: 'white', margin: 10, borderRadius: 10 }}>
                <View style={{ alignItems: 'center', width: '100%', marginTop: '10%' }}>
                    <Image style={{ height: 120, width: 120 }} source={require('../images/profileImage.png')} />
                </View>
                <View style={{ alignItems: 'center', width: '100%', marginTop: '5%', borderBottomColor: '#D0D0D0', borderBottomWidth: 1, paddingBottom: '10%' }}>
                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 20 }}>{`${user.ime} ${user.prezime}`}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Broj Indeksa</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>{user.brIndeksa}</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Univerzitet:</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>{user.univerzitet}</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15, flexWrap: 'wrap' }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Fakultet:</Text>
                    <Text style={{ color: 'black', fontSize: 17, maxWidth: '60%' }}>{user.fakultet}</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Godina studija:</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>{user.godinaStudija}</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Email:</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>{user.email}</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Način finansiranja:</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>{user.nacinFinansiranja}</Text>
                </View >
            </ScrollView >
            <Footer />
        </>
    )
}

export default ProfileScreen