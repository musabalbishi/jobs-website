import { Text, Box } from "@chakra-ui/react";

export default function Faq() {
  return (
    <Box p={"5rem"} maxW={"50rem"}>
      <Box mb={"1rem"}>
        <Text
          bg={"rgba(0,0,0,0.3)"}
          p={"1rem"}
          borderRadius={"10px"}
          w={"fit-content"}
          mb={"1rem"}
          fontSize={"1.3rem"}
        >
          How do you Apply to Jobs ?
        </Text>
        <Text>
          What’s great about applying for jobs on GrabJobs is that you don’t
          need a CV to apply for most jobs. You simply need to answer a few
          screening questions over an easy-to-use chat interface. Jobs with a
          “Fast Apply” button allow you to apply using chat.
        </Text>
      </Box>
      <Box mb={"1rem"}>
        <Text
          bg={"rgba(0,0,0,0.3)"}
          p={"1rem"}
          borderRadius={"10px"}
          w={"fit-content"}
          mb={"1rem"}
          fontSize={"1.3rem"}
        >
          How your CV is automatically generated?
        </Text>
        <Text>
          The answers you give to each screening question are sent to the
          employer and are also added to your Career Profile and CV. Your Career
          Profile and CV are automatically updated after each job application.
          The more jobs you apply to, the more chat questions you answer, and
          the more information your Career Profile and CV will have. We
          recommend that you apply to at least 3 jobs for your CV to look more
          complete and attractive to employers.
        </Text>
      </Box>
      <Box mb={"1rem"}>
        <Text
          bg={"rgba(0,0,0,0.3)"}
          p={"1rem"}
          borderRadius={"10px"}
          w={"fit-content"}
          mb={"1rem"}
          fontSize={"1.3rem"}
        >
          Complete your Profile for a higher chance of getting shortlisted
        </Text>
        <Text>
          At the top of your GrabJobs Profile, you will see help boxes that
          guide you on how to complete your profile. Follow them one by one to
          build an attractive Career Profile. Complete your profile and your
          applications are guaranteed to stand out above the rest.
        </Text>
      </Box>
    </Box>
  );
}
