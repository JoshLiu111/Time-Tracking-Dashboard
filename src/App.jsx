import { useState } from "react";
import TrackingDash from "./components/trackingDash";

function App() {
  const [timeframe, setTimeFrame] = useState("weekly");
  return (
    <main className="main-page">
      <h1 className="sr-only">Main page</h1>
      <TrackingDash timeframe={timeframe} setTimeFrame={setTimeFrame} />
    </main>
  );
}

export default App;
