import { useEffect, useState } from "react";
import "./App.css";
import { Welcome } from "./components/Welcome";
import { AboutComponent } from "./components/About";
import JsonData from "./data/data.json";
import { JSONData } from "./types/types";
import { NavBar } from "./components/NavBar";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import CangorosaComponent from "./components/Cangorosa";
import BlaBlaComponent from "./components/BlaBla";
import wppIcon from "../src/images/icons/whatsapp.svg";

function App() {
    const [landingPageData, setLandingPageData] = useState<JSONData>();
    const [wpp, setWpp] = useState(false);

    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 400) {
                setWpp(true);
            } else {
                setWpp(false);
            }
        };
    }, []);

    return (
        <div className="relative">
            <NavBar />
            <Welcome />
            <AboutComponent data={landingPageData?.About} />
            <Services data={landingPageData?.Services} />
            <CangorosaComponent data={landingPageData?.Cangorosa} />
            <BlaBlaComponent data={landingPageData?.BlaBla} />
            <Contact />

            {wpp && (
                <img
                    src={wppIcon}
                    className="fixed bottom-10 right-10 w-[50px] cursor-pointer"
                    onClick={() =>
                        window.open(
                            "https://wa.me/+5493765401416?text=Hola como estas? Tengo una consulta sobre..."
                        )
                    }
                />
            )}
        </div>
    );
}

export default App;
