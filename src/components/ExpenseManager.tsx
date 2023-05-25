import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
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
  const [expenses, setExpenses] = useState(expensesMock);

  
  return (
    <>
      <Box bg="gray.500" p={6}>
        <Formik
          initialValues={{
            description: "",
            andaQuantity: 0,
            aloQuantity: 0,
          }}
          onSubmit={(values) => {
            let greatest = -Infinity;
            for (let x in expenses) {
              if (expenses[x].index > greatest) {
                greatest = expenses[x].index;
              }
            }

            setExpenses([
              ...expenses,
              {
                index: greatest + 1,
                description: values.description,
                aloQuantity: values.aloQuantity,
                andaQuantity: values.andaQuantity,
              },
            ]);
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <VStack>
                <FormControl>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Field
                    as={Input}
                    id="description"
                    name="description"
                    type="text"
                    variant="filled"
                  />
                  <FormLabel htmlFor="andaQuantity">Anda</FormLabel>
                  <Field
                    as={Input}
                    id="andaQuantity"
                    name="andaQuantity"
                    type="number"
                    variant="filled"
                  />
                  <FormLabel htmlFor="aloQuantity">Alo</FormLabel>
                  <Field
                    as={Input}
                    id="aloQuantity"
                    name="aloQuantity"
                    type="number"
                    variant="filled"
                  />
                </FormControl>
                <Button type="submit" colorScheme="linkedin" p={4}>
                  Add
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>

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
