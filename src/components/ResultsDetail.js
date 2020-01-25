import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetail = ({result}) => {
    return (
        <View>
            <Image 
                source={{uri: result.image_url}}
                style={styles.image}
            />
            <Text
                style={styles.name}>{result.name}
            </Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14
    }
});
 
export default ResultDetail;