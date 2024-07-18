import FramerIcon from "../svgs/FramerIcon";
import TagBase from "../tag_base/TagBase";

export default function FramerTag() {
  return (
    <TagBase
      icon={<FramerIcon />}
      label="Framer Motion"
      backgroundColor="#5d5d67"
    />
  );
}
