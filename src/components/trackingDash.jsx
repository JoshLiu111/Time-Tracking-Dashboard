import data from "../data/data.json";
import Card from "./card";

const TrackingDash = ({ timeframe, setTimeFrame }) => {
  const renderCards = () => {
    return data.map((item) => {
      const { current, previous } = item.timeframes[timeframe];
      return (
        <Card
          key={item.title}
          title={item.title}
          timeframe={timeframe}
          current={current}
          previous={previous}
        />
      );
    });
  };
  return (
    <div className="container">
      <div className="menu-container">
        <div className="menu-avatar-container">
          <div className="menu-avatar-content">
            <img
              src="./images/image-jeremy.png"
              alt="user avatar"
              className="avatar-image"
            />
            <div className="user-info ">
              <p className="text-preset-6">Report for</p>
              <p className="user-name text-preset-2">Jeremy Robson</p>
            </div>
          </div>
        </div>
        <div className="buttons text-preset-5-regular">
          <button
            className={timeframe === "daily" ? "active" : ""}
            onClick={() => setTimeFrame("daily")}
          >
            Daily
          </button>
          <button
            className={timeframe === "weekly" ? "active" : ""}
            onClick={() => setTimeFrame("weekly")}
          >
            Weekly
          </button>
          <button
            className={timeframe === "monthly" ? "active" : ""}
            onClick={() => setTimeFrame("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>
      <div className="card-grid">{renderCards()}</div>
    </div>
  );
};

export default TrackingDash;
