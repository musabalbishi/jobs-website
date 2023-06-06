import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
export default function Contact() {
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormLabel>Message</FormLabel>
      <Input type="textarea" />
      <Button m={"1rem 0"}>SEND</Button>
      <FormHelperText>Well never share your email.</FormHelperText>
    </FormControl>
  );
}
