import { FC, Fragment, ReactNode } from "react";

import tw from "twin.macro";

import Footer from "./Footer";
import Header from "./Header";

const Container = tw.div`relative m-0 overflow-hidden before:z-[12] before:pointer-events-none`;

const Wrapper = tw.div`relative m-auto my-12`;

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }: LayoutProps) => (
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
