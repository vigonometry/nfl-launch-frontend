import { Burger, Group, Header, Image, MediaQuery } from "@mantine/core"
import SiteNavigationButtons from "./SiteNavigationButtons"

const logo = require('./assets/nfl-logo.png')

const NFLHeader = ({opened, toggle}: {opened: boolean, toggle: () => void}) => {

    return (
        <Header height={84} p='xl'>
            <Group position="apart">
                <Image src={logo} height={40}/>
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