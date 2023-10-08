import React from "react";
import { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";




const BaristaForm = () => {
  const onCheckAnswer = () => {};

  const onNewDrink = () => {};

  //crea el estado de las variables
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  //defino los ingredientes

  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],

    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],

    milk: ["cow", "oat", "goat", "almond", "none"],

    blended: ["yes", "turbo", "no"],
  };

  const [currentDrink, setCurrentDrink] = useState(null);
  const [trueRecipe, setTrueRecipe] = useState(null);



  return (
    <>
      <div>
        <h2>Hi, I'd like to order a:</h2>
      </div>

      <form>
        {/* creo inputs para ingrediente temperatura*/}
        <div>
          <h3>Temperature</h3>
          <div className="answer-space">{inputs["temperature"]}</div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="temperature"
            choices={ingredients["temperature"]}
            checked={inputs["temperature"]}
          />
        </div>

        {/* creo inputs para ingrediente leche*/}

        <div>
          <h3>Milk</h3>
          <div className="answer-space">{inputs["milk"]}</div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
          />
        </div>

        {/* creo inputs para ingrediente syrup*/}
        <div>
          <h3>syrup</h3>
          <div className="answer-space">{inputs["syrup"]}</div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
          />
        </div>

        <div>
          <h3>blended</h3>
          <div className="answer-space">{inputs["blended"]}</div>
          <RecipeChoices
            handleChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }
            label="blended" 
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
          />
        </div>



      </form>

      <button type="submit" className="button summit" onClick={onCheckAnswer}>
        {" "}
        check answer
      </button>

      <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        new drink
      </button>
    </>
  );
};

export default BaristaForm;
