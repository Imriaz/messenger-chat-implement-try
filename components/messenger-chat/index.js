"use client";
import { FacebookProvider, CustomChat } from "react-facebook";
const MessengerChat = () => {
  return (
    <FacebookProvider appId="671138315032314" chatSupport>
      <CustomChat pageId="100443455067967" minimized={true} />
    </FacebookProvider>
  );
};

export default MessengerChat;
