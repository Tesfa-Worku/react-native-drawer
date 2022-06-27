import Home from "../Screens/Home";
import About from "../Screens/About";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { styles } from "../Style/Styles";

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