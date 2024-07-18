import TagBase from "../tag_base/TagBase";
import ReduxIcon from "../svgs/ReduxIcon";

export default function ReduxTag() {
  return (
    <TagBase
      icon={<ReduxIcon />}
      label="Redux"
      backgroundColor="rgb(23 14 38)"
    />
  );
}
