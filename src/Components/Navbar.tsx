import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
