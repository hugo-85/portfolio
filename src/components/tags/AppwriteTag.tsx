import AppwriteIcon from "../svgs/AppwriteIcon";
import TagBase from "../tag_base/TagBase";

export default function AppwriteTag() {
  return (
    <TagBase
      label="Appwrite"
      icon={<AppwriteIcon />}
      backgroundColor="rgb(120 11 42)"
    />
  );
}
