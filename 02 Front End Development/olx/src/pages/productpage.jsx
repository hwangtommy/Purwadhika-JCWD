import { Center, Box, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import tesla from "../tesla3.jpg"

function ProductPage(){
    return(
        <>
        <Navbar />

        <Center paddingY={25}>
            <Center w={"1280px"} h={"480px"} backgroundColor="black">
            <Image src={ tesla } maxW="1280px" maxH="480px"></Image>
            </Center>
        </Center>

        <Center minW={"100vw"}>
            <Grid templateColumns={"2fr 1fr"} w={"70%"} gap={25}>
                <GridItem w={"100%"} backgroundColor="#fafafa">
                    <Box padding={25}>
                        <h1>Tesla Model 3</h1>
                        <Text>Di Jual Tesla Model 3 (Long Range) </Text>
                        <Text>Tahun 2015 pemakaian 2017. Kondisi Mulus</Text>
                    </Box>
                </GridItem>
                <GridItem w={"100%"} backgroundColor="#fafafa">
                    <Center>
                    <h1>Rp 1.000.000.000</h1>
                    </Center>
                </GridItem>
            </Grid>
        </Center>
        </>
    )
}

export default ProductPage;