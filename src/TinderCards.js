import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  // create variable
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://news.schoolmedia.id/uploads/konten/e037ff5d4a6bf8ab1ce3ccda47751d0f7d17f408/2142863016.jpg"
    },
    {
      name: "Jeff Bezoz",
      url: "https://asset.kompas.com/crops/Nzd8Wg_VyGH8dM9CI4J1fqIupco=/0x0:3159x2106/750x500/data/photo/2021/05/02/608eb6854cbba.jpg"
    },
    {
      name: "Elon Musk",
      url: "https://news.schoolmedia.id/uploads/konten/e037ff5d4a6bf8ab1ce3ccda47751d0f7d17f408/2142863016.jpg"
    }
  ]);

  // swiped varible
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
   // setLastDirection(direction);
  };

  // out of frame variable
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return <div className="tinderCards">
    <div className="tinderCards__cardContrainer">
       { people.map((person) => (
         <TinderCard
         className="swipe"
         key={person.name}
         preventSwipe={["up","down"]}
         onSwipe={(dir) => swiped(dir, person.name)}
         onCardLeftScreen={() => outOfFrame(person.name)}>
           <div 
           style={{ backgroundImage: "url(" + person.url + ")" }}
           className="card">
             <h3>{person.name}</h3>
           </div>
           </TinderCard>
        ))}

      </div>
    </div>;
}

export default TinderCards;
