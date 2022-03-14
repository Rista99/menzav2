import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileScreen = () => {

    const { colors } = useTheme();
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
            <ScrollView style={{ backgroundColor: colors.surface, margin: 10, borderRadius: 10 }}>
                <View style={{ alignItems: 'center', width: '100%', marginTop: '10%' }}>
                    <Icon name="user-circle-o" size={100} />
                </View>
                <View style={{ alignItems: 'center', width: '100%', marginTop: '5%', borderBottomColor: '#D0D0D0', borderBottomWidth: 1, paddingBottom: '10%' }}>
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>{`${user.ime} ${user.prezime}`}</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Broj Indeksa</Text>
                    <Text style={styles.textStyle}>{user.brIndeksa}</Text>
                </View >
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Univerzitet:</Text>
                    <Text style={styles.textStyle}>{user.univerzitet}</Text>
                </View >
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Fakultet:</Text>
                    <Text style={styles.textStyle}>{user.fakultet}</Text>
                </View >
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Godina studija:</Text>
                    <Text style={styles.textStyle}>{user.godinaStudija}</Text>
                </View >
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Email:</Text>
                    <Text style={styles.textStyle}>{user.email}</Text>
                </View >
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Način finansiranja:</Text>
                    <Text style={styles.textStyle}>{user.nacinFinansiranja}</Text>
                </View >
            </ScrollView >
            <Footer />
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 15,
        flexWrap: 'wrap'
    },
    textStyle: {
        fontSize: 17,
        maxWidth: '70%'
    }
})