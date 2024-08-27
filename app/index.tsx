import { useRouter } from "expo-router";
import { View, Text, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import React from "react";

import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground source={beachImage} resizeMode="cover" className="flex-1">
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
            <SafeAreaView className="flex-1 px-1 justify-between">
              <View>
                <Text className="text-center text-white text-4xl font-bold">Simple meditation</Text>
                <Text className="text-center text-white text-xl  mt-3">Simplifying Meditation for Everyone</Text>
              </View>
              <View>
                <CustomButton title="Get Started" onPress={() => router.push("/nature-meditate")} />
              </View>
              <StatusBar barStyle="light-content" />
            </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
