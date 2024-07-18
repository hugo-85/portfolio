import TypeScriptIcon from "../svgs/TypeScriptIcon";
import TagBase from "../tag_base/TagBase";

export default function TypeScriptTag() {
  return (
    <TagBase
      icon={<TypeScriptIcon />}
      label="TypeScript"
      backgroundColor="rgb(2 85 186)"
    />
  );
}
