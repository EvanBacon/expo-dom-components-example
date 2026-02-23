import { Link, Stack } from "expo-router";
import { Image, Pressable } from "react-native";

export function ScreenHeader({
  title,
  large = false,
  search = false,
}: {
  title: string;
  large?: boolean;
  search?: boolean;
}) {
  return (
    <>
      <Stack.Screen.Title large={large}>{title}</Stack.Screen.Title>
      {search && <Stack.SearchBar placeholder="Search" />}
      <Stack.Toolbar placement="right">
        <Stack.Toolbar.View>
          <Link href="./settings" asChild>
            <Pressable style={{ width: 30, height: 30 }}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderCurve: "continuous",
                }}
                source={require("@/public/evanbacon.jpg")}
              />
            </Pressable>
          </Link>
        </Stack.Toolbar.View>
      </Stack.Toolbar>
    </>
  );
}
