import { Image, StyleSheet, Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator,  } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : CategoryMealsScreen,
    MealDetail : MealDetailScreen
    },
    {
        initialRouteName: 'Categories',
        /* The header config from CategoriesScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'transparent',
            },
            
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'SupermercadoOne', 
                fontSize: 18,
                color: '#000'
            },
            headerBackground: () => (
                <Image
                    style={StyleSheet.absoluteFill}
                    source={require('../../assets/head_back2.png')}
                />
                )
            },
    }
)

export default createAppContainer(MealsNavigator)