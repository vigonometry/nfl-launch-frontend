import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  useMantineTheme,
  createStyles,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor: theme.white,
    textAlign: "left",
  },
  title: {
    display: "block",
    fontWeight: 500,
    fontSize: 30,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 24,
    },
  },
  text: {
    fontWeight: 300,
    fontSize: 20,
    color: "dimgray",
    marginBottom: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 18,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 16,
    },
  },
  tag: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
  },
  button: {
    width: "full",
    colorScheme: theme.colors.blue,
  },
}));

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  tag: string;
  link?: string;
}

const tagColor = (tag: string) => {
  switch (tag) {
    case "Career Development":
      return "pink";
    case "FinTech Fun":
      return "teal";
    case "Test of Tech":
      return "orange";
    default:
      return "blue";
  }
};

export function EventCard(event: EventCardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Card withBorder shadow="md" radius="md" className={classes.card}>
      <Card.Section>
        <Image src={event.image} height={180} />
      </Card.Section>

      <Badge
        className={classes.tag}
        variant="filled"
        color={tagColor(event.tag)}
      >
        {event.tag}
      </Badge>

      <Title className={classes.title}>{event.title}</Title>

      <Text className={classes.text}>{event.description}</Text>
      {event.link ? (
        <Button<"a"> component="a" className={classes.button} href={event.link}>
          Find out More
        </Button>
      ) : (
        <></>
      )}
    </Card>
  );
}
