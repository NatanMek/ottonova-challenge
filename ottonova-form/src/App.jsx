import { useState } from "react";
import Form from "./components/Form";
import TheHeader from "./components/UI/TheHeader";
import TheFooter from "./components/UI/TheFooter";

function App() {
  return (
    <>
      <TheHeader />
      <Form />
      <TheFooter />
    </>
  );
}

export default App;
