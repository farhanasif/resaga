import react from "react";
import { View, Text, StyleSheet } from 'react-native';

const FavouritesScreen = props => {
    return <View style={styles.container}>
        <Text>This is the Favourites Screen!</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default FavouritesScreen;

