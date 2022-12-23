import { Center, Image, SimpleGrid } from "@chakra-ui/react";
import hero from "../hero_bg_id.jpg"
import tesla from "../tesla3.jpg"
import Navbar from "../components/navbar";
import ItemCard from "../components/itemcard";

function Home(){
    return(
        <>
        <Navbar />

        <Center>
            <Image src={ hero }></Image>
        </Center>

        <Center>
            <SimpleGrid columns={4} spacing={10}>
                <ItemCard image={tesla} itemPrice={"Rp.1.000.000.000"} itemDetails={"Tesla Model 3"} />
                <ItemCard image={tesla} itemPrice={"Rp.1.000.000.000"} itemDetails={"Tesla Model 3"} />
                <ItemCard image={tesla} itemPrice={"Rp.1.000.000.000"} itemDetails={"Tesla Model 3"} />
                <ItemCard image={tesla} itemPrice={"Rp.1.000.000.000"} itemDetails={"Tesla Model 3"} />
                <ItemCard image={tesla} itemPrice={"Rp.1.000.000.000"} itemDetails={"Tesla Model 3"} />
                <ItemCard image={tesla} itemPrice={"Rp.1.000.000.000"} itemDetails={"Tesla Model 3"} />
            </SimpleGrid>
            
        </Center>
        </>
        
    )

    
}

export default Home;