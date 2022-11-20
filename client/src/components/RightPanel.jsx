import { VStack } from "@chakra-ui/react";
import ChatInput from "./ChatInput";
import MessageContainer from "./MessageContainer";

const RightPanel = () => {
  return (
    <VStack width="70%" pos="relative" height="96vh">
      <MessageContainer />
      <ChatInput />
    </VStack>
  );
};

export default RightPanel;
