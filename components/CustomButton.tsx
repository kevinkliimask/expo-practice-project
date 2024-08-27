import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({ title, onPress, textStyles = "", containerStyles = "" }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
