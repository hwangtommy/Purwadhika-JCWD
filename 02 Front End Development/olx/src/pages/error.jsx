import { BiError } from "react-icons/bi";
import { Center, Icon, Text } from "@chakra-ui/react";

function Error(){
    return(
        <>
        <Center minH={"100vh"}>
            <Center flexDir="column" >
                <Icon as={BiError} boxSize={100}/>
                <Text fontSize={50} fontWeight="bold"> 404 Page Not Found</Text>
            </Center>
        </Center>
        </>
    )
}

export default Error;