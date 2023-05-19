import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav nav" "aside main" "footer footer"`}>
        <GridItem area="nav" bg="coral">
          <NavBar />
        </GridItem>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
        <GridItem area="footer" bg="red">
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
