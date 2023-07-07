import { useState } from "react";

const ArrayObj = () => {
  const [Touristplaces, setTouristplaces] = useState([
    { place: "Taj Mahal", location: "Agra" },
    { place: "Red Fort", location: "Delhi" },
    { place: "Imambara", location: "Lucknow" },
    { place: "HawaMahal", location: "Jaipur" },
  ]);

  const deleteCurrent = (c) => {
    let presentlocations = [...Touristplaces];
    let newplaces = presentlocations.filter((v, i) => v.place !== c.place);
    setTouristplaces(newplaces);
  };

  //To update an element:
  const updateCurrent = (c) => {
    let presentlocations = [...Touristplaces];
    for (let i = 0; i < presentlocations.length; i++) {
      if (presentlocations.location !== c.location) {
        c.location = "Anonymous";
      }
    }
    Selection(presentlocations);
  };
  return (
    <>
      <h1>Tourist places in India:</h1>
      {Touristplaces.map((v, i) => {
        return (
          <div key={i}>
            <ul>
              <li>Place: {v.place}</li>
              <li>Location:{v.location}</li>
              <button onClick={() => deleteCurrent(v)} type="button">
                Delete Me
              </button>
              <button onClick={() => updateCurrent(v)} type="button">
                Update Me
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};
export default ArrayObj;
