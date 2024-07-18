import TagBase from "../tag_base/TagBase";
import StyledComponentsIcon from "../svgs/StyledComponentsIcon";

export default function StyledComponentsTag() {
  return (
    <TagBase
      icon={<StyledComponentsIcon />}
      label="Styled Components"
      backgroundColor="rgb(51 45 28)"
    />
  );
}
