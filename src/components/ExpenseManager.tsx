import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface ExpenseInterface {
  index: number;
  description: string;
  aloQuantity: number;
  andaQuantity: number;
}
const expensesMock: ExpenseInterface[] = [
  { index: 0, description: "Green Thai : )", aloQuantity: 3, andaQuantity: 5 },
  { index: 1, description: "Music Bar", aloQuantity: 6, andaQuantity: 10 },
  { index: 2, description: "Schawarma", aloQuantity: 9, andaQuantity: 15 },
];

const ExpenseManager = () => {
  const [expenses] = useState(expensesMock);

  const width = 20;
  return (
    <>
      <FormControl>
        <HStack>
          <Text padding="30px">Add expense here, : )</Text>
          <Button colorScheme="telegram" type="submit">
            Add
          </Button>
        </HStack>

        <HStack m={10}>
          <HStack>
            <FormLabel>Description</FormLabel>
            <Input width={width} type="text" />
            <FormLabel>Anda</FormLabel>
            <Input width={width} type="number" />
            <FormLabel>Alo</FormLabel>
            <Input width={width} type="number" />
          </HStack>
        </HStack>
      </FormControl>

      {expenses.map((expense) => (
        <HStack key={expense.index}>
          <Text>Number</Text>
          <Text>{expense.index}</Text>
          <Text>Description</Text>
          <Text>{expense.description}</Text>
          <Text>Anda</Text>
          <Text>{expense.andaQuantity}</Text>
          <Text>Alo</Text>
          <Text>{expense.aloQuantity}</Text>
        </HStack>
      ))}
    </>
  );
};

export default ExpenseManager;
