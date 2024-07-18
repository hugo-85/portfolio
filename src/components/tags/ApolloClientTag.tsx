import ApolloClientIcon from "../svgs/ApolloClientIcon";
import TagBase from "../tag_base/TagBase";

export default function ApolloClientTag() {
  return (
    <TagBase
      icon={<ApolloClientIcon />}
      label="Apollo Client"
      backgroundColor="rgb(42 114 204)"
    />
  );
}
