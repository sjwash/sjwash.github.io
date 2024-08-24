import React from "react";
import { Group, Text } from "@mantine/core";

export const Header: React.FC = () => {
  return (
    <Group
      h="100%"
      justify="space-between"
      p="xl"
      style={{
        background: "linear-gradient(to bottom, #01261A,  #016135)",
      }}
    >
      <Text c="mistGrey.3" size="xl" fw="bolder">
        Sam Washabaugh
      </Text>
      <Text c="mistGrey.3" size="xl" fw="bolder">
        Software Engineer
      </Text>
    </Group>
  );
};
