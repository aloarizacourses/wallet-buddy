import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/walletBuddyLogo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} width={150} />
      <Text>Wallet Buddy</Text>
    </HStack>
  );
};

export default NavBar;
