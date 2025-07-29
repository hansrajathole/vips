import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
      getRoom()
    }, [])
    
    const [roomName, setroomName] = useState("")
    const [openModal, setopenModal] = useState(false)
    const [roomData, setroomData] = useState([])


    const getRoom = async()=>{
        await axios.get("http://localhost:3000/allroom")
        .then((res)=>{
            console.log(res);
            setroomData(res.data.rooms)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3000/create", {roomName})
        .then((res)=>{
            console.log(res);
            getRoom()
            setopenModal(false)
            setroomName("")
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }


  return (
    <div className='p-10'>
      <button onClick={()=>{setopenModal(true)}} className='border  p-5 rounded-2xl'>Create Room</button>
      
      <br /> <br /><hr />
      <br />
      {
        openModal && <div className="h-screen w-screen flex justify-center items-center">
        <form onSubmit={handleSubmit}>
            <input type="text" name="room" id="" 
            value={roomName}
            onChange={(e)=>{setroomName(e.target.value)}}
            className='border p-3.5'
            />
            <button>Create</button>
        </form>
      </div>
      }

  
        {
            roomData.map((elem , index)=>{
                return <div className="p-2 border rounded-2xl w-fit cursor-pointer" onClick={()=>{navigate(`/room/${elem._id}`)}}>
                    {elem.name}
                </div>
            })
        }
   
    </div>
  )
}

export default Home
