import { Text } from "react-native/Libraries/Text/Text";

const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

  export default ProfileScreen;