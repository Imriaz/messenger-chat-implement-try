"use client";
import InfoCard from "@/components/info-card";
import MessengerChatTryNew from "@/components/try-new";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  const [divId, setDivId] = React.useState("");
  const handleChat = () => {
    setDivId("tawk_64abea54cc26a871b0277704");
  };
  return (
    <div>
      <InfoCard />
      <p
        style={{
          border: "2px solid black",
          padding: "10px",
          backgroundColor: "skyblue",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nisi rem
        facilis culpa saepe doloremque qui asperiores accusantium aperiam
        similique vel mollitia alias aliquid, quam iure ratione, molestiae
        optio. Totam ex harum neque dolore doloribus dignissimos voluptates
        distinctio ullam, ea dolorum corrupti ratione cupiditate aperiam eius
        molestias ipsam mollitia a.
      </p>
      <div style={{ padding: "50px" }}></div>
      <Link
        href="/"
        style={{ padding: "10px", backgroundColor: "skyblue", margin: "50px" }}
      >
        Home
      </Link>
      <p>Chat with us using the Messenger chat window below:</p>
      <MessengerChatTryNew />
    </div>
  );
};

export default ContactUs;
