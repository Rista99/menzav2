import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import signOut from '../hooks/signOut';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity
                onPress={signOut}
                style={[styles.button, styles.buttonOutlineRed]}>
                <Text style={styles.buttonOutlineTextRed}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutlineRed: {
        backgroundColor: 'red',
        color: 'red',
        marginTop: 5,
        borderColor: 'red',
        borderWidth: 2,
    },
    buttonOutlineTextRed: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})