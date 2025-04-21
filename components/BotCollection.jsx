import React from "react";
import BotCard from "../components/BotCard";

function BotCollection(props) {
  const bots = props.bots;
  const addBot = props.addBot;

  const botItems = bots.map((bot) => (
    <BotCard key={bot.id} bot={bot} addBot={addBot} />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">
        {botItems}
      </div>
    </div>
  );
}

export default BotCollection;
