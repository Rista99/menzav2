import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.footerButton}>Dorucak: 10</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.footerButton}>Rucak: 20</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.footerButton}>Vecera: 8</Text>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    footerButton: {
        fontSize: 15,
        fontWeight: '500',
    }
})