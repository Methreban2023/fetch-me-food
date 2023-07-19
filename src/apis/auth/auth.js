const signIn = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/signIn", userInfo);
    storeToken(data.access);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const signOut = async (userInfo) => {
  try {
    console.log(userInfo);
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post("/auth/signOut", formData);
    storeToken(data.access);
    return data;
  } catch (error) {
    if (error.response.data.name === "ValidationError") {
      alert(
        "Your password must contain at least 1 uppercase letter, 1 number, and no less than 8 characters"
      );
    } else if (error.response.data.name === "MongoServerError") {
      alert("This user already exists");
    }
    console.log(error);
    throw error;
  }
};
