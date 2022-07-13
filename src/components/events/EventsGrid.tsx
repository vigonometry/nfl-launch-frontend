import { createStyles, SimpleGrid, Stack, Title } from "@mantine/core";
import { EventCard } from "./EventCard";
import { eventList } from "../../views/assets/eventList";

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",
    marginBottom: theme.spacing.sm,

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },

  stack: {
    padding: theme.spacing.xl * 4,
    paddingTop: theme.spacing.xl,

    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.xl,
    },
  },
}));

export function EventsGrid(filter: string | null, pageTitle: string) {
  const { classes } = useStyles();

  return (
    <Stack className={classes.stack}>
      <Title className={classes.title}>{pageTitle}</Title>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "lg" },
          { maxWidth: 755, cols: 1, spacing: "lg" },
        ]}
      >
        {eventList
          .filter((event) => (filter === "All" ? true : filter === event.tag))
          .map((event) => (
            <EventCard {...event} />
          ))}
      </SimpleGrid>
    </Stack>
  );
}
