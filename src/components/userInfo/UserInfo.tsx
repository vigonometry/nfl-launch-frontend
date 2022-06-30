import {
  createStyles,
  Avatar,
  Text,
  Group,
  Paper,
  Stack,
  Card,
  Box,
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  user: {
    position: "relative",
    backgroundColor: theme.white,
    width: "100%",
  },
  position: {
    fontWeight: 700,
    textTransform: "uppercase",
    color: "dimgray",
  },
  title: {
    fontWeight: 700,
    color: "dimgray",
  },
  name: {
    fontWeight: 500,
  },
  stack: {
    flexDirection: "column",
    alignItems: "baseline",
    marginLeft: theme.spacing.xl,
    [theme.fn.smallerThan("md")]: {
      alignItems: "center",
      justifyItems: "center",
      textAlign: "center",
      marginLeft: 0,
    },
  },
  group: {
    display: "flex",
    alignItems: "center",
    justifyItems: "space-between",
    flexDirection: "row",
    padding: 0,

    [theme.fn.smallerThan("lg")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center"
    },
  },
}));

interface UserInfoProps {
  avatar: string;
  name: string;
  position: string;
  title: string;
}

export function UserInfo(user: UserInfoProps) {
  const { classes } = useStyles();
  return (
    <Card withBorder shadow="md" radius="md" className={classes.user}>
      <Box className={classes.group}>
        <Avatar src={user.avatar} size={120} radius="md" />
        <Stack className={classes.stack}>
          <Text className={classes.position} size="sm">
            {user.position}
          </Text>
          <Text className={classes.title} size="sm">
            {user.title}
          </Text>
          <Text className={classes.name} size="lg">
            {user.name}
          </Text>
        </Stack>
      </Box>
    </Card>
  );
}
