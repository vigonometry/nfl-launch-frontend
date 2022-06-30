import {
  Group,
  Avatar,
  Text,
  Accordion,
  Stack,
  createStyles,
} from "@mantine/core";
import { RecommendedEvents } from "./RecommendedEvents";
const demographicsList = [
  {
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/external-audience-circus-flaticons-lineal-color-flat-icons-4.png",
    label: "General Public",
    description:
      "For families, members of public and persons interested in FinTech",
    content:
      "Make NUS FinTech Lab a must visit destination for people from all walks of life.",
    filters: ["FinTech Fun"]
  },
  {
    image:
      "https://img.icons8.com/external-flaticons-flat-flat-icons/external-students-university-flaticons-flat-flat-icons-4.png",
    label: "Students",
    description:
      "For students from all backgrounds, looking to learn, upskill and embark on their FinTech journey.",
    content:
      "Pioneer experiential learning in the Singaporean FinTech ecosystem. ",
    filters: ["FinTech Fun", "Test of Tech"]
  },
  {
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/external-professionals-public-relations-agency-flaticons-lineal-color-flat-icons.png",
    label: "Professionals & Partners",
    description:
      "For career professionals and partners navigating a world in FinTech and looking for new opportunities.",
    content:
      "Upskill and edify career professionals through FinTech literacy and development opportunities.",
    filters: ["Career Development"],
  },
];

const useStyles = createStyles((theme) => ({
  stack: {
    padding: theme.spacing.xl * 4,
    paddingTop: theme.spacing.xl,
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.xl,
      alignItems: "baseline",
    },
  },

  title: {
    fontWeight: 700,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontSize: 40,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  accordion: {
    width: "100%",
  },

  description: {
    color: "dimgray",
    fontSize: 18,
    lineHeight: 1.3,

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

  boldText: {
    color: theme.black,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.3,
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 16,
    },
  },
}));

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel(content: AccordionLabelProps) {
  const { classes } = useStyles();

  return (
    <Group noWrap>
      <Avatar src={content.image} radius="xl" size="lg" />
      <Stack>
        <Text size="lg">{content.label}</Text>
        <Text className={classes.description}>{content.description}</Text>
      </Stack>
    </Group>
  );
}

export function VisionSection() {
  const { classes } = useStyles();
  const items = demographicsList.map((item) => (
    <Accordion.Item label={<AccordionLabel {...item} />} key={item.label}>
      <Text className={classes.text}>{item.content}</Text>
      <Text className={classes.boldText}>Recommended for you</Text>
      {RecommendedEvents(item.filters)}
    </Accordion.Item>
  ));

  return (
    <Stack className={classes.stack}>
      <Text className={classes.title}>Our Vision</Text>
      <Accordion
        initialItem={-1}
        iconPosition="right"
        className={classes.accordion}
      >
        {items}
      </Accordion>
    </Stack>
  );
}
