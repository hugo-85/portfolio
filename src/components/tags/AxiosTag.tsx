import AxiosIcon from "../svgs/AxiosIcon";
import TagBase from "../tag_base/TagBase";

export default function AxiosTag() {
  return (
    <TagBase
      icon={<AxiosIcon />}
      label="Axios"
      backgroundColor="rgb(4 14 37)"
    />
  );
}
