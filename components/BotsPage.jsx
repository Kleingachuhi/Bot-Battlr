import React, { useState, useEffect } from "react";
import BotsCollection from "./BotCollection";
import YourBotArmy from "../YourBotArmy";
import BotSpecs from "../components/BotSpecs";

function BotsPage() {
  const [allBots, setAllBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        const botsWithOwned = data.map((bot) => ({ ...bot, owned: false }));
        setAllBots(botsWithOwned);
      })
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  function clickBot(bot) {
    setSelectedBot(bot);
  }

  function addBot(botToToggle) {
    const updated = allBots.map((bot) =>
      bot.id === botToToggle.id ? { ...bot, owned: !bot.owned } : bot
    );
    setAllBots(updated);
  }

  function filterFreeBots() {
    return allBots.filter((bot) => !bot.owned);
  }

  function filterOwnedBots() {
    return allBots.filter((bot) => bot.owned);
  }

  function clearSpec() {
    setSelectedBot(null);
  }

  return (
    <div>
      <YourBotArmy bots={filterOwnedBots()} addBot={clickBot} />
      <br />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} clearSpec={clearSpec} addBot={addBot} />
      ) : (
        <BotsCollection bots={filterFreeBots()} addBot={clickBot} />
      )}
    </div>
  );
}

export default BotsPage;
