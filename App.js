import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AuthNavigation />
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
  },
});
