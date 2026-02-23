import { Slot, Stack } from "expo-router";
import { PlatformColor } from "react-native";
import { ShadLayoutFull } from "@/components/shad/shad-layout";
import { label } from "@bacons/apple-colors";

export default function RootLayout({ segment }: { segment: string }) {
  if (process.env.EXPO_OS === "web") {
    return (
      <ShadLayoutFull>
        <Slot />
      </ShadLayoutFull>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: { backgroundColor: "transparent" },
        headerTitleStyle: { color: label },
        headerBlurEffect: "none",
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          presentation: "formSheet",
          sheetGrabberVisible: true,
          contentStyle: { backgroundColor: "transparent" },
        }}
      />
    </Stack>
  );
}

export const unstable_settings = {
  anchor: "index",
  orders: {
    anchor: "orders",
  },
  products: {
    anchor: "products",
  },
  analytics: {
    anchor: "analytics",
  },
};
