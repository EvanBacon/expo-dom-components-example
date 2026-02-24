import { Stack, useRouter } from "expo-router";

export function ProfileButton() {
  const router = useRouter();
  return (
    <Stack.Toolbar.Button
      icon="person.crop.circle"
      onPress={() => router.push("./settings")}
    />
  );
}
