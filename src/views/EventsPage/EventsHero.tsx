import { createStyles, Overlay, Stack, Text, Title } from "@mantine/core";

const eventsimg = require("./assets/eventspage.png");

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 130,
    paddingBottom: 130,
    backgroundImage: `url(${eventsimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },
  inner: {
    position: "relative",
    zIndex: 1,
    padding: theme.spacing.xl * 2,
  },

  title: {
    color: theme.white,
    fontSize: 52,
    lineHeight: 1.2,
    fontWeight: 700,
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  subtitle: {
    color: theme.white,
    fontSize: 36,
    lineHeight: 1.3,
    marginTop: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: 20,
    },
  },

  text: {
    color: "dimgray",
    fontSize: 24,
    lineHeight: 1.3,
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.colors.orange[4],
    fontWeight: 500,
  },
}));
export function EventsHero() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <Stack className={classes.inner}>
        <Title className={classes.title}>Events in store for you.</Title>
        <Text className={classes.subtitle}>
          Discover what NUS FinTech Labs has to offer in a series of events
          tailor made for you.
          <br /> Experience the metaverse virtually or in person at a{" "}
          <span className={classes.highlight}>one-of-a-kind event.</span>
        </Text>
      </Stack>
    </div>
  );
}
