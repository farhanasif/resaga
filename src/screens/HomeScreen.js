import react from "react";
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = props => {
    return <View style={styles.container}>
        <Text>This is the Home Screen!</Text>
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

export default HomeScreen;

