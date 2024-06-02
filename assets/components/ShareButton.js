// External imports
import { TouchableOpacity, Text, Share } from "react-native";
import tw from "twrnc";

/* Share Button
 * A custom component for the button used in the note editing screen in
 * order to share the note.
 *
 * @params: title: The note's title data
 *          content: The note's content data
 * @return: A custom button that opens the share system
 */
function ShareButton({ title, content }) {
  // Share function handler for when the button is pressed
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
