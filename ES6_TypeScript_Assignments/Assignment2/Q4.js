const chatRoomsUsers1 = [
    {
      Reshma: "hi",
    },
    { Sahil: "how are you" },
    { Deepak: "Hello! Reshma & Sahil" },
  ];
  const chatRoomsUsers2 = [
    {
      Siya: "Hey! I stuck in traffic now.",
    },
    { Falguni: "Okay, Siya. But please come as soon as possible." },
    { Dev: "Siya, Until you come I wll handle this." },
  ];
  const getUserName = (userData) => {
    console.log("chatroom1");
    userData.map((item) => console.log(item));
  };
  const getUserMessages = (userData) => {
    console.log("");
    console.log("chatroom2");
    userData.map((item) => console.log(item));
  };
  getUserName(chatRoomsUsers1);
  getUserMessages(chatRoomsUsers2);