import React, { useContext, useState } from "react";
import { assets } from "../assets/chat/assets.js";
import "../styles/chat.css";
import axios from "axios";

function ChatBot() {
    const [resultData, setResultData] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [input, setInput] = useState("");
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("/get", { params: { msg: input } });
            if (response.status === 200) {
                console.log(response.data);
                setResultData(response.data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
            // Handle the error here
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
                        {!showResult ? (
                            <>
                                <div className="greet">
                                    <p><span>Hello, Student.</span></p>
                                    <p>How can I help you today?</p>
                                </div>
                                <div className="cards">
                                    <div className="card">
                                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                                        <img src={assets.compass_icon} alt="" />
                                    </div>
                                    <div className="card">
                                        <p>Create a PowerPoint Presentation on Evolution of AI.</p>
                                        <img src={assets.bulb_icon} alt="" />
                                    </div>
                                    <div className="card">
                                        <p>Create a beautiful message for wishing birthday.</p>
                                        <img src={assets.message_icon} alt="" />
                                    </div>
                                    <div className="card">
                                        <p>Write a program to find the largest element in an array.</p>
                                        <img src={assets.code_icon} alt="" />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="result">
                                <div className="result-title">
                                    <img src={assets.user_icon} alt="" />
                                    <div>{recentPrompt}</div>
                                </div>
                                <div className="result-data">
                                    <img src={assets.logo_icon} alt="" />
                                    <div>
                                        {loading ? (
                                            <div className="loader">
                                                <hr />
                                                <hr />
                                                <hr />
                                            </div>
                                        ) : (
                                            resultData
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
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
