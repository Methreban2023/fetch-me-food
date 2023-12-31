import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ROUTES from ".";
import ForgotPassword from "../screens/ForgotPassword";
const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.AUTHROUTES.SIGNIN} component={SignIn} />
      <Stack.Screen name={ROUTES.AUTHROUTES.SIGNUP} component={SignUp} />
      <Stack.Screen
        name={ROUTES.AUTHROUTES.FORGOT}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
