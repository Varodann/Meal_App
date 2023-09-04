import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';
import './styles/IngredientRecipes.css';

function IngredientRecipes({ recipes, onSelect }) {
    return (
        <div className="ingredient-recipes">
            {recipes.length > 0 ? (
                <>
                    <h2>Recipes with the <b>Selected Ingredient</b></h2>
                    <Row>
                        {recipes.map((recipe, index) => (
                            <Col key={index} xs="6">
                                <Link to={`/recipe/${recipe.id}`} onClick={() => onSelect(recipe.title)}>
                                    <Card>
                                        <CardImg
                                            top
                                            src={recipe.image}
                                            alt={recipe.title}
                                            className="recipe-image"
                                        />
                                        <CardBody>
                                            <CardTitle>{recipe.title}</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </>
            ) : (
                <p>No recipes available with the selected ingredient.</p>
            )}
        </div>
    );
}


export default IngredientRecipes;
