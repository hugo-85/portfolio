import StripeIcon from "../svgs/StripeIcon";
import TagBase from "../tag_base/TagBase";

export default function StripeTag() {
  return (
    <TagBase
      icon={<StripeIcon />}
      label="Stripe"
      backgroundColor="rgb(5 2 94)"
    />
  );
}
