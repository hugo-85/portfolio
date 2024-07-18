import MswIcon from "../svgs/MswIcon";
import TagBase from "../tag_base/TagBase";

export default function MswTag() {
  return (
    <TagBase
      icon={<MswIcon height={"1em"} width={"1em"} />}
      label="MSW"
      backgroundColor="rgb(119 62 41)"
    />
  );
}
