import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Favorites = () => {
    return (
        <View>
            <Text style={styles.textSmallStyle}>
                Favorites...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textSmallStyle: {
        fontSize: 35,
        marginVertical:100,
        textAlign: 'center',
        // Below is the custom font
        fontFamily: 'DancingScript-Regular',
    },
});

export default Favorites
