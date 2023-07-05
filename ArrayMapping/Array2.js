import { useState } from "react";

const Array2 = () => {
  const [location, setlocation] = useState([
    "Lucknow",
    "Gorakhpur",
    "Varanasi",
    "Ayodhya",
  ]);

  const addbtn = () => {
    let prelocation = [...location];
    prelocation.push("Barabanki");
    prelocation.push("Faizabad");
    setlocation(prelocation);
  };

  const removebtn = () => {
    let prelocation = [...location];
    prelocation.pop();
    setlocation(prelocation);
  };
  return (
    <>
      <ul>
        {location.map((v) => {
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
export default Array2;
