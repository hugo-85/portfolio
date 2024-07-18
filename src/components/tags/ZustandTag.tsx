import ZustandIcon from "../svgs/ZustandIcon";
import TagBase from "../tag_base/TagBase";

export default function ZustandTag() {
  return (
    <TagBase
      icon={<ZustandIcon />}
      label="Zustand"
      backgroundColor="rgb(35 33 31)"
    />
  );
}
