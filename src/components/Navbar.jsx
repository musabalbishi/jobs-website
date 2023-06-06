import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import { Heading, Flex, Text, ButtonGroup, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Heading
      p={"2rem"}
      bg={"#ccc"}
      _dark={{ bg: "#333", color: "#fff" }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text>JOBS</Text>
      <Flex gap={"2rem"} alignItems={"center"}>
        <NavLink to="/">
          <Text fontSize={"1.2rem"}>Home</Text>
        </NavLink>
        <NavLink to="about">
          <Text fontSize={"1.2rem"}>About</Text>
        </NavLink>
        <NavLink to="help">
          <Text fontSize={"1.2rem"}>Help</Text>
        </NavLink>
        <NavLink to="careers">
          <Text fontSize={"1.2rem"}>Careers</Text>
        </NavLink>

        <ButtonGroup display={"flex"} alignItems={"center"}>
          <Button>
            <NavLink to="login">
              <Text fontSize={"1.2rem"}>login</Text>
            </NavLink>
          </Button>
          <Button>
            <NavLink to="signup">
              <Text fontSize={"1.2rem"}>signup</Text>
            </NavLink>
          </Button>
          <Toggle />
        </ButtonGroup>
      </Flex>
    </Heading>
  );
}

export default Navbar;
