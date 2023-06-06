import { NavLink, Outlet } from "react-router-dom";
import { Text, Box, Button, ButtonGroup } from "@chakra-ui/react";

function HelpLayout() {
  return (
    <Box p={"3rem"}>
      <Text
        fontSize={"2rem"}
        m={"2rem 0"}
        color={"#333"}
        _dark={{ color: "#fff" }}
      >
        Help
      </Text>

      <ButtonGroup>
        <Button _active={{ bg: "fff" }}>
          <NavLink to="faq">FAQ</NavLink>
        </Button>
        <Button>
          <NavLink to="contact">contact us</NavLink>
        </Button>
      </ButtonGroup>

      <Outlet />
    </Box>
  );
}

export default HelpLayout;
