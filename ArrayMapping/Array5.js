import { useState } from "react";

const Array5 = () => {
  const [socialmedia, setsocialmedia] = useState([
    "Instagram",
    "Facebook",
    "Whatsapp",
    "Snapchat",
    "Tiktok",
  ]);

  const addbtn = () => {
    let presentsocialmedia = [...socialmedia];
    presentsocialmedia.push("Telegram");
    presentsocialmedia.push("Messenger");
    setsocialmedia(presentsocialmedia);
  };

  const removebtn = () => {
    let presentsocialmedia = [...socialmedia];
    presentsocialmedia.pop();
    setsocialmedia(presentsocialmedia);
  };
  return (
    <>
      <ul>
        {socialmedia.map((v) => {
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
export default Array5;
