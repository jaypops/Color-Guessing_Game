import { useContext, useReducer, createContext, useEffect } from "react";
import PropTypes from "prop-types";

const GuessContext = createContext();

function getRandomColors() {
  const allColors = [
    { name: "Red", code: "#FF0000" },
    { name: "Blue", code: "#0000FF" },
    { name: "Yellow", code: "#FFFF00" },
    { name: "Green", code: "#008000" },
    { name: "Orange", code: "#FFA500" },
    { name: "Purple", code: "#800080" },
    { name: "DarkBlue", code: "#00008B" },
    { name: "Cyan", code: "#00FFFF" },
    { name: "Teal", code: "#008080" },
    { name: "Olive", code: "#808000" },
  ];
  const shuffled = allColors.sort(() => Math.random() - 0.5).slice(0, 6);
  return shuffled;
}

const initialState = {
  colors: getRandomColors(),
  targetColor: "",
  score: 0,
  hiddenColor: false,
  isRulesOpen: false,
  gameStatus: "",
};

initialState.targetColor =
  initialState.colors[
    Math.floor(Math.random() * initialState.colors.length)
  ].code;

function reducer(state, action) {
  switch (action.type) {
    case "Guess_Color": {
      const isCorrect = action.payload.color === state.targetColor;
      const newColors = getRandomColors();
      return {
        ...state,
        score: isCorrect ? state.score + 1 : Math.max(0, state.score - 1),
        colors: newColors,
        targetColor:
          newColors[Math.floor(Math.random() * newColors.length)].code,
        gameStatus: isCorrect ? "Correct" : "Wrong",
        hiddenColor: false,
      };
    }

    case "Reset_Game": {
      const resetColors = getRandomColors();
      return {
        ...state,
        score: 0,
        colors: resetColors,
        targetColor:
          resetColors[Math.floor(Math.random() * resetColors.length)].code,
        gameStatus: "",
        hiddenColor: false,
      };
    }

    case "CLEAR_STATUS": {
      return {
        ...state,
        gameStatus: "",
      };
    }

    case "HIDE_TARGET_COLOR": {
      return {
        ...state,
        hiddenColor: true,
      };
    }

    case "OPEN_RULES":
      return { ...state, isRulesOpen: true }

    case "CLOSE_RULES":
      return { ...state, isRulesOpen: false }

    default:
      throw new Error("Unknown action type");
  }
}

function GuessProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.gameStatus) {
      const timer = setTimeout(() => {
        dispatch({ type: "CLEAR_STATUS" });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [state.gameStatus]);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      dispatch({ type: "HIDE_TARGET_COLOR" });
    }, 2000);
    return () => clearTimeout(hideTimer);
  }, [state.targetColor]);

  return (
    <GuessContext.Provider value={{ state, dispatch }}>
      {children}
    </GuessContext.Provider>
  );
}

function useGuess() {
  const context = useContext(GuessContext);
  if (!context) throw new Error("useGuess must be used within a GuessProvider");
  return context;
}

GuessProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GuessProvider, useGuess };
