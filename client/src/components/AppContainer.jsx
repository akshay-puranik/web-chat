import { Stack, VStack } from "@chakra-ui/react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const AppContainer = () => {
  return (
    <Stack direction="row" p="2" maxH="99vh">
      <LeftPanel />
      <RightPanel />
    </Stack>
  );
};

export default AppContainer;
