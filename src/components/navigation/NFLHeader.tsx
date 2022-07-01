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
import { useNavigate } from "react-router-dom";

const logo = require("./assets/nfl-logo.png");

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
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
    fontSize: theme.fontSizes.lg,
    fontWeight: 600,
    cursor: "pointer",

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

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

interface NFLHeaderProps {
  links: {
    link: string;
    label: string;
  }[];
}

export function NFLHeader({ links }: NFLHeaderProps) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const navigate = useNavigate();
  const items = links.map((link) => {
    return (
      <div
        key={link.label}
        onClick={() => navigate(link.link)}
        className={classes.link}
      >
        {link.label}
      </div>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Image src={logo} height={60} />
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
        <Group spacing={5} className={classes.links}>
          {items}
          <Button<"a">
            component="a"
            radius="xl"
            sx={{ height: 30 }}
            href="https://fintechlab.nus.edu.sg/"
            size="md"
          >
            Visit our website
          </Button>
        </Group>
      </Container>
    </Header>
  );
}
