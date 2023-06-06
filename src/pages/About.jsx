import { Text, Box } from "@chakra-ui/react";

function About() {
  return (
    <Box p={"5rem"}>
      <Text
        fontSize={"2rem"}
        m={"2rem 0"}
        color={"#333"}
        _dark={{ color: "#fff" }}
      >
        About us
      </Text>
      <Text
        color={"#333"}
        _dark={{ color: "#fff" }}
        fontSize={"2rem"}
        pb={"9rem"}
      >
        the leading online recruitment portal in the Middle East, used by over
        10 million experienced professionals from all sectors and job
        categories. It serves as the primary source of both local and expatriate
        talent to over 10,000 of the largest employers and recruitment agencies
        across the region. Founded in 2005, the company has transformed the
        regions online recruitment landscape through its innovative approaches
        as well as its relentless obsession with quality and excellence.
      </Text>
    </Box>
  );
}

export default About;
