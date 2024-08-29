import axios from "axios";

export const loginHandler = async (number, password) => {
  try {
    const response = await axios.post(
      "https://bookyournightbacked.onrender.com/api/auth/login",
      {
        number: number,
        password: password
      }
    );
    const { accessToken, username } = response.data;
    
    console.log({ accessToken, username });
    return { accessToken, username };
  } catch (err) {
    console.log("Unable to login");
  }
};
