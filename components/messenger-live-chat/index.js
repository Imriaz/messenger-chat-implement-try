"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const MessengerLiveChat = () => {
  return (
    <FacebookProvider appId="2302895319880854" chatSupport>
      <CustomChat pageId="100443455067967" />
    </FacebookProvider>
  );
};

export default MessengerLiveChat;
