import ReactIcon from "../svgs/ReactIcon";
import TagBase from "../tag_base/TagBase";

export default function ReactTag() {
  return (
    <TagBase
      icon={<ReactIcon />}
      label="React"
      backgroundColor="rgb(55 116 128)"
    />
  );
}
