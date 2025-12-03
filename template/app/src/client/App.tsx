import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandingPage from "../landing-page/LandingPage";
import "./Main.css";
import NavBar from "./components/NavBar/NavBar";
import { navigationItems } from "./components/NavBar/constants";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <NavBar navigationItems={navigationItems} />
      <div className="mx-auto max-w-screen-2xl">
        <LandingPage />
      </div>
    </div>
  );
}
