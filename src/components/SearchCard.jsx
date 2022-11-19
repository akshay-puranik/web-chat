import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchCard = () => {
  const [input, setInput] = useState("");
  const handleClick = () => {
    if (!input.length) return;
    setInput("");
  };
  return (
    <Box width="90%">
      <InputGroup size="lg" rounded="lg">
        <Input
          textAlign="center"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Users..."
        />
        <InputRightElement onClick={handleClick} children={<BsSearch />} />
      </InputGroup>
    </Box>
  );
};

export default SearchCard;
