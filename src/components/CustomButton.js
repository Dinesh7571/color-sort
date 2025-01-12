import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const CustomButton = ({
    title,
    backgroundImage,
    onPress,
    titleStyle,
    buttonStyle,
    imageStyle,
    symbolIcon,
    symbolIconStyle,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            {/* Background Image */}
            <Image
                source={backgroundImage}
                style={[styles.backgroundImage, imageStyle]}
                resizeMode="contain"
            />

            {/* Content: Icon and Title */}
            <View style={styles.content}>
                {symbolIcon && (
                    <Image
                        source={symbolIcon}
                        style={[styles.symbolIcon, symbolIconStyle]}
                        resizeMode="contain"
                    />
                )}
                {title && <Text style={[styles.buttonText, titleStyle]}>{title}</Text>}
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: 100,
        height: 100,
    },
    content: {
        position: 'absolute',
        justifyContent:'center',
        flexDirection:'row',
        alignItems: 'center',
    },
    symbolIcon: {
        width: 25,
        height: 30,
    },
    buttonText: {
        alignSelf:'center',
        marginTop: 5,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
