import TailwindIcon from "../svgs/TailwindIcon";
import TagBase from "../tag_base/TagBase";

export default function TailwindTag() {
  return (
    <TagBase
      label="Tailwind"
      icon={<TailwindIcon />}
      backgroundColor="rgb(7 61 61)"
    />
  );
}
