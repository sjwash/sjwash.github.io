import React from "react";
import { AppShell, ScrollArea } from "@mantine/core";
import { About } from "../components/about";
import { Header } from "../components/header";

export const Home: React.FC = () => {
  return (
    <AppShell header={{ height: { base: 80, md: 100, lg: 120 } }} padding="md">
      <AppShell.Header withBorder={false}>
        <Header />
      </AppShell.Header>
      <AppShell.Main bg="darkEvergreen.5">
        <AppShell.Section grow component={ScrollArea} scrollbars="y">
          <About />
        </AppShell.Section>
      </AppShell.Main>
    </AppShell>
  );
};
