import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importar las pantallas necesarias
import Onboarding from "../screens/Onboarding";
import Login from "../screens/Login"; // Importa la pantalla de Login
import PhoneVerificationScreen from "../screens/PhoneVerificationScreen";
import Home from "../screens/Home";
import ChatScreen from "../screens/ChatScreen";
import FavoriteAdsScreen from "../screens/FavoriteAdsScreen";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import PreferencesScreen from "../screens/PreferencesScreen";
import Searches from "../screens/Searches"
import StepNavigator from "../components/StepNavigator";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Stack para el Onboarding, Login, y la verificación de teléfono
function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
      <Stack.Screen name="Home" component={HomeDrawerStack} />
    </Stack.Navigator>
  );
}

// Drawer principal que contiene la navegación después de iniciar sesión
function HomeDrawerStack() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        itemStyle: { marginVertical: 5 },
        labelStyle: { fontSize: 18 },
      }}
      drawerStyle={{ width: width * 0.8 }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Chat" component={ChatStack} />
      <Drawer.Screen name="Favoritos" component={FavoriteStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Preferences" component={PreferencesScreen} />
    </Drawer.Navigator>
  );
}

// Stack para la pantalla Home y sus subpantallas
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="StepNavigator" component={StepNavigator} /> 
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Favoritos" component={FavoriteAdsScreen} />
      <Stack.Screen name="Preferences" component={PreferencesScreen} />
      <Stack.Screen name="Searches" component={Searches} />
    </Stack.Navigator>
  );
}

// Stack para el perfil y la edición de perfil
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

// Stack para el chat
function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

// Stack para los favoritos
function FavoriteStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favoritos" component={FavoriteAdsScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return <OnboardingStack />;
}
