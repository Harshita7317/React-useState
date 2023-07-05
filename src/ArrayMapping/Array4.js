import { useState } from "react";

const Array4 = () => {
  const [Cafes, setCafes] = useState([
    "Rangreza",
    "Kohinoor",
    "Jail",
    "Chulha-Chowka",
    "Terai",
  ]);

  const addbtn = () => {
    let presentcafe = [...Cafes];
    presentcafe.push("Aashas");
    presentcafe.push("Vintage-Machine");
    setCafes(presentcafe);
  };

  const removebtn = () => {
    let presentcafe = [...Cafes];
    presentcafe.pop();
    setCafes(presentcafe);
  };
  return (
    <>
      <ul>
        {Cafes.map((v) => {
          return (
            <>
              <li>{v}</li>
            </>
          );
        })}
      </ul>
      <button onClick={() => addbtn()}>Add More</button>
      <button onClick={() => removebtn()}>Remove</button>
    </>
  );
};
export default Array4;
