"use client";
import React, { useEffect } from "react";

const MessengerChatTryNew = () => {
  useEffect(() => {
    // Load the Messenger plugin
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v13.0",
      });
    };

    // Render the Messenger chat plugin
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    // Add the Messenger chat plugin code
    <div
      className="fb-customerchat"
      attribution="setup_tool"
      page_id="100443455067967"
    ></div>
  );
};

export default MessengerChatTryNew;
