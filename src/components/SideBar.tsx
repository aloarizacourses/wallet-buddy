import { Text } from "@chakra-ui/react";
import Users from "./Users";
import useExpenses from "./expenses/storeExpenses";
import { getGeneralDebtObject } from "./expenses/storeExpensesService";

const SideBar = () => {
  const { expenses } = useExpenses();

  const debtObject = getGeneralDebtObject(expenses);

  return (
    <>
      <Text>
        {debtObject.acreditor} is to be payed: {debtObject.quantity}
      </Text>
      <Users />
    </>
  );
};

export default SideBar;
