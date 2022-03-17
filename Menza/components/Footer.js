import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'react-native-paper'

const Footer = ({ thisUser }) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.footer, { backgroundColor: colors.background }]}>
            <View style={{ justifyContent: 'center' }}>
                <Text style={[styles.footerButton, { color: colors.placeholder }]}>Doručak: {thisUser.brojObroka[0]} </Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={[styles.footerButton, { color: colors.placeholder }]}>Ručak: {thisUser.brojObroka[1]}</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={[styles.footerButton, { color: colors.placeholder }]}>Večera: {thisUser.brojObroka[2]}</Text>
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