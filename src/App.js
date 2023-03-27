import "./App.css";
import AboutMe from "./Components/Body/AboutMe";
import Header from "./Components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import CipherMap from "./Components/CipherMap/CipherMap";
import OnTheWeb from "./Components/OnTheWeb/OnTheWeb";
import Professional from "./Components/Body/Professional/Professional";
import Interests from "./Components/Body/Interests/Interests";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <div className="px-4">
          <AboutMe />
          <CipherMap />
          <OnTheWeb />
          <Professional />
          <Interests />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
