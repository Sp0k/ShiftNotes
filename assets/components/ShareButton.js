import { TouchableOpacity, Text, Share } from "react-native";
import tw from "twrnc";

function ShareButton({ title, content }) {
  const shareHandler = async () => {
    Share.share(
      {
        title: "A Shift Note is being shared",
        message:
          title +
          "\n\n" +
          content +
          "\n____________________________\nPowered by Shift Notes",
      },
      {
        subject: "A friend shared a new Shift Note",
      },
    );
  };

  return (
    <TouchableOpacity onPress={shareHandler}>
      <Text>🔗</Text>
    </TouchableOpacity>
  );
}

export default ShareButton;
