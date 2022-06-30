import { Text } from "@mantine/core";
import { Error404 } from "tabler-icons-react";

export function ErrorPage() {
  return (
    <div>
      <Error404 />
      <Text>This page is still under construction or does not exist.</Text>
    </div>
  );
}
