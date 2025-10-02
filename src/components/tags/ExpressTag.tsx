import ExpressIcon from "../svgs/ExpressIcon";
import TagBase from "../tag_base/TagBase";

export default function ExpressTag() {
  return (
    <TagBase
      label="Express"
      icon={<ExpressIcon />}
      backgroundColor="rgb(96 99 99)"
    />
  );
}
