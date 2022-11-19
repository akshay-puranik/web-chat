import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const handleClick = () => {
    if (!input.length) return;
    setInput("");
  };
  return (
    <Box width="96%" pos="absolute" bottom="0" zIndex="100" bg="white">
      <InputGroup size="lg">
        <InputLeftElement width="3rem" cursor="pointer">
          <span role="img" aria-label="emojis">
            😀
          </span>
        </InputLeftElement>
        <Input
          px="2"
          pr="4.5rem"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type Message..."
        />
        <InputRightElement width="4.5rem">
          <Button onClick={handleClick} variant="ghost">
            <FiSend size="25" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default ChatInput;
