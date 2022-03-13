import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'

const ProfileScreen = () => {
    return (
        <>
            <ScrollView style={{ backgroundColor: 'white', margin: 10, borderRadius: 10 }}>
                <View style={{ alignItems: 'center', width: '100%', marginTop: '10%' }}>
                    <Image style={{ height: 120, width: 120 }} source={require('../images/profileImage.png')} />
                </View>
                <View style={{ alignItems: 'center', width: '100%', marginTop: '5%', borderBottomColor: '#D0D0D0', borderBottomWidth: 1, paddingBottom: '10%' }}>
                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 20 }}>Nebojša Zoraja</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Broj Indeksa</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>IT38/2019</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Fakultet:</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>Fakultet tehničkih nauka</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Godina studija:</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>3.</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Email:</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>nebojsa.zoki@gmail.com</Text>
                </View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: 'black', fontSize: 17 }}>Način finansiranja:</Text>
                    <Text style={{ color: 'black', fontSize: 17 }}>Budžet</Text>
                </View >
            </ScrollView >
            <Footer />
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: 'lightblue',
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 10,
        flexWrap: 'wrap',
        marginHorizontal: 10,
    },

})