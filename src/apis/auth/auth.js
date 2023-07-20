const signIn = async (userInfo) => {
  try {
    const res = await instance.post("/auth/signIn", userInfo);
    // storeToken(data.access);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const signUp = async (userInfo) => {
  try {
    console.log(userInfo);

    const formData = new FormData();

    for (const key in userInfo) {
      if (key !== "image") {
        formData.append(key, userInfo[key]);
      }
    }
    formData.append("image", {
      name: userInfo.image,
      type: "image/jpeg",
      uri: userInfo.image,
    });
    const res = await instance.post("/auth/signUp", formData);
    storeToken(res.data);
    return res.data;
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
