import DownshiftIcon from "../svgs/DownshiftIcon";
import TagBase from "../tag_base/TagBase";

export default function DownshiftTag() {
  return (
    <TagBase
      icon={<DownshiftIcon />}
      label="Downshift"
      backgroundColor="#1a0303"
    />
  );
}
