import { Stack, Text } from "@mantine/core";
import { Error404 } from "tabler-icons-react";

export function ErrorPage() {
  return (
    <Stack p="xl" align="center" justify="center">
      <Error404 size={200} />
      <Text size="xl" weight={500}>This page is still under construction or does not exist.</Text>
    </Stack>
  );
}
