import { useState } from "react";
import playerData from "./playerData.js";
function BaseballCard(props) {
  const [side, setFront] = useState(true)
  function switchSide(){
    return setFront(!side)
  }

  if (side) {
    return (
      <div className="card" onClick={switchSide}>
        <h1>{props.name}</h1>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    );
  } else {
    let statsDisplay = [];
    for (const [key, value] of Object.entries(props.stats)) {
      statsDisplay.push([
        <p key={key}>
          {key}: {value}
        </p>,
      ]);
    }
    return (
      <div className="card" onClick={switchSide}>
        <h2>{props.name}</h2>
        <p>{props.team}</p>
        <p>{props.position}</p>
        <div>{statsDisplay}</div>
      </div>
    );
  }
}

function App() {
  const cards = playerData.map((player) => (
    <BaseballCard
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgUrl={player.imgUrl}
      key={player.cardId}
    />
  ));
  return <>{cards}</>;
}

export default App;
