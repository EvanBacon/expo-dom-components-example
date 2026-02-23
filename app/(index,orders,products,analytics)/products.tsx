import Products from "@/components/shad/products";
import { ProfileButton } from "@/components/screen-header";
import { Stack } from "expo-router";
import { useScrollRef } from "@/lib/tab-to-top";
import * as Haptics from "expo-haptics";

export default function ProductsRoute() {
  const ref = useScrollRef<import("react-native-webview").WebView>();

  return (
    <>
      <Products
        ref={ref}
        onButtonClick={async (size: number) => {
          if (process.env.EXPO_OS !== "web") {
            Haptics.impactAsync(
              [
                Haptics.ImpactFeedbackStyle.Light,
                Haptics.ImpactFeedbackStyle.Medium,
                Haptics.ImpactFeedbackStyle.Heavy,
              ][size]
            );
          }
        }}
      />
      <ProductsHeader />
    </>
  );
}

function ProductsHeader() {
  return (
    <>
      <Stack.Screen.Title>Products</Stack.Screen.Title>
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.Button icon="plus" onPress={() => {}} />
        <Stack.Toolbar.Menu icon="arrow.up.arrow.down">
          <Stack.Toolbar.Menu inline title="Sort By">
            <Stack.Toolbar.MenuAction isOn>Name</Stack.Toolbar.MenuAction>
            <Stack.Toolbar.MenuAction>Price</Stack.Toolbar.MenuAction>
            <Stack.Toolbar.MenuAction>Stock</Stack.Toolbar.MenuAction>
            <Stack.Toolbar.MenuAction>Date Added</Stack.Toolbar.MenuAction>
          </Stack.Toolbar.Menu>
          <Stack.Toolbar.Menu inline title="Category">
            <Stack.Toolbar.MenuAction isOn>All</Stack.Toolbar.MenuAction>
            <Stack.Toolbar.MenuAction>Electronics</Stack.Toolbar.MenuAction>
            <Stack.Toolbar.MenuAction>Clothing</Stack.Toolbar.MenuAction>
            <Stack.Toolbar.MenuAction>Accessories</Stack.Toolbar.MenuAction>
          </Stack.Toolbar.Menu>
        </Stack.Toolbar.Menu>
        <ProfileButton />
      </Stack.Toolbar>
    </>
  );
}
