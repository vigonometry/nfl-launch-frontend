import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Image,
} from "@mantine/core";

import { useBooleanToggle } from "@mantine/hooks";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.md,
    textDecoration: "none",
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 600,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

interface NFLHeaderProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function NFLHeader({ links }: NFLHeaderProps) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const items = links.map((link) => {
    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button<"a">
          component="a"
          radius="xl"
          sx={{ height: 30 }}
          href="https://fintechlab.nus.edu.sg/"
        >
          Visit our website
        </Button>
      </Container>
    </Header>
  );
}
