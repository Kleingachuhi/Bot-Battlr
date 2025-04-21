import React from "react";
import BotCard from "./components/BotCard";
function YourBotArmy(props) {
  const bots = props.bots;
  const addBot = props.addBot;

  const botItems = bots.map((bot) => (
    <BotCard key={bot.id} bot={bot} addBot={addBot} />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botItems}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
