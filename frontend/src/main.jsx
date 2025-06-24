import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { CartProvider } from "./context/CartProvider";
import { App } from "./App";

const config = {
  hideOverlaysOnDocumentScrolling: true,
};

createRoot(document.getElementById("root")).render(
  <PrimeReactProvider value={config}>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </PrimeReactProvider>
);
