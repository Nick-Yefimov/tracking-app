import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { GlobalStyles } from "./utils/Colors";

import ManageExpenses from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const App = (): React.JSX.Element =>  {
    const Stack = createNativeStackNavigator();
    const BottomTabs = createBottomTabNavigator();

    const ExpensesOverview = (): React.JSX.Element  => {
        return (
            <BottomTabs.Navigator screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                headerTintColor: '#fff',
                tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
            }}>
                <BottomTabs.Screen 
                    name='RecentExpenses' 
                    component={RecentExpenses}
                    options={{
                        title: 'Recent Expenses',
                        tabBarLabel: 'Recent',
                        tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color}/>
                    }}
                />
                <BottomTabs.Screen 
                    name='AllExpenses' 
                    component={AllExpenses}
                    options={{
                        title: 'All Expenses',
                        tabBarLabel: 'All',
                        tabBarIcon: ({color, size}) => <Ionicons name='calendar' size={size} color={color}/>
                    }}
                />
            </BottomTabs.Navigator>
        )
    }
    return (
        <>
            <StatusBar style='auto'/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name='ExpensesOverview' 
                        component={ExpensesOverview}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name='ManageExpense' component={ManageExpenses}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App;