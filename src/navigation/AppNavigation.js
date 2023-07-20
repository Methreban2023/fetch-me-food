import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import ItemDetail from "../screens/ItemDetail";
import Restaurant from "../screens/Restaurant";
import Thankyou from "../screens/Thankyou";

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.APPROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.APPROUTES.PROFILE} component={Profile} />
      <Stack.Screen name={ROUTES.APPROUTES.CART} component={Cart} />
      <Stack.Screen name={ROUTES.APPROUTES.DETAIL} component={ItemDetail} />
      <Stack.Screen name={ROUTES.APPROUTES.RESTAURANT} component={Restaurant} />
      <Stack.Screen name={ROUTES.APPROUTES.THANKYOU} component={Thankyou} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
