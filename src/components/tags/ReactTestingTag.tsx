import ReactTesting from "../svgs/ReactTesting";
import TagBase from "../tag_base/TagBase";

export default function ReactTestingTag() {
  return (
    <TagBase
      icon={<ReactTesting />}
      label="React Testing Library"
      backgroundColor="rgb(181 46 44)"
    />
  );
}
