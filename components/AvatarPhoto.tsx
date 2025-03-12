import { Image, View } from "react-native";
import { CameraIcon, Icon, PlayIcon } from "./ui/icon";

interface AvatarPhotoProps {
  foto?: string;
}

export default function AvatarPhoto({ foto }: AvatarPhotoProps) {
  return foto ? (
    <View className="relative">
      <Image
        className="w-40 h-40 rounded-full "
        source={{
          uri: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
        }}
      />
      <Icon as={PlayIcon} size="xl" className="absolute bottom-0 right-0 " />
    </View>
  ) : (
    <View className="relative">
      <View className="items-center justify-center w-40 h-40 bg-gray-300 rounded-full">
        <Image source={require("../assets/images/li_user.png")} />
      </View>
      {/* <View className="absolute bottom-0 right-0 bg-gray-300 rounded-full text-primary-500"> */}
      {/* <Icon as={CameraIcon} size="xl" /> */}
      {/* </View> */}
    </View>
  );
}
