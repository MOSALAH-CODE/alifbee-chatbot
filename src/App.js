import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages";
import ChatPage from "./pages/chat";
import Complatepage from "./pages/complate";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/chat-bot" element={<ChatPage />} />
        <Route path="/complate" element={<Complatepage />} />
      </Routes>
    </Router>
  );
}

export default App;
