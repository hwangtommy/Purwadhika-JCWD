import { Center, Box, Image, Text, VStack } from "@chakra-ui/react";

function ItemCard(props){
    return(
        <>
        <Box border={"1px solid grey"} minW="266px" minH="288px" margin={5}>
            <Center>
                <Image src={props.image} maxW="270px" maxH="153px"></Image>
            </Center>
            <VStack>
                <Center>
                    <h2>{props.itemPrice}</h2>
                </Center>
                <Center>
                    <Text>{props.itemDetails}</Text>
                </Center>
            </VStack>
        </Box>
        </>
    )
}

export default ItemCard;