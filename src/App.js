import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './components/pages/Form';
import FormWithOneRecipe from "./components/pages/FormWithOneRecipe";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
        <Route path="/home" element={<Form />} />
        <Route path="/recipe/:id" element={<FormWithOneRecipe />} />
    </Routes>
  );
}

export default App;
