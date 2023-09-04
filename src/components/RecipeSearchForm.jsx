import React, { useState } from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";
import './styles/RecipeSearchForm.css';

function RecipeSearchForm({ fetchRecipes }) {
    const [ingredients, setIngredients] = useState('');

    const handleInputChange = (event) => {
        setIngredients(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchRecipes(ingredients);
    };


    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Input
                    type="text"
                    value={ingredients}
                    onChange={handleInputChange}
                    placeholder="Enter ingredients...!"
                />
            </FormGroup>
            <Button type="submit" block color="success" className="my-custom-btn">Search</Button>
        </Form>
    );
}

export default RecipeSearchForm;
