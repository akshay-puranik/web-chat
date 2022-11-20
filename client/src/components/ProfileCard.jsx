import { Avatar, Heading, HStack, WrapItem } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProfileCard = () => {
  const { state } = useContext(AppContext);

  return (
    <HStack width="90%">
      <Avatar size="lg" name="Sanjay Gupta" src="https://bit.ly/tioluwani-kolawole" />
      <Heading size="md">
        Hello <br />
        {state.mySelf.name}
      </Heading>
    </HStack>
  );
};

export default ProfileCard;
