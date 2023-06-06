import { Link, useLoaderData } from "react-router-dom";
import { Text, GridItem, SimpleGrid } from "@chakra-ui/react";
export default function Careers() {
  const careers = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth={"200px"} p={"2rem"}>
      {careers.map((career) => (
        <GridItem
          border={"1px solid #fff"}
          borderRadius={"10px"}
          bg={"#fff"}
          key={career.id}
          p={"2rem"}
          boxShadow="xl"
        >
          <Link to={career.id.toString()}>
            <Text color={"#333"} fontSize={"1.2rem"}>
              {career.title}
            </Text>
          </Link>
          <Text color={"#777"} fontSize={"1.2rem"}>
            Based in: {career.location}
          </Text>
        </GridItem>
      ))}
    </SimpleGrid>
  );
}

// data loader
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  return res.json();
};
