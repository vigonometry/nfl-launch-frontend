import {
  Card,
  Image,
  Text,
  Badge,
  useMantineTheme,
  createStyles,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor: theme.white,
    textAlign: "left",
    width: "100%"
  },
  title: {
    display: "block",
    fontWeight: 500,
    fontSize: 18,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 16,
    },
  },
  text: {
    color: theme.black,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.3,
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 16,
    },
  },
  tag: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
  },
}));

interface MiniEventCardProps {
  image: string;
  title: string;
  description: string;
  tag: string;
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

export function MiniEventCard(event: MiniEventCardProps) {
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
    </Card>
  );
}
