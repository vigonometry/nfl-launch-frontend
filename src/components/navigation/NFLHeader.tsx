import { Burger, createStyles, Group, Header, Image, MediaQuery } from "@mantine/core"
import SiteNavigationButtons from "./SiteNavigationButtons"

const logo = require('./assets/nfl-logo.jpeg')

const useStyles = createStyles((theme) => ({
    img: {
        [theme.fn.smallerThan('sm')]: {
            height: "25%",
        }
    }
}))

const NFLHeader = ({opened, toggle}: {opened: boolean, toggle: () => void}) => {
    const { classes } = useStyles()

    return (
        <Header height={84} p='xl'>
            <Group position="apart">
                <Image src={logo} height={60} className={classes.img}/>
                <MediaQuery smallerThan='sm' styles={{display: 'none'}}>
                    <Group>
                        <SiteNavigationButtons smallScreen={false}/>
                    </Group>
                </MediaQuery>
                <MediaQuery largerThan='sm' styles={{display: 'none'}}>
                    <Burger opened={opened} onClick={toggle}/>
                </MediaQuery>
            </Group>
        </Header>
    )
}

export default NFLHeader