import React from "react";
import { useState } from "react";
const ArrayofObject = () => {
  const [students, setstudents] = useState([
    {
      name: "Harshita",
      branch: "ECE",
      rollono: "2021041029",
      batch: "2025",
    },
    {
      name: "Astha ",
      branch: "ECE",
      rollono: "2021041021",
      batch: "2025",
    },
    {
      name: "Avantika",
      branch: "ECE",
      rollono: "2021041023",
      batch: "2025",
    },
    {
      name: "Sania",
      branch: "CSE",
      rollono: "202102167",
      batch: "2025",
    },
  ]);
  const deletestudent = (c) => {
    let oldstudents = [...students];
    let newstudents = oldstudents.filter((v, i) => v.name !== c.name);
    setstudents(newstudents);
  };
  const updatestudents = (c) => {
    let oldstudents = [...students];

    for (let i = 0; i < oldstudents.length; i++) {
      if (oldstudents[i] === c && oldstudents[i].name === "Harshita") {
        oldstudents[i].branch = "CSE";
      }
      if (oldstudents[i] === c && oldstudents[i].name === "Astha") {
        oldstudents[i].branch = "IT";
      }
      if (oldstudents[i] === c && oldstudents[i].name === "Avantika") {
        oldstudents[i].branch = "CSE";
      }
      if (oldstudents[i] === c && oldstudents[i].name === "Sania") {
        oldstudents[i].branch = "AI";
      }
    }
    setstudents(oldstudents);
  };
  return (
    <>
      <div>
        <h1>
          <u>List of students of MMMUT : </u>
        </h1>
        {students.map((v, i) => {
          return (
            <div key={i}>
              <ul>
                <li>Name : {v.name}</li>
                <li>Branch : {v.branch}</li>
                <li>Rollno: {v.rollono}</li>
                <li>Batch: {v.batch}</li>
                <button
                  onClick={() => {
                    deletestudent(v);
                  }}
                >
                  Delete me
                </button>
                <button
                  onClick={() => {
                    updatestudents(v);
                  }}
                >
                  Update me
                </button>
              </ul>
              ;
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ArrayofObject;
