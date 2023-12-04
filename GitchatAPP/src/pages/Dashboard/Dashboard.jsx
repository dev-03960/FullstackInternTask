import "./Dashboard.scss";
import message from "../../assets/Black.svg";
import { Header } from "../../Component/Header/Header";
import { Footer } from "../../Component/Footer/Footer";
import people1 from "../../assets/Ellipse 14.svg";
import plus from "../../assets/Group 143726680.svg";
import back from "../../assets/back.svg";
import deleteimg from "../../assets/delete.svg";
import send from "../../assets/send-2.svg";
import { useState } from "react";
import people2 from "../../assets/Ellipse 15.svg";
export function Dashboard() {
  const [messages, setMessages] = useState([
    { id: 1, content: "Hello!", sender: "user" },
    { id: 2, content: "Hi there!", sender: "other" },
    // Add more messages as needed
  ]);

  const handleSendMessage = (messageText) => {
    const newMessage = { id: messages.length + 1, content: messageText, sender: "user" };
    setMessages([...messages, newMessage]);
  };
  return (
    <>
      <div className="content">
        <Header />
        <div className="content-body">
          <div className="container-people">
            <div className="card1">
              <h2 className="heading">ALL YOUR CHATS</h2>
              <button className="chat-img">
                <div className="chimg">
                  <img src={message} alt="" />
                </div>
                <span>Chat Images: ON</span>
              </button>
              <span className="desc">
                When a bot sends you images, you will be charged one secondary
                image
              </span>
              <div className="people">
                <div className="people-img">
                  <img src={people1} alt="" />
                </div>
                <div className="people-desc">
                  <div className="name">Cressa Jessalin</div>
                  <div className="desc">Lorem ipsum dolor sit am...</div>
                </div>
              </div>
              <div className="people">
                <div className="people-img">
                  <img src={people1} alt="" />
                </div>
                <div className="people-desc">
                  <div className="name">Cressa Jessalin</div>
                  <div className="desc">Lorem ipsum dolor sit am...</div>
                </div>
              </div>
            </div>
            <div className="people-line"></div>
            <div className="card2">
              <div className="plus">
                <img src={plus} alt="" />
              </div>
              <button className="create-New">Create New Button</button>
            </div>
          </div>
          <div className="container-chats">
            <div className="card-wrapper">
              <div className="card-header">
              <div className="selected">
                <div className="people-img">
                  <img src={people1} alt="" />
                </div>
                
                  <div className="name">Cressa Jessalin</div>
              </div>
              <div className="addicon">
              <div className="back">
                <img src={back} alt="" />
                <span>Back</span>
              </div>
              <div className="Delete">
                <img src={deleteimg} alt="" />
                <span>Delete</span>
              </div>
              </div>
              </div>
              
              <div className="card-body">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
           {msg.sender === "other" ? (
      <div className="people-img">
        <img src={people1} alt="" />
      </div>
    ) : (
      <div className="people-img">
        <img src={people2} alt="" />
      </div>
    )}
                
                  <div className={`${msg.sender}-input`}>{msg.content}</div>
          </div>
        ))}
      </div>
              <div className="card-footer">
  <input
    type="text"
    className="input-text"
    placeholder="Messages"
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSendMessage(e.target.value);
        e.target.value = "";
      }
    }}
  />
  <div
    className="message-img"
    onClick={() => {
      const inputElement = document.querySelector(".input-text");
      handleSendMessage(inputElement.value);
      inputElement.value = "";
    }}
  >
    <img src={send} alt="" />
  </div>
</div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
