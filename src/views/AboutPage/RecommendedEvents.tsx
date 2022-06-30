import { createStyles, SimpleGrid, Stack, Title } from "@mantine/core";
import { MiniEventCard } from "../../components/events/MiniEventCard";
import { eventList } from "../assets/eventList";

const useStyles = createStyles((theme) => ({
  stack: {
    padding: theme.spacing.xl * 2,
  },
}));

export function RecommendedEvents(filters: Array<string>) {
  const { classes } = useStyles();

  return (
    <Stack className={classes.stack}>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "lg" },
          { maxWidth: 755, cols: 1, spacing: "lg" },
        ]}
      >
        {eventList
          .filter((event) => filters.includes(event.tag))
          .map((event) => (
            <MiniEventCard {...event} />
          ))}
      </SimpleGrid>
    </Stack>
  );
}
