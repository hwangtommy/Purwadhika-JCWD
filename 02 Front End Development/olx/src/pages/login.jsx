import { Center, Box, Image, Input, VStack, Button } from "@chakra-ui/react";
import logo from '../olx-logo.svg'
import React from "react"
import { logInWithEmailAndPassword } from "../firebase";
import { signInWithGoogle } from "../firebase";

function Login(){
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")

    return(
        <>
        <Center minH={"100vh"}>
            <Box border="1px solid black" borderRadius={2} w={"20vw"} h={"50vh"}>

                <Center paddingY={10} flexDir="column">
                    <Image src={ logo } alt="OLX Logo"></Image>
                    <h3>Login to your account</h3>
                </Center>

                <VStack spacing={15}>
                    <Input placeholder='Email' size='md' minWidth={"80%"} padding={5} type="email" onChange={(event) => setEmail(event.taget.value)}/>
                    <Input placeholder='Password' size='md' minWidth={"80%"} padding={5} type="password" onChange={(event) => setPassword(event.taget.value)}/>
                    <Button size='md' minWidth={"85%"} padding={5} onClick={() => logInWithEmailAndPassword(email, password)}>Log In</Button>
                    <Button size='md' minWidth={"85%"} padding={5} onClick={() => signInWithGoogle()}>Sign In with Google</Button>
                </VStack>

            </Box>
        </Center>
        </>
    )
}

export default Login;