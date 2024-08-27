import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import Colors from "@/constants/Colors";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="flower-tulip" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => <Entypo name="open-book" color={color} size={24} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
