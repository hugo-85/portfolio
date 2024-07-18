import JestIcon from "../svgs/JestIcon";
import TagBase from "../tag_base/TagBase";

export default function JestTag() {
  return (
    <TagBase
      icon={<JestIcon />}
      label="Jest"
      backgroundColor="rgb(112 53 70)"
    />
  );
}
