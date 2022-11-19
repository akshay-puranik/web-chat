import { Avatar, AvatarBadge, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const UserCard = () => {
  const { state, dispatch } = useContext(AppContext);
  const active = true;
  return (
    <HStack
      width="100%"
      p="2"
      px="4"
      gap="2"
      borderBottom="1px solid #d6dee1"
      cursor="pointer"
      _hover={{ bgColor: "#d6dee1" }}
    >
      <Avatar src="https://bit.ly/ryan-florence">
        <AvatarBadge boxSize="1.25em" bg={active ? "green.500" : "red.500"} />
      </Avatar>
      <VStack width="100%" alignItems="flex-start" justify="center">
        <Text fontWeight="500" fontSize="lg" mb="-2">
          Sanjay Gupta
        </Text>
        <Text fontSize="0.8rem">8.39 pm</Text>
      </VStack>
    </HStack>
  );
};

export default UserCard;
