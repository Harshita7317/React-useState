import { useState } from "react";

const Array3 = () => {
  const [subject, setsubject] = useState([
    "BEC-202",
    "BSM-252",
    "BEC-252",
    "BEC-251",
    "BCS-251",
  ]);

  const addbtn = () => {
    let presentsubject = [...subject];
    presentsubject.push("AUC-07");
    presentsubject.push("ECE-252");
    setsubject(presentsubject);
  };

  const removebtn = () => {
    let presentsubject = [...subject];
    presentsubject.pop();
    setsubject(presentsubject);
  };
  return (
    <>
      <ul>
        {subject.map((v) => {
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
export default Array3;
