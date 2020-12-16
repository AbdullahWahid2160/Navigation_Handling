import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contacts = () => {
    return (
        <View>
            <Text style={styles.textLargeStyle}>
                User Profile
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textLargeStyle: {
        fontSize: 40,
        textAlign: 'center',
        marginVertical:100,
        // Below is the custom font
        fontFamily: 'DancingScript-Bold',
    }
});

export default Contacts
