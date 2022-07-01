import { createStyles, Group, Select, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { EventsGrid } from "../../components/events/EventsGrid";
import { EventsHero } from "./EventsHero";

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    marginTop: theme.spacing.xs * 0.5,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontSize: 30,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 20,
      textAlign: "left",
    },
  },

  group: {
    paddingTop: theme.spacing.xl * 2,
    paddingLeft: theme.spacing.xl * 4,
    paddingRight: theme.spacing.xl * 4
  },
}));

export function EventsPage() {
  const { classes } = useStyles();
  const [value, setValue] = useState<string | null>("All");
  return (
    <div>
      <EventsHero />
      <Group className={classes.group} position="center" spacing="xs" >
        <Text className={classes.title}>I am interested in</Text>
        <Select
          value={value}
          onChange={setValue}
          data={["All", "Career Development", "FinTech Fun", "Test of Tech"]}
          size="md"
        />
      </Group>
      {EventsGrid(value, "")}
    </div>
  );
}
