import { Center, Box, Image, Input, VStack, Button } from "@chakra-ui/react";
import logo from '../olx-logo.svg'
import React from "react"
import { registerWithEmailAndPassword } from "../firebase";

function Register(){
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")

    return(
        <>
        <Center minH={"100vh"}>
            <Box border="1px solid black" borderRadius={2} w={"20vw"} h={"50vh"}>

                <Center paddingY={10} flexDir="column">
                    <Image src={ logo } alt="OLX Logo"></Image>
                    <h3>Register for a new account</h3>
                </Center>

                <VStack spacing={15}>
                    <Input placeholder='Email' size='md' minWidth={"80%"} padding={5} type="email" onChange={(event) => setEmail(event.taget.value)}/>
                    <Input placeholder='Name' size='md' minWidth={"80%"} padding={5} type="text" onChange={(event) => setName(event.taget.value)}/>
                    <Input placeholder='Password' size='md' minWidth={"80%"} padding={5} type="password" onChange={(event) => setPassword(event.taget.value)}/>
                    <Button size='md' minWidth={"85%"} padding={5} onClick={() => registerWithEmailAndPassword(name, email, password)}>Register</Button>
                </VStack>

            </Box>
        </Center>
        </>
    )
}

export default Register;