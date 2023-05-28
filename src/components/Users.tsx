import {
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";

const Users = () => {
  const color = useColorModeValue("gray.900", "whiteAlpha.900");
  return (
    <UnorderedList padding="20px">
      <ListItem color={color}>
        <Text>Anda: {0}</Text>
      </ListItem>
      <ListItem color={color}>
        <Text>Alo: {0}</Text>
      </ListItem>
    </UnorderedList>
  );
};

export default Users;
