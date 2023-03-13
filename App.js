import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Familia1 from './Components/Familia1';
import Familia2 from './Components/Familia2';
import Familia3 from './Components/Familia3';
import Familia4 from './Components/Familia4';
import Familia5 from './Components/Familia5';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Zocial' component={Familia1}/>
        <Drawer.Screen name='Octicons' component={Familia2}/>
        <Drawer.Screen name='AntDesign' component={Familia3}/>
        <Drawer.Screen name='Fontisto' component={Familia4}/>
        <Drawer.Screen name='MaterialIcons' component={Familia5}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}