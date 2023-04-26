### AXIOS Interceptor:

- If encryption is "TRUE" then all request will be encrypted and will decrypt all responses. If set to "FALSE" then the ecryption and decryption will be off.
- in the api.js file there are diffrent functions for GET, POST, PUT and DELETE. All the functins will have authorization token in header that will take accessToken from local storage.
- a seperate login function is available for logging in.
- an error handler is implemented to give a swal of the expections with error code and message.

NB: Please do nesessary changes on parameters, values like url, encryption before starting the application.

### Installations
```
npm i
npm run dev
```
### folder structure
```
├── src
│   ├── api
│   │   ├── utils 
|   |        ├── decryption.js
|   |        ├── encryption.js
│   ├── api.js
│   ├── customAxios.js
│   ├── responseHandlers.js
```


### Available functions:

- getRequest(url)
- postRequest(url, body)
- putRequest(url, body)
- delRequest(url, body)
- login(authUsername, authPass, grantType, phoneNumber, password) 

N.B: All paremeters are named and fucntional with associated backend created by 

### Examples:

#### for signing up: (postRequest function )
```

const signupResponse = await postRequest("/auth/signup", {
    "email": "email@gmail.com",
    "phoneNumber": "012345678912",
    "password": "111111"
     })
```
#### to login:
```
const loginResponse = await login("application","secret","password","012345678912","111111")
```
#### to check if token is valid. 
```
          const authCheckResponse = await getRequest("/auth/authcheck")

          const getSingleUser = await postRequest("/users/userdetails",{
            id:"**userid**"
          })
```

## Related resources
A node js backend with mongoose, oAuth and ecryption integrated. 
- https://github.com/Manassaharoy/nodejs_db_Oauth

## 🔗 Reach me anytime 
[![github](https://img.shields.io/badge/Github-Manas%20roy-black)](https://github.com/Manassaharoy)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/manassaharoy/)

