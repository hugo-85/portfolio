import ExpoIcon from "../svgs/ExpoIcon";
import TagBase from "../tag_base/TagBase";

export default function ExpoTag() {
  return (
    <TagBase
      label="Expo"
      icon={<ExpoIcon />}
      backgroundColor="rgb(41 48 115)"
    />
  );
}
