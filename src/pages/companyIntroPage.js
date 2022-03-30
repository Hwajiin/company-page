import styled from "styled-components";
import CooperationSection from "../layouts/cooperationSection";
import DownloadSection from "../layouts/downloadSection";
import HistorySection from "../layouts/historySection";
import IntroSection from "../layouts/introSection";
import NewsSection from "../layouts/newsSection";
import WorkSection from "../layouts/workSection";

const Page = styled.div``;

const CompanyIntroPage = () => {
  return (
    <Page>
      <IntroSection />
      <HistorySection />
      <WorkSection />
      <CooperationSection />
      <NewsSection />
      <DownloadSection />
    </Page>
  );
};

export default CompanyIntroPage;
