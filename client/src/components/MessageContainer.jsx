import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

const MessageRow = ({ self }) => {
  return (
    <VStack
      alignItems="flex-start"
      flexWrap="wrap"
      width="70%"
      rounded="sm"
      p="1"
      pos="relative"
      alignSelf={self ? "flex-end" : "flex-start"}
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    >
      <Text>I am Full Stack Developer Developer Developer Developer..</Text>
      <br />
      <Text fontSize="0.8em" as="i" pos="absolute" bottom="1" right="2">
        ~ 9.10 pm
      </Text>
    </VStack>
  );
};

const ChatHeader = () => {
  return (
    <HStack
      height="10vh"
      width="100%"
      borderBottom="1px solid #d6dee1"
      p="2"
      gap="3"
    >
      <HStack gap="3">
        <Avatar src="https://bit.ly/ryan-florence" />
        <Text fontWeight="500" fontSize="lg">
          Sanjay Gupta
        </Text>
      </HStack>
      <Text fontSize="0.9rem">Online</Text>
    </HStack>
  );
};

const MessageContainer = () => {
  return (
    <VStack width="100%" maxH="90vh">
      <ChatHeader />
      <VStack p="4" width="100%" maxH="74vh" gap="4" overflowY="auto">
        <MessageRow self={true} />
        <MessageRow self={false} />
        <MessageRow self={true} />
        <MessageRow self={true} />
        <MessageRow self={false} />
        <MessageRow self={true} />
        <MessageRow self={true} />
        <MessageRow self={false} />
        <MessageRow self={true} />
      </VStack>
    </VStack>
  );
};

export default MessageContainer;
