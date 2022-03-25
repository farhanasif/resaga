import react from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Image 
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const CategoriesScreen = props => {
    //console.log(props)
    return <View style={styles.container}>
        <LinearGradient
        colors={['#fff9fb', '#f4ddff']} 
        start={{
            x: 0,
            y: 0
        }}
        end={{
            x: 1,
            y: 1
        }}
        style={styles.box}>
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
                        backgroundColor: "#7D00AE",
                        paddingHorizontal: 44,
                        paddingVertical: 14,
                        borderRadius: 8,
                        flexDirection:"row",
                        alignItems:'center',
                        justifyContent:'center',
                        borderBottomColor: '#000'
                        
                    }}
                >
                    <Text 
                        style={{ 
                            fontFamily: 'SupermercadoOne', 
                            fontSize: 13,
                            color: '#FFF' 
                        }}>
                            Go to Meals
                    </Text>    
                </TouchableOpacity>
            </View>
        </LinearGradient>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
})

export default CategoriesScreen;

