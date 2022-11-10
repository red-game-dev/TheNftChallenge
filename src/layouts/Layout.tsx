import { Fragment } from "react";

import tw from "twin.macro";

import Footer from "./Footer";
import Header from "./Header";

const Container = tw.div`relative m-0 overflow-hidden before:z-[12] before:pointer-events-none`;

const Wrapper = tw.div`relative m-auto my-12`;


const Layout = ({ title, children }: any) => (
    <Fragment>
      <Container>
        <Header title={title} />
          <Wrapper>
            {children}
          </Wrapper>
        <Footer />
      </Container>
    </Fragment>
  );

export default Layout;
