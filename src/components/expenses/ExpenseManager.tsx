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
import useExpenses from "./storeExpenses";

const ExpenseManager = () => {
  const { expenses, addExpense } = useExpenses();

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
            addExpense({
              index: 4,
              description: values.description,
              aloQuantity: values.aloQuantity,
              andaQuantity: values.andaQuantity,
            });

            // const newAloQuantity = expenses.reduce((acc, obj) => {
            //   return acc + obj.aloQuantity;
            // }, 0);
            // const newAndaQuantity = expenses.reduce((acc, obj) => {
            //   return acc + obj.andaQuantity;
            // }, 0);
            // console.log(newAloQuantity);
            // console.log(newAndaQuantity);
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
          {/* <Button bg="red">Delete</Button> */}
        </HStack>
      ))}
    </>
  );
};

export default ExpenseManager;
