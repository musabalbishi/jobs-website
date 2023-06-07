import { Link, useLoaderData } from "react-router-dom";
import {
  Text,
  CardHeader,
  CardBody,
  SimpleGrid,
  Card,
  Heading,
  Button,
  CardFooter,
} from "@chakra-ui/react";
export default function Careers() {
  const careers = useLoaderData();

  return (
    <SimpleGrid
      spacing={4}
      p={"2rem"}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      minChildWidth={"200px"}
    >
      {careers.map((career) => (
        <Card key={career.id}>
          <CardHeader>
            <Heading size="md">
              <Text
                color={"#333"}
                fontSize={"1.2rem"}
                _dark={{ color: "#fff" }}
              >
                {career.title}
              </Text>
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>{career.location}</Text>
          </CardBody>
          <CardFooter>
            <Button>
              <Link to={career.id.toString()}>
                <Text
                  color={"#333"}
                  fontSize={"1.2rem"}
                  _dark={{ color: "#fff" }}
                >
                  Details
                </Text>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
    // <SimpleGrid spacing={10} minChildWidth={"200px"} p={"2rem"}>
    //   {careers.map((career) => (
    //     <GridItem
    //       border={"1px solid #fff"}
    //       borderRadius={"10px"}
    //       bg={"#fff"}
    //       key={career.id}
    //       p={"2rem"}
    //       boxShadow="xl"
    //     >
    //       <Link to={career.id.toString()}>
    //         <Text color={"#333"} fontSize={"1.2rem"}>
    //           {career.title}
    //         </Text>
    //       </Link>
    //       <Text color={"#777"} fontSize={"1.2rem"}>
    //         Based in: {career.location}
    //       </Text>
    //     </GridItem>
    //   ))}
    // </SimpleGrid>
  );
}

// data loader
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  return res.json();
};
