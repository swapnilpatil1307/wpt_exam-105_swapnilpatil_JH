import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <Mycomponent />
    </>
  );
}

function Mycomponent() {
  const appname = "MyChatApp";
  const studentname = "swapnil patil";
  const studentid = "210920520105";
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);

  const handlemessage = (e) => {
    setmessage(e.target.value);
  };

  const addmessage = async () => {
    const url = "http://localhost:3000/adduser";
    const data = {
      message: message,
    };

    await axios.post(url, data);
    const newlist = [data, ...list];
    setlist(newlist);
    setmessage("");
  };

  const showmsg = async () => {
    const url = "https://localhost:3000/user";
    const result = await fetch(url);
    const list = await result.json();

    const newlist = [...list];
    setlist(newlist);
  };

  useEffect(() => showmsg(), []);
  return (
    <div>
      <div classname="d-flex align-items-center mb-2 p-2 bg-secondary">
        <h1 className="p-2 fs-2">
          <strong>{appname}</strong>
        </h1>
        <h6 className="text-light">
          <em>
            by {studentname}
            {studentid}
          </em>
        </h6>
      </div>
      <div className="d-flex">
        <input
          classname="form-control me-2"
          type="text"
          value={message}
          placeholder="Lets chat here..."
          onChange={handlemessage}
        />

        <input
          className="btn btn-secondary w-25 "
          type="button"
          value="SEND"
          onClick={addmessage}
        />
      </div>
      {list.map((item, index) => (
        <div key={index}>
          <div className="alert-secondary d-flex mb-2 p-2">
            <strong>{item.message}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
