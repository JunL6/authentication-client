import AUTH_USER from "./type";
import axios from "axios";

export const signup = formProps => dispatch => {
  let response = axios.post("http://localhost:3090/signup", formProps);
  //   axios.get(
  //     "http://localhost:3090",
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzc0OTU0ODdkY2FhYTFlZGQyNWIzODQiLCJpYXQiOjE1NTExOTcyNDI4NTF9.aVuVGqPOEUb25V0f-hMdIALOBwixEHahfrluCXFd-gw"
  //   );
  //   let response2 = axios.get("http://www.youtube.com");
  //   console.log(response2);
};
