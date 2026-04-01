import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 p-3 rounded bg-primary text-white"
      >
        Go to onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 p-3 rounded bg-primary text-white"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 p-3 rounded bg-primary text-white"
      >
        Go to Sign Up
      </Link>
      <Link
        href="/subscriptions/spotfy"
        className="mt-4 p-3 rounded bg-primary text-white"
      >
        Spotfy Subcription
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
        className="mt-4 p-3 rounded bg-primary text-white"
      >
        CLaude max Subscription
      </Link>
    </View>
  );
}
