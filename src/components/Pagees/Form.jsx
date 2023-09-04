import React, {useEffect, useState} from "react"
import IngredientRecipes from "../IngredientRecipes"
import RecipeSearchForm from "../RecipeSearchForm"
import {useGetRecipe} from "../hooks/useGetRecipe"
import {Col, Container, Row} from "reactstrap";
import './Form.css';

const Form = () => {
  const { fetchRecipes, recipes } = useGetRecipe();
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container>
            <header className={`header ${scrolling ? 'scrolling' : ''}`}>
                <h1>Recipe Search App</h1>
            </header>

            <main className="main">
                <Row>
                    <Col>
                        <RecipeSearchForm fetchRecipes={fetchRecipes} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <IngredientRecipes
                            recipes={recipes}
                            onSelect={(recipe) => console.log(recipe)}
                        />
                    </Col>
                </Row>
            </main>

            <footer className="footer">
                <p>© 2023 Recipe Search App</p>
            </footer>
        </Container>
    );
}

export default Form;