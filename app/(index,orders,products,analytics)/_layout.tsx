import { Link, Slot, Stack } from "expo-router";
import { Image, PlatformColor } from "react-native";
import { TouchableImpact } from "@/components/touchable-impact";
import { ShadLayoutFull } from "@/components/shad/shad-layout";

export default function RootLayout({ segment }: { segment: string }) {
  if (process.env.EXPO_OS === "web") {
    return (
      <ShadLayoutFull>
        <Slot />
      </ShadLayoutFull>
    );
  }

  const name = getRouteName(segment);
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: { backgroundColor: "transparent" },
        headerTitleStyle: { color: PlatformColor("label") },
        headerBlurEffect: "none",
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen
        name={name}
        options={{
          title: titles[name],
          headerLargeTitle: true,
          headerSearchBarOptions: {},
          headerRight() {
            return <ProfileButton segment={segment} />;
          },

          ...(name !== "index"
            ? {
                headerLargeTitle: undefined,
                headerSearchBarOptions: undefined,
              }
            : {}),
        }}
      />
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

function ProfileButton({ segment }: { segment: string }) {
  return (
    <Link href={`/${segment}/settings`} asChild>
      <TouchableImpact
        style={{
          aspectRatio: 1,
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            aspectRatio: 1,
            borderRadius: 24,
          }}
          source={require("@/public/evanbacon.jpg")}
        />
      </TouchableImpact>
    </Link>
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

const titles = {
  index: "Dashboard",
  orders: "Orders",
  products: "Products",
  analytics: "Analytics",
};

function getRouteName(segment: string) {
  return segment.replace(/\((.+)\)/, "$1") as keyof typeof titles;
}
