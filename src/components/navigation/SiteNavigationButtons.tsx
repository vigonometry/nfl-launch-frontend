import { Button, createStyles, Group, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const routes = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/events",
    label: "Events",
  },
  {
    link: "/projects",
    label: "Projects",
  },
  {
    link: "/partners",
    label: "Partners",
  },
  {
    link: "/donate",
    label: "Donate",
  },
];

const useStyles = createStyles((theme) => ({
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
}));

const SiteNavigationButtons = ({
  smallScreen,
}: {
  smallScreen: boolean | undefined;
}) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const size = smallScreen ? "md" : "lg";
  const variant = "subtle";
  const color = smallScreen ? undefined : "dark";
  const buttonGroup = routes.map((x) => (
    <div
      key={x.label}
      onClick={() => navigate(x.link)}
      className={classes.link}
    >
      {x.label}
    </div>
  ));

  return smallScreen ? (
    <Stack justify="flex-start">
      {buttonGroup}
      <Button<"a">
        component="a"
        radius="xl"
        sx={{ height: 30 }}
        href="https://fintechlab.nus.edu.sg/"
        size="md"
      >
        Visit our website
      </Button>
    </Stack>
  ) : (
    <Group align="center">
      {buttonGroup}
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
  );
};

export default SiteNavigationButtons;
