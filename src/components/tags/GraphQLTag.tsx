import GraphQLIcon from "../svgs/GraphQLIcon";
import TagBase from "../tag_base/TagBase";

export default function GraphQLTag() {
  return (
    <TagBase
      icon={<GraphQLIcon />}
      label="GraphQL"
      backgroundColor="rgb(51 5 32)"
    />
  );
}
