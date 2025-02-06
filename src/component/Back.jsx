import PropTypes from "prop-types";
function Back({ onhandlemove }) {
  return (
    <div className="back">
      <button className="btn start-btn" onClick={onhandlemove}>
        {`>`}
      </button>
    </div>
  );
}
Back.propTypes = {
  onhandlemove: PropTypes.func.isRequired,
};

export default Back;
