

const TeamZombieFighters = function ({ fighter, handleRemoveFighter }) {
    return (
      <>
        <div className="zombie-fighters">
          <ul>
            <li>
              <img src={fighter.img} />
            </li>
            <li>{fighter.name}</li>
            <li>Price: {fighter.price}</li>
            <li>
              Strength:
              {fighter.strength}
            </li>
            <li>
              Agility:
              {fighter.agility}
            </li>
          </ul>
          <div className = 'fighter-components-buttons' >
       <button onClick={function () {handleRemoveFighter(fighter)}}>Remove</button>
      
       </div>
  
        
        </div>
      </>
    );
};
export default TeamZombieFighters