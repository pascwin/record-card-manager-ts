import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecordCardProvider } from "./contexts/record-card-context";
import { CategoriesProvider } from "./contexts/categories-context";
import { AuthContextProvider } from "./contexts/auth-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CategoriesProvider>
        <RecordCardProvider>
          <App />
        </RecordCardProvider>
      </CategoriesProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
