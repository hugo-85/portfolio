import FirebaseIcon from "../svgs/FirebaseIcon";
import TagBase from "../tag_base/TagBase";

export default function FirebaseTag() {
  return (
    <TagBase
      icon={<FirebaseIcon />}
      label="Firebase"
      backgroundColor="rgb(128 95 13)"
    />
  );
}
