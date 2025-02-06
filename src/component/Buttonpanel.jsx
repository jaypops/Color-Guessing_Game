import { useGuess } from "../context/GuessContext";
import PropTypes from "prop-types";

export default function ButtonPanel({ onsetPage }) {
  const { dispatch } = useGuess();

  const handleOpenRules = () => {
    dispatch({ type: "OPEN_RULES" });
  };

  const handleStartGame = () => {
    dispatch({ type: "START_GAME" });
    dispatch({ type: "RESET" });
    onsetPage((move) => !move);
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
  onsetPage: PropTypes.func.isRequired,
};
