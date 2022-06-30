import {
  createStyles,
  Overlay,
  Title,
  Button,
  Text,
  Stack,
} from "@mantine/core";

const metaverse = require("./assets/metaverse.gif");
const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage: `url(${metaverse})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },

  outer: {
    width: "full",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: theme.spacing.xl * 3,
    paddingTop: theme.spacing.xl * 10,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("md")]: {
      alignItems: "center",
    },
  },

  inner: {
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "right",
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("md")]: {
      textAlign: "center",
      alignItems: "center",
    },
  },

  hstack: {
    display: "flex",
    flexDirection: "row",
    zIndex: 1,
    position: "relative",
    paddingTop: theme.spacing.lg,
  },

  title: {
    color: theme.white,
    fontSize: 58,
    fontWeight: 700,
    lineHeight: 1.3,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 45,
      lineHeight: 1.4,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 30,
      lineHeight: 1.5,
    },
  },
  text: {
    color: theme.white,
    fontSize: 30,
    fontWeight: 600,
    lineHeight: 1.3,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      lineHeight: 1.4,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 20,
      lineHeight: 1.5,
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Stack className={classes.outer}>
        <Stack className={classes.inner}>
          <Title className={classes.title}>Reimagine, Reinvent, Realize.</Title>
          <Text className={classes.text}>
            Experience the Metaverse with NUS FinTech Labs
          </Text>
          <Stack className={classes.hstack}>
            <Button<"a">
              component="a"
              size="md"
              radius="xl"
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              href="https://forms.office.com/pages/responsepage.aspx?id=Xu-lWwkxd06Fvc_rDTR-gtM0nkKdTPRAuzZC7c5YhxRUOU5XUUxSQTBSSDk2NDFYUE1QWk9FT1UyTy4u"
            >
              RSVP to Our Launch
            </Button>
            <Button size="md" radius="xl" variant="default">
              Discover More
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
