import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEmoji(emoji)
{
    return (
        <Entry 
            key={emoji.id}
            name={emoji.name}
            emoji={emoji.emoji}
            meaning={emoji.meaning}
        />
    );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(CreateEmoji)}
      </dl>
    </div>
  );
}

export default App;
