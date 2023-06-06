import { Button, Flex, Heading, Stack, Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import Slider from "./Slider";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              There are millions of jobs to discover.
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for contract work. Its
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <NavLink to="careers">
                <Text fontSize={"1.2rem"}>find jobs now</Text>
              </NavLink>{" "}
            </Button>
            <Button rounded={"full"}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Box>
          <Slider />
        </Box>
      </Flex>
    </Stack>
  );
}
