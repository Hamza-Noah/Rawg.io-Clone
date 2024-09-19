import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Switch colorScheme="green" isChecked={colorMode === "dark"}  onChange={toggleColorMode}/>
        <Text>Color Mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
