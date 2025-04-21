import React from "react";
import { useState } from "react";
function BotSpecs(props) {
  const bot = props.bot;
  const [buttonColor, setButtonColor] = useState("blue") 
const [botState, setBotState] = useState('Enlist')
  let botIcon;
  if (bot.bot_class === "Assault") {
    botIcon = <i className="icon large circular military" />;
  } else if (bot.bot_class === "Defender") {
    botIcon = <i className="icon large circular shield" />;
  } else if (bot.bot_class === "Support") {
    botIcon = <i className="icon large circular ambulance" />;
  } else {
    botIcon = <div />;
  }

  function handleGoBack() {
    props.clearSpec();
  }

  function handleToggleArmy() {
    props.addBot(bot);
    setBotState('X')
    setButtonColor("red")
  }
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            <strong>
              Class: {bot.bot_class} {botIcon}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button fluid" onClick={handleGoBack}>
              Return
            </button>
            <button className="ui button fluid" onClick={handleToggleArmy}  style={{backgroundColor:buttonColor}} >
        {botState === "Enlist" ? "Enlist" : "X" }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;