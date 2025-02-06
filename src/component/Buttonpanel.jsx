import { useGuess } from "../context/GuessContext";
import PropTypes from "prop-types";

export default function ButtonPanel({ onhandlemove }) {
  const { dispatch } = useGuess();

  const handleOpenRules = () => {
    dispatch({ type: "OPEN_RULES" });
  };

  const handleStartGame = () => {
    dispatch({ type: "START_GAME" }); 
    onhandlemove();
  };

  return (
    <div className="button-panel">
      <button className="btn start-btn" onClick={handleStartGame}>
        Start Game
      </button>
      <button className="btn rules-btn" onClick={handleOpenRules}>
        Rules
      </button>
    </div>
  );
}
ButtonPanel.propTypes = {
  onhandlemove: PropTypes.func.isRequired,
};
