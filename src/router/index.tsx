import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../component/home";
import Menu from "../component/menu";
import Chat from "../component/chat";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="" element={<Navigate to="/" />} />
        <Route path="/" element={<Menu />}>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
}
