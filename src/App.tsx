import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ExpenseManager from "./components/expenses/ExpenseManager";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"nav nav" "aside main" "footer footer"`}
        templateColumns={"200px 1fr"}
      >
        <GridItem area="nav" bg="bg-surface" boxShadow="sm">
          <NavBar />
        </GridItem>
        <GridItem area="aside" bg={useColorModeValue("gray.50", "gray.900")}>
          <SideBar />
        </GridItem>
        <GridItem area="main" height="calc(100vh - 30vh)">
          <ExpenseManager />
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
