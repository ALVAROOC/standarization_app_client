import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import PublicHero from "./PublicHero";
import PublicFeatures from "./PublicFeatures";
import PublicSocialProof from "./PublicSocialProof";
import PublicCustomerLogo from "./PublicCustomerLogo";
import PublicPricing from "./PublicPricing";
import PublicFeatures2 from "./PublicFeatures2";

const Public = () => {
  return (
    <section className="">
      <PublicHeader />
      <PublicHero />
      <PublicCustomerLogo />
      {/* <PublicFeatures /> */}
      <PublicFeatures2 />
      <PublicSocialProof />
      <PublicPricing />
      <PublicFooter />
    </section>
  );
};
export default Public;
