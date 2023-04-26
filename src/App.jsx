import { useState } from "react";
import "./App.css";
import caxios from "./api/customAxios";
import { getRequest, login, postRequest } from "./api/api";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
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

            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
