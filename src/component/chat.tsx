import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SocketContext } from "../features/socket-context";
import { IMessage } from "../types/message";

export default function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<IMessage[]>([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      socket.on("message", (msg: IMessage) => {
        setChat((prevChat) => [...prevChat, msg]);
      });
    }
    return () => {
      if (socket) {
        socket.off("message");
      }
    };
  }, [socket]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message && socket) {
      socket.emit("sendMessage", { userId: socket.id, text: message });
      setMessage("");
    }
  };

  return (
    <>
      <Button
        sx={{ m: 2 }}
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <Paper elevation={3} style={{ padding: "20px", margin: "20px" }}>
        <List>
          {chat.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${msg.userId}: ${msg.text}`} />
            </ListItem>
          ))}
        </List>
        <form onSubmit={sendMessage}>
          <TextField
            label="Message"
            placeholder="Write Message ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            variant="outlined"
            rows={3}
            multiline
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: 200 }}
          >
            Send
          </Button>
        </form>
      </Paper>
    </>
  );
}
