import MySQLIcon from "../svgs/MySQLIcon";
import TagBase from "../tag_base/TagBase";

export default function MySQLTag() {
  return (
    <TagBase
      icon={<MySQLIcon />}
      label="MySQL"
      backgroundColor="rgb(5 27 33)"
    />
  );
}
