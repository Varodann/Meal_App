import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useGetOneRecipe} from '../hooks/useGetOneRecipe';
import {Container} from 'reactstrap';
import './FormWithOneRecipe.css';

const FormWithOneRecipe = () => {
    const { id } = useParams();
    const { recipe } = useGetOneRecipe(id);

    // useEffect(() => {
    //     if (id) {
    //         fetchOneRecipe().then(r => console.log(r));
    //     }
    // }, [id]);

    const renderIngredients = () => {
        if (!recipe.extendedIngredients || recipe.extendedIngredients.length === 0) {
            return <p>There is no ingredients</p>;
        }

        return (
            <ul>
                {recipe.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.original}</li>
                ))}
            </ul>
        );
    };

    const renderInstructions = () => {
        if (!recipe.analyzedInstructions || recipe.analyzedInstructions.length === 0) {
            return <p>No instructions</p>;
        }

        const steps = recipe.analyzedInstructions[0].steps;

        return (
            <ol>
                {steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                ))}
            </ol>
        );
    };

    return (
        <Container>
            <header className="one-recipe-header">
                {/*??*/}
            </header>
            <main className="main">
                {recipe ? (
                    <>
                        <h1>{recipe.title}</h1>
                        <div className="recipe-details">
                            <p>Ready in <b>{recipe.readyInMinutes} minutes</b></p>
                            <p>Servings: {recipe.servings}</p>
                            <p>Health Score: {recipe.healthScore}</p>
                            {}
                        </div>
                        <div className="recipe-ingredients">
                            <h2>Ingredients</h2>
                            {renderIngredients()}
                        </div>
                        <hr />
                        <div className="recipe-instructions">
                            <h2>Instructions</h2>
                            {renderInstructions()}
                        </div>
                    </>
                ) : (
                    <p>Loading recipe...</p>
                )}
                <p>
                    <Link to={`/home`}>Home</Link>
                </p>
            </main>
            <footer className="footer">
                <p>© 2023 Recipe Search App</p>
            </footer>
        </Container>
    );
};

export default FormWithOneRecipe;
