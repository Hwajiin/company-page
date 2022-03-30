import styled from "styled-components";
import useWidth from "../hooks/useWidth";
import BannerSection from "../layouts/bannerSection";
import DetailSection from "../layouts/detailSection";
import DownloadBar from "../layouts/downloadBar";
import ReviewSection from "../layouts/reviewSection";
import StaticsSection from "../layouts/staticsSection";
import { breakpoint } from "../styles/constants/responsive";

const Page = styled.div``;

const HomePage = () => {
  const { width } = useWidth();

  return (
    <Page>
      <BannerSection />
      <DetailSection />
      <StaticsSection />
      <ReviewSection />

      {width < breakpoint.md && <DownloadBar />}
    </Page>
  );
};

export default HomePage;
