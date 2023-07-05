import { useState } from "react";

const Array1 = () => {
  const [color, setcolor] = useState([
    "Red",
    "White",
    "Pink",
    "Blue",
    "Yellow",
  ]);

  const addbtn = () => {
    let presentcolor = [...color];
    presentcolor.push("Black");
    presentcolor.push("Violet");
    setcolor(presentcolor);
  };

  const removebtn = () => {
    let presentcolor = [...color];
    presentcolor.pop();
    setcolor(presentcolor);
  };
  return (
    <>
      <ul>
        {color.map((v) => {
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
export default Array1;
