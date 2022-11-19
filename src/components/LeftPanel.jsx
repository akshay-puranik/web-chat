import { VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProfileCard from "./ProfileCard";
import SearchCard from "./SearchCard";
import UserCard from "./UserCard";

const LeftPanel = () => {
  const { state } = useContext(AppContext);

  return (
    <VStack width="25%">
      <ProfileCard />
      <SearchCard />
      <VStack
        width="100%"
        overflowY="auto"
        overflowX="hidden"
        maxH="80vh"
        spacing="0"
      >
        <UserCard />
        <UserCard />
        <UserCard /> <UserCard />
        <UserCard />
        <UserCard /> <UserCard />
        <UserCard />
        <UserCard /> <UserCard />
        <UserCard />
        <UserCard /> <UserCard />
        <UserCard />
        <UserCard />
      </VStack>
    </VStack>
  );
};

export default LeftPanel;
