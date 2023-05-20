import {
  ListItem,
  UnorderedList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Users = () => {
  const color = useColorModeValue("gray.900", "whiteAlpha.900");
  return (
    <UnorderedList padding="20px">
      <ListItem color={color}>
        <Text>Anda</Text>
      </ListItem>
      <ListItem color={color}>
        <Text>Alo</Text>
      </ListItem>
    </UnorderedList>
  );
};

export default Users;
