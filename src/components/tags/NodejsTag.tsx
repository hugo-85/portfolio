import NodejsIcon from "../svgs/NodejsIcon";
import TagBase from "../tag_base/TagBase";

export default function NodejsTag() {
  return (
    <TagBase
      label="Node.js"
      icon={<NodejsIcon />}
      backgroundColor="rgb(7 68 33)"
    />
  );
}
