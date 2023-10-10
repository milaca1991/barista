import React from "react";
import { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";


const BaristaForm = () => {
  const [correct_temp, setCheckedTemperature] = useState("");
    const [correct_syrup, setCheckedSyrup] = useState("");
    const [correct_milk, setCheckedMilk] = useState("");
    const [correct_blended, setCheckedBlended] = useState("");

  const onCheckAnswer = () => {
  

    if (trueRecipe.temp != inputs["temperature"]) {
      setCheckedTemperature("wrong");
      alert("For temperature, that isn't even an option!, try again")
    } else {
      setCheckedTemperature("correct");
    }

    if (trueRecipe.syup != inputs["syup"]) {
      setCheckedSyrup("wrong");
      alert("For syrup, that isn't even an option!, try again")
    } else {
      setCheckedSyrup("correct");
    }

    if (trueRecipe.milk != inputs["milk"]) {
      setCheckedMilk("wrong");
      alert("For milk, that isn't even an option!, try again")
    } else {
      setCheckedMilk("correct");
    }

    if (trueRecipe.blended != inputs["blended"]) {
      setCheckedBlended("wrong");
      alert("For blended, that isn't even an option!, try again")
    } else {
      setCheckedBlended("correct");
    }
  };

  const getNextDrink = () => {
    //genera un index aleatorio del json
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

    //setea la bebida a lo que salioen el json random
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    //setea la receta
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  };

  const onNewDrink = () => {
    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: "",
    });

    getNextDrink();

    setCorrectTemperature("");
    setCorrectSyrup("");
    setCorrectMilk("");
    setCorrectBlended("");
  };

  //crea el estado de las variables
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });

  //defino los ingredientes

  const ingredients = {
    temperature: ["HOT", "Lukwarm", "cold"],

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

      {/* Step 5: Display the current drink */}
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="button"
          className="button newdrink new-drink-button"
          onClick={onNewDrink}
        >
          🔄
        </button>
      </div>

      <form className="container">
        <div className="mini-container">
          <h3>Temperature</h3>
          <div className="answer-space" id={correct_temp}>
            {inputs["temperature"]}
          </div>

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

        <div className="mini-container">
          <h3>Milk</h3>
          <div className="answer-space" id={correct_milk}>
            {inputs["milk"]}
          </div>
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
        <div className="mini-container">
          <h3>syrup</h3>
          <div className="answer-space" id={correct_syrup}>
            {inputs["syrup"]}
          </div>
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

        <div className="mini-container">
          <h3>blended</h3>
          <div className="answer-space" id={correct_blended}>
            {inputs["blended"]}
          </div>
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

<div className="botonSpace">

  <div>
      <button type="submit" className="button summit" onClick={onCheckAnswer}>
        {" "}
        check answer
      </button>
      </div>

      <div>
      <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
      >
        new drink
      </button>
      </div>

      </div>
    </>
  );
};

export default BaristaForm;
