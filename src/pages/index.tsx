import PageContainer from "@components/Page-Container";
import React from "react";
import TopMenuBar from "@components/layout/TopMenu-Bar";
import LeftMenuBar from "@components/layout/LeftMenu-Bar";

/**
 * @function Home  Page component for root path.
 */
const Home: React.FC = () => {
  return (
    <PageContainer>
      <TopMenuBar />
      <LeftMenuBar />
    </PageContainer>
  );
};

export default Home;
