import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { StatusBar, SafeAreaView, StyleSheet, Platform } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
          {/* <AuthNavigation /> */}
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000000",
    marginTop: StatusBar.currentHeight,
  },
});
