import { Box, Grid, GridItem, Center, Image, Menu, MenuButton, MenuList, MenuItem, Button, Input, Link } from "@chakra-ui/react";
import logo from '../olx-logo.svg'

function Navbar(){
    return(
        <>
        <Box minW={"100vw"} backgroundColor={"#eef1f3"}>
            <Center>

                <Grid templateColumns={"1fr 3fr 6fr 2fr"} w={"80%"} minH={"68px"}>

                    <GridItem>
                        <Center minH={"100%"}>
                            <Image src={ logo } alt="OLX Logo" minH={"42px"}></Image>
                        </Center>
                    </GridItem>

                    <GridItem>
                        <Center minH={"100%"}>
                            <Menu>
                                <MenuButton as={Button} paddingX={50} minWidth={"272px"} minHeight={"48px"}>
                                    Pilih Lokasi
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Batam</MenuItem>
                                </MenuList>
                            </Menu>
                        </Center>
                    </GridItem>

                    <GridItem>
                        <Center minH={"100%"}>
                            <Input placeholder='Temukan Mobil, Handphone, dan lainnya ...' minWidth={"90%"} minHeight={"44px"} paddingX={5} />
                        </Center>
                    </GridItem>

                    <GridItem>
                        <Center minH={"100%"}>
                            <Link paddingX={25}>Sign Up</Link>
                            <Link paddingX={25}>Login</Link>
                        </Center>
                    </GridItem>
                
                </Grid>

            </Center>
            
        </Box>
        </>
    )
}

export default Navbar;