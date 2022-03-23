import react from "react";
import { View, Text, StyleSheet } from 'react-native';

const FiltersScreen = props => {
    return <View style={styles.container}>
        <Text>This is the Filters Screen!</Text>
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

export default FiltersScreen;

