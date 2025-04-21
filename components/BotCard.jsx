import React from "react";

function BotCard(props) {
  const bot = props.bot;

  let botIcon;

  if (bot.bot_class === "Assault") {
    botIcon = <i className="icon military" />;
  } else if (bot.bot_class === "Defender") {
    botIcon = <i className="icon shield" />;
  } else if (bot.bot_class === "Support") {
    botIcon = <i className="icon ambulance" />;
  } else {
    botIcon = <div />;
  }

  function handleClick() {
    props.addBot(bot);
  }

  return (
    <div className="ui column">
      <div className="ui card" onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botIcon}
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" /> {bot.health}
          </span>
          <span>
            <i className="icon lightning" /> {bot.damage}
          </span>
          <span>
            <i className="icon shield" /> {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
