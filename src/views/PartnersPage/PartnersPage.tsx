import { createStyles, Stack, Title } from "@mantine/core";
import { PartnersHero } from "./PartnersHero";

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
}));

export function PartnersPage() {
  const { classes } = useStyles();
  return (
    <Stack>
      <PartnersHero />
      <Title className={classes.title}>Platinum Sponsors</Title>
      <Title className={classes.title}>Gold Sponsors</Title>
      <Title className={classes.title}>Silver Sponsors</Title>
      <Title className={classes.title}>Community Partners</Title>
    </Stack>
  );
}
