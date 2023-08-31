import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkthroughScreen from "./src/screens/WalkthroughScreen/WalkthroughScreen";
import FilterScreen from "./src/screens/FilterScreen/FilterScreen";
import DynamicAppStyles from "./src/DynamicAppStyles";
import WalkthroughAppConfig from "./src/WalkthroughAppConfig";
import PushNotification from 'react-native-push-notification';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Walkthrough">
        <Stack.Screen
          name="Página de inicio"
          component={WalkthroughScreen}
          initialParams={{
            appStyles: DynamicAppStyles,
            appConfig: WalkthroughAppConfig,
          }}
        />
        <Stack.Screen
          name="Filtros"
          component={FilterScreen}
          initialParams={{ appStyles: DynamicAppStyles }}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
