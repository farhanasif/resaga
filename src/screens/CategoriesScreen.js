import react from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Image 
} from 'react-native';

const CategoriesScreen = props => {
    //console.log(props)
    return <View style={styles.container}>
        <Text 
            style={{ 
                fontFamily: 'SupermercadoOne', 
                fontSize: 18 
            }}>
                This is the Categories Screen!
        </Text>
        <View style={{paddingTop: 5}}>
            <TouchableOpacity 
                onPress={() => {
                    props.navigation.navigate({ routeName: 'CategoryMeals' })
                }}
                style={{
                    backgroundColor: "#d4f6f3",
                    paddingHorizontal: 30,
                    paddingVertical: 5,
                    borderRadius: 5,
                    flexDirection:"row",
                    alignItems:'center',
                    justifyContent:'center',
                    borderWidth: 2,
                    borderColor: '#c0f2ea'
                }}
            >
                <Text 
                    style={{ 
                        fontFamily: 'SupermercadoOne', 
                        fontSize: 18 
                    }}>
                        Go to Meals
                </Text>    
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default CategoriesScreen;

