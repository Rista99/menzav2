import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

const Footer = () => {

    const { colors } = useTheme();

    return (
        <View style={[styles.footer, { backgroundColor: colors.background }]}>
            <View style={{ justifyContent: 'center' }}>
                <Text style={[styles.footerButton, { color: colors.placeholder }]}>Doručak: 10</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={[styles.footerButton, { color: colors.placeholder }]}>Ručak: 20</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={[styles.footerButton, { color: colors.placeholder }]}>Večera: 8</Text>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    footerButton: {
        fontSize: 16,
        fontWeight: '500',
    }
})