import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Pagees/Form';
import FormWithOneRecipe from "./components/Pagees/FormWithOneRecipe";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/recipe/:id" element={<FormWithOneRecipe />} />
    </Routes>
  );
}

export default App;
