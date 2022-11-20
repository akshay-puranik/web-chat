import { Avatar, AvatarBadge, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { SET_SELECTED_USER } from "../context/actionTypes";
import { AppContext } from "../context/AppContext";

const UserCard = ({ userId, name, status, socketId }) => {
  const { state, dispatch } = useContext(AppContext);

  const handleClick = () => dispatch({ type: SET_SELECTED_USER, payload: { userId, socketId } });

  return (
    <HStack
      width="100%"
      p="2"
      px="4"
      gap="2"
      borderBottom="1px solid #d6dee1"
      cursor="pointer"
      _hover={{ bgColor: "#d6dee1" }}
      onClick={handleClick}
    >
      <Avatar src="https://bit.ly/ryan-florence">
        <AvatarBadge boxSize="1.25em" bg={status == "Online" ? "green.500" : "red.500"} />
      </Avatar>
      <VStack width="100%" alignItems="flex-start" justify="center">
        <Text fontWeight="500" fontSize="lg" mb="-2">
          {name}
        </Text>
        <Text fontSize="0.8rem">
          {status == "Online" ? "Online" : new Date(status).toLocaleString()}
        </Text>
      </VStack>
    </HStack>
  );
};

export default UserCard;
