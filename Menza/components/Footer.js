import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Footer = ({ navigation }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => navigation.navigate('Breakfast')}>
                <Text style={styles.footerButton}>Dorucak: 10</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center' }}>
                <Text style={styles.footerButton}>Rucak: 20</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center' }}>
                <Text style={styles.footerButton}>Vecera: 8</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'white',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    footerButton: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    }
})