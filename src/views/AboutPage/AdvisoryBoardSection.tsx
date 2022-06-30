import {
  Col,
  createStyles,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { UserInfo } from "../../components/userInfo/UserInfo";
import { teamList } from "./assets/teamList";

const useStyles = createStyles((theme) => ({
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

  subtitle: {
    fontWeight: 500,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    color: "dimgray",
    fontSize: 24,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 20,
      textAlign: "left",
    },
  },

  stack: {
    padding: theme.spacing.xl * 4,
    paddingTop: theme.spacing.xl,

    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.xl,
    },
  },
}));

export function AdvisoryBoardSection() {
  const { classes } = useStyles();
  return (
    <Stack className={classes.stack}>
      <Text className={classes.title}>Our Team</Text>
      <Text className={classes.subtitle}>
        Discover the team behind NUS FinTech Labs.
      </Text>
      <SimpleGrid
        cols={3}
        spacing={30}
        breakpoints={[
          { maxWidth: "lg", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        {teamList.map((member) => (
          <UserInfo {...member} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
