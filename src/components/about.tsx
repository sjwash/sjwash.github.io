import React from "react";
import { ActionIcon, Center, Stack, Text } from "@mantine/core";
import { IconBackhoe } from "@tabler/icons-react";

/** About content */
export const About: React.FC = () => {
  return (
    <Center py={100}>
      <Stack align="center">
        <Text c="mistGrey.3" size="xl" fw="bolder" tt="uppercase">
          On a coffee break
        </Text>
        <ActionIcon
          color="mistGrey.3"
          variant="outline"
          size={200}
          aria-label="Under Construction Logo"
        >
          <IconBackhoe style={{ width: "75%", height: "75%" }} />
        </ActionIcon>
        <Text c="mistGrey.3" size="xl" fw="bolder" tt="uppercase">
          Coming Soon
        </Text>
      </Stack>
    </Center>
  );
};
