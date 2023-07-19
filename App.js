import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
