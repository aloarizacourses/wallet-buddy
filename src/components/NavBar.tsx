import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/walletBuddyLogo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack
      bg="bg-surface"
      boxShadow="sm"
      justifyContent="space-between"
      padding="10px"
    >
      <Box>
        <HStack>
          <Image src={logo} width={150} />
          <Text>Wallet Buddy</Text>
        </HStack>
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
