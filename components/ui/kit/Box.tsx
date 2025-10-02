import { Text } from "react-native";
import { Box as GBox } from "../box";

export const Box = () => {
  return <GBox className="bg-green-500 p-4 rounded-[25px]">
    <Text className="text-white">Hello World</Text>
  </GBox>
}