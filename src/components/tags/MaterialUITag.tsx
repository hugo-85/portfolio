import MaterialUIIcon from "../svgs/MaterialUIIcon";
import TagBase from "../tag_base/TagBase";

export default function MaterialUITag() {
  return (
    <TagBase
      icon={<MaterialUIIcon />}
      label="Material UI"
      backgroundColor="#232394"
    />
  );
}
