import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

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
        <GridItem area="aside" bg="gray.300">
          Aside
        </GridItem>
        <GridItem area="main" bg="gray.100" height="calc(100vh - 30vh)">
          Main
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
