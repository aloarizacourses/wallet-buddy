import {
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import useExpenses from "./expenses/storeExpenses";
import {
  getSumOfAloQuantities,
  getSumOfAndaQuantities,
} from "./expenses/storeExpensesService";

const Users = () => {
  const { expenses } = useExpenses();

  getSumOfAndaQuantities;
  const color = useColorModeValue("gray.900", "whiteAlpha.900");
  return (
    <UnorderedList padding="20px">
      <ListItem color={color}>
        <Text>Anda: {getSumOfAndaQuantities(expenses)}</Text>
      </ListItem>
      <ListItem color={color}>
        <Text>Alo: {getSumOfAloQuantities(expenses)}</Text>
      </ListItem>
    </UnorderedList>
  );
};

export default Users;
