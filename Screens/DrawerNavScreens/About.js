import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
    return (
        <View>
            <Text style={styles.textLargeStyle}>
                About Page...
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

export default About
