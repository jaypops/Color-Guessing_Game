import { useGuess } from "../context/GuessContext";

export default function RulesPopup() {
  const { state, dispatch } = useGuess();

  if (!state.isRulesOpen) return null;

  const handleCloseRules = () => {
    dispatch({ type: "CLOSE_RULES" });
  };

  return (
    <div className="rules-popup">
      <div className="rules-content" data-testid="gameInstructions">
        <h2>Game Rules</h2>
        <p>1. A target color will be displayed at the top.</p>
        <p>2. You have 2 seconds to memorize it before it disappears.</p>
        <p>3. Click on the correct color from the six options below.</p>
        <p>
          4. If you guess correctly, you earn a point and new colors appear.
        </p>
        <p>5. If you guess wrong, your score decreases by one.</p>
        <p>6. Try to get the highest score possible!</p>
        <button className="btn close-btn" onClick={handleCloseRules}>
          Close
        </button>
      </div>
    </div>
  );
}
