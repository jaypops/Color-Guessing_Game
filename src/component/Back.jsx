import { useGuess } from "../context/GuessContext";
import PropTypes from "prop-types";

export default function Back({ onsetPage }) {
  const { dispatch } = useGuess();

  const handleBack = () => {
    onsetPage((move) => !move);
    dispatch({ type: "RESET" });
  };

  return (
    <div className="back">
      <button className="btn start-btn" onClick={handleBack}>
        {`>`}
      </button>
    </div>
  );
}
Back.propTypes = {
  onsetPage: PropTypes.func.isRequired,
};
