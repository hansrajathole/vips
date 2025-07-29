import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const room = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  const [roomData, setRoomData] = useState({});
  const [massages, setMassages] = useState([]);
  const [socket, setsocket] = useState(null)
  const [currentMessage, setcurrentMassage] = useState("");



  const appendMessage = (msg)=>{
    const temp = massages
    temp.push(msg)
    setMassages([...temp])

  }

  useEffect(() => {
    getroomData();

    const temp = io("http://localhost:3000", {
      query: {
        roomId: roomId,
      },
    });

    temp.on("chacha", msg=>{
        console.log(msg);
        appendMessage(msg)
    })

    setsocket(temp)

  }, []);


  const getroomData = () => {
    axios
      .get("http://localhost:3000/room/" + roomId)
      .then((res) => {
        console.log(res.data);
        setRoomData(res.data.room);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="left h-full w-[30%] bg-gray-400">
        <div className="top flex justify-between p-2">
          <button
            className="text-5xl"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="ri-arrow-left-circle-fill"></i>
          </button>
          <h2 className="border text-3xl p-2 rounded-2xl">{roomData.name}</h2>
        </div>
      </div>
      <div className="right h-full w-[70%] bg-cyan-100 relative">
        <div className="top p-3">
            {
                massages.map((elem)=>{
                    return  <h1 className="p-1.5 border w-fit rounded-2xl mb-1 ">{elem}</h1>
                })
            }
        </div>
        <div className="bottom flex absolute bottom-0 left-0 w-full p-2.5">
          <input
            type="text"
            className="border w-full"
            value={currentMessage}
            onChange={(e) => {
              setcurrentMassage(e.target.value);
            }}
          />
          <button className="text-4xl" onClick={() => {
            socket.emit("chacha", currentMessage )
            appendMessage(currentMessage)
            setcurrentMassage("")
           
          }}>
            <i class="ri-send-plane-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default room;
