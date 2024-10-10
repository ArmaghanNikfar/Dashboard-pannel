import connection from '../context/signalRservice'
import React, { useState } from "react";

const [messages, setMessages] = useState([]);

if ("Notification" in window && Notification.permission !== "denied") {
    // Browser supports notifications and user has not denied permission
    // Continue with setting up notifications
    }

//Request permission from the user
Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
    // User has granted permission
    // Continue with setting up notifications
    }
    });

// Call showNotification when a new message arrives
connection.on("ReceiveMessage", (user, message) => {
    setMessages((prevMessages) => [...prevMessages, { user, message }]);
    showNotification();
    });

    const showNotification = () => {
        if (Notification.permission === "granted") {
        new Notification("New Message", {
        body: {messages},
        });
        }
    };
