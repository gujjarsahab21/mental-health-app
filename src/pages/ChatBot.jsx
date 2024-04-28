import React, { useContext, useState } from "react";
import { assets } from "../assets/chat/assets.js";
import "../styles/chat.css";
import axios from "axios";

function ChatBot() {
    const [messages,  setmessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/get?msg=${input}`);
            if (response.status == 200) {
                console.log(response.data);
                const message = {
                    sender: input,
                    bot: response.data
                }
                setmessages([...messages, message]);
                setInput("");
            }
        } catch (error) {
            console.log("An error occurred:", error.message);
        }
    };

    return (
        <>
            <div className="MainBox">
                <div className="Center">
                    <div className="nav">
                        <img className="logo" src={assets.name_logo_icon} alt="" />
                        <div onClick="" className="new-chat">
                            <img src={assets.plus_icon} alt="" />
                        </div>
                    </div>
                    <div className="result-container">
                        {messages.map((message, i) => (
                            <div className="result">
                                <div className="result-title">
                                    <img src={assets.user_icon} alt="" />
                                    <div>{message.sender}</div>
                                </div>
                                <div className="result-data">
                                    <img src={assets.logo_icon} alt="" />
                                    <div>
                                        {message.bot}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="main-bottom">
                        <form className="search-box" onSubmit={handleSubmit}>
                            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                            <div className="imagesection">
                                <img src={assets.mic_icon} alt="" />
                                {input ? (
                                    <button type="submit" className="submit-btn">
                                        <img src={assets.send_icon} alt="" />
                                    </button>
                                ) : null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatBot;