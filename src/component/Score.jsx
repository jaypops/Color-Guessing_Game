import { useGuess } from "../context/GuessContext";

function Score() {
  const { state } = useGuess();

  return (
    <div className="Sscore" data-testid="score">
      <h2>{`Score: ${state.score}`}</h2>
    </div>
  );
}

export default Score;
