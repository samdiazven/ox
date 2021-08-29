import React, { ReactChild } from "react";
import { ReactChildren } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Profile } from "../../components/profile";
import { Sidebar } from "../../components/sidebar";

const Container = styled.div`
  ${tw`
        w-full
        h-screen
        justify-between
        flex
    `}
`;

export const DashboardContainer = ({ children }: { children: ReactChild }) => {
  return (
    <Container>
      <Sidebar />
      {children}
      <Profile />
    </Container>
  );
};
