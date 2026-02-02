const Card = ({ title, timeframe, current, previous }) => {
  const previousInfo = (timeframe) => {
    if (timeframe === "monthly") {
      return "Last Month";
    }
    if (timeframe === "weekly") {
      return "Last Week";
    }
    if (timeframe === "daily") {
      return "Yesterday";
    }
  };
  return (
    <div className={`card-container ${title.toLowerCase()}`}>
      <div className="card-content">
        <div className="card-info">
          <div className="title">
            <p className="title-text text-preset-5-medium">{title}</p>
            <img
              src="./images/icon-ellipsis.svg"
              alt="ellipsis"
              className="ellipsis"
            />
          </div>
          <div className="track">
            <p className="text-preset-1">{current}hrs</p>
            <p className="text-preset-6 previous-track">
              {previousInfo(timeframe)} - {previous}hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
