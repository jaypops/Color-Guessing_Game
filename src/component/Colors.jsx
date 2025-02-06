import { useGuess } from "../context/GuessContext";

function Colors() {
  const { state, dispatch } = useGuess();

  const handleGuess = (colorCode) => {
    dispatch({ type: "Guess_Color", payload: { color: colorCode } });
  };

  return (
    <div className="Cmain">
      <div className="cpatch">
        <div
          className="ctarget"
          data-testid="colorBox"
          style={{
            backgroundColor: state.hiddenColor ? "#000" : state.targetColor,
          }}
        >
          <p>Guess This Color!</p>
        </div>
      </div>

      <div className="Cspace">
        {state.colors.map((color, index) => (
          <span
            key={index}
            className="cmini"
            data-testid="colorOption"
            style={{
              backgroundColor: color.code,
              cursor: state.hiddenColor ? "pointer" : "not-allowed",
              pointerEvents: state.hiddenColor ? "auto" : "none",
            }}
            onClick={() => handleGuess(color.code)}
          ></span>
        ))}
      </div>

      {state.gameStatus && (
        <p
          className={`game-status ${
            state.gameStatus === "Correct" ? "correct" : "wrong"
          }`}
          data-testid="gameStatus"
        >
          {state.gameStatus}
        </p>
      )}
    </div>
  );
}

export default Colors;
