import "primereact/resources/themes/lara-light-blue/theme.css"
import "primeflex/themes/primeone-light.css"
import "primereact/resources/primereact.min.css" 
import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout ({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

