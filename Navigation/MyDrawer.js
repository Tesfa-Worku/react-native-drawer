import { StyleSheet } from "react-native";
import Home from "../Screens/Home";
import About from "../Screens/About";
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function MyDrawer() {
    const Drawer = createDrawerNavigator();    
    return (
        <Drawer.Navigator
            style={styles.container}
            initialRouteName='Home'
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})