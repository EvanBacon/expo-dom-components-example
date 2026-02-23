// This component is platform-specific.

import Dashboard from "@/components/shad/dashboard";
import { ScreenHeader } from "@/components/screen-header";
import * as Notifications from "expo-notifications";
import React from "react";
import { useScrollRef } from "@/lib/tab-to-top";
import * as Haptics from "expo-haptics";
import * as SplashScreen from "expo-splash-screen";

export default function IndexRoute() {
  return (
    <>
      <Dashboard
        notify={notify}
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
        ref={useScrollRef()}
        dom={{
          onLoadEnd(event) {
            // Keep the splash screen open until the DOM content has loaded.
            setTimeout(() => {
              SplashScreen.hideAsync();
            }, 1);
          },
        }}
      />
      <ScreenHeader title="Dashboard" large search />
    </>
  );
}

// native notify function
async function notify() {
  if (process.env.EXPO_OS === "web") {
    alert("New Order (from a DOM component 🚀)");
    return;
  }

  await Notifications.requestPermissionsAsync();

  await Notifications.scheduleNotificationAsync({
    identifier: "hello",
    content: {
      title: "New Order",
      body: "(from a DOM component 🚀)",
    },
    trigger: null,
  });
}
