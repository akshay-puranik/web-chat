import { Avatar, Heading, HStack, WrapItem } from "@chakra-ui/react";

const ProfileCard = () => {
  return (
    <HStack width="90%">
      <Avatar
        size="lg"
        name="Sanjay Gupta"
        src="https://bit.ly/tioluwani-kolawole"
      />
      <Heading size="md">
        Hello <br />
        Sanjay Gupta
      </Heading>
    </HStack>
  );
};

export default ProfileCard;
