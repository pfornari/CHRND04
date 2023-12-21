import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen1, Screen2, Screen3 } from "../screens";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route }) => {
          return (
            <Header goBack={() => navigation.goBack()} screen={route.name} />
          );
        },
      }}
    >
      <Stack.Screen name="Pantalla 1" component={Screen1} />
      <Stack.Screen name="Pantalla 2" component={Screen2} />
      <Stack.Screen name="Pantalla 3" component={Screen3} />
    </Stack.Navigator>
  );
};

export default HomeStack;
