import react from "react";
import { View, Text, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    return <View style={styles.container}>
        <Text>This is the Category Meals Screen!</Text>
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

export default CategoryMealsScreen;

