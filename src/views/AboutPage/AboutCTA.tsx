import {
  Button,
  Container,
  createStyles,
  Group,
  Image,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Check } from "tabler-icons-react";

const aboutus = require("./assets/aboutus.png");
const useStyles = createStyles((theme) => ({
  outer: {
    padding: theme.spacing.xl,
  },
  inner: {
    display: "flex",
    alignContent: "baseline",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 520,
    marginRight: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.black,
    fontSize: 52,
    lineHeight: 1.2,
    fontWeight: 700,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
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

  list: {
    color: theme.black,
    fontSize: 20,
    lineHeight: 1.3,
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 16,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export function AboutCTA() {
  const { classes } = useStyles();
  return (
    <Container className={classes.outer} size="lg">
      <Group className={classes.inner}>
        <Stack className={classes.content}>
          <Title className={classes.title}>About Us</Title>
          <Text className={classes.text}>
            Transforming daily life, safely, through FinTech.
          </Text>
          <List
            mt={20}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <Check size={12} />
              </ThemeIcon>
            }
            className={classes.list}
          >
            <List.Item>
              <b>Thought Leadership</b> - A platform to connect industry
              leaders, governments, regulators and academia.
            </List.Item>
            <List.Item>
              <b>Innovation Support</b> - Nurture the next generation of FinTech
              leaders.
            </List.Item>
            <List.Item>
              <b>Education</b> - Showcasing student innovation, facilitating
              learning and granting the competitive edge.
            </List.Item>
          </List>
          <Button<"a">
            component="a"
            size="lg"
            radius="xl"
            href="https://fintechlab.nus.edu.sg/fof/"
          >
            Become a Friend
          </Button>
        </Stack>
        <Image src={aboutus} className={classes.image} width="120%" />
      </Group>
    </Container>
  );
}
