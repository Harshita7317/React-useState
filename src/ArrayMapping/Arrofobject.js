import React from "react";
import { useState } from "react";
const Arrofob = () => {
  const [workers, setworkers] = useState([
    {
      name: " Ram",
      income: "15000",
      work: "Sales",
    },
    {
      name: "Ghanshyam",
      income: "20000",
      work: "Chef",
    },
    {
      name: "Rohan",
      income: "16000",
      work: "Hospitality",
    },
  ]);
  const addworker = () => {
    let newworkers = [...workers];
    newworkers.push({
      name: "Sohan",
      income: "18000",
      work: "Intern",
    });
    newworkers.push({
      name: "Jhon",
      income: "25000",
      work: "Designer",
    });
    setworkers(newworkers);
  };
  const removeworker = () => {
    const newworkers = [...workers];
    newworkers.pop();
    setworkers(newworkers);
  };
  const updateworker = (c) => {
    let oldworkers = [...workers];
    for (let i = 0; i < oldworkers.length; i++) {
      if (oldworkers[i] === c && oldworkers[i].name === "Ram") {
        oldworkers[i].income = "25000";
      }
      if (oldworkers[i] === c && oldworkers[i].name === "Ghanshyam") {
        oldworkers[i].income = "35000";
        oldworkers[i].work = "Developer";
      }
      if (oldworkers[i] === c && oldworkers[i].name === "Rohan") {
        oldworkers[i].income = "27000";
      }
    }
    setworkers(oldworkers);
  };
  return (
    <>
      <div>
        <h1>List of Workers :</h1>
        {workers.map((v, i) => {
          return (
            <div key={i}>
              <ul>
                <li> Name: {v.name} </li>
                <li> Income: {v.income}</li>
                <li>Work : {v.work}</li>
                <button
                  onClick={() => {
                    updateworker(v);
                  }}
                >
                  Update me
                </button>
              </ul>
            </div>
          );
        })}
        <button
          className="btn"
          style={{
            color: "black",
            background: "white",
          }}
          onClick={() => {
            addworker();
          }}
        >
          Add Worker
        </button>
        <button
          style={{
            color: "black",
            background: "white",
          }}
          onClick={() => {
            removeworker();
          }}
        >
          Remove Worker
        </button>
      </div>
    </>
  );
};
export default Arrofob;
