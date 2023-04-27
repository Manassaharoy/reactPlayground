import { io } from 'socket.io-client';
import { useEffect, useState } from "react";
import caxios from "./api/customAxios";
import { getRequest, login, postRequest } from "./api/api";

const socket = io.connect("http://localhost:5000/")

function App() {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setChat([...chat, {message}]);
    setMessage("");
  };

  useEffect(()=>{
    socket.on("start", (payload)=>{
      console.log("start ----- ", payload);
    })
  }, [])


  useEffect(()=>{
    socket.on("message", (payload)=>{
      console.log("chat ---", payload.message)
      socket.emit("message", {message})
    })
  }, [chat])


  return (
    <>
      {/* <div>
        <button
          onClick={async () => {
            //   const response = await caxios.post("/auth/signup",{
            //     "email": "manas@gmail.com",
            //     "phoneNumber": "01515212629",
            //     "password": "111111"
            // });
            //   const signupResponse = await postRequest("/auth/signup", {
            //     "email": "manas@gmail.com",
            //     "phoneNumber": "01515212631",
            //     "password": "111111"
            // })
            // const loginResponse = await login("application","secret","password","01515212628","111111")
            // const authCheckResponse = await getRequest("/auth/authcheck")
            // const getSingleUser = await postRequest("/users/userdetails",{
            //   id:"6448d9000307c3e2e14f9b52"
            // })
            // console.log("After response ----- ",loginResponse);
          }}
        >
          run
        </button>
      </div> */}
      <div>
        {chat && chat.length > 0 ? (
          <div>
            {chat.map((payload, index) => {
              return <p key={index}>{payload.message}</p>;
            })}
          </div>
        ) : (
          <>
            <p
              style={{
                color: "black",
              }}
            >
              No chat
            </p>
          </>
        )}
      </div>
      <div>
        <form>
          <p>{message}</p>
          <input
            type="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button onClick={sendMessage}>Send</button>
        </form>
      </div>
    </>
  );
}

export default App;
