import { Grid, useBreakpointValue, VStack } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import LinkCard from "../../components/cards/LinkCard"

const titles = [{title: "Our Vision", link: "/about/ourvision"}, {title: "Friends of FinTech", link:"/about/fof"}, {title: "Experiential Learning", link: "/about/ell"}]
const LinkCardGalleryDesktop = (
    <Grid templateColumns='repeat(3, 1fr)' gap={3} p={6} alignItems='center'>
        {titles.map(t => LinkCard(t))}
    </Grid>
)

const LinkCardGalleryMobile = (
    <VStack align='center' p={4}>
        {titles.map(t => LinkCard(t))}
    </VStack>
)

export default function LinkCardGallery() {
    const isSmallScreen = useBreakpointValue({base: true, lg: false})
    return (isSmallScreen || isMobile) ? LinkCardGalleryMobile : LinkCardGalleryDesktop
}