import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./components/contacts";
import AddContact from "./components/addContact";
import EditContact from "./components/editContact";
import NoPage from "./components/NoPage";
import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contacts />}></Route>
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/edit-contact/:id" element={<AddContact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
