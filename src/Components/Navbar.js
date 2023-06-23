import { useState } from "react";

<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed&display=swap"
  rel="stylesheet"
/>;

const Navbar = () => {
  const [counter, setcounter] = useState(0);
  let Level = "";
  console.log(Level);
  if (counter < 5) {
    Level = "Low";
  } else if (counter > 20) {
    Level = "High! Congratulations ";
  } else {
    Level = "Medium,Keep it up";
  }
  return (
    <>
      <div className="outer-box">
        <div className="container">
          <div className="inner-box">
            <h1>{counter} Likes</h1>
            <h2 className="level">
              {" "}
              Level = <span>{Level}</span>
            </h2>
            <span onClick={() => setcounter(counter + 1)}>👍🏽</span>
            <span onClick={() => setcounter(counter - 1)}> 👎🏽</span>
            <h3>
              {" "}
              Hit the like or dislike button to increase/decrease the likes!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
