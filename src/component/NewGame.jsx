import { useGuess } from "../context/GuessContext";

function NewGame() {
  const { dispatch } = useGuess();
  const resetGame = () => {
    dispatch({ type: "Reset_Game" });
  };
  return (
    <button className="Nbtn" onClick={resetGame} data-testid="newGameButton">
      New game
    </button>
  );
}
export default NewGame;
