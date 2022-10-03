import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecordCardProvider } from "./contexts/record-card-context";
import { UserProvider } from "./contexts/user-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <UserProvider>
      <RecordCardProvider>
        <App />
      </RecordCardProvider>
    </UserProvider>
  </BrowserRouter>
);
