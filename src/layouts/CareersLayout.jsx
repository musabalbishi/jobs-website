import { Outlet } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export default function CareersLayout() {
  return (
    <>
      <Text p={"4rem"} fontSize={"2rem"} _dark={{ color: "#fff" }}>
        Careers
      </Text>

      <Outlet />
    </>
  );
}
