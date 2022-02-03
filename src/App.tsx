import { useState, useEffect } from "react";

import { Url } from "./TS-models/models";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import ShortenerForm from "./components/ShortenerForm";
import Results from "./components/Results/Results";
import Statistics from "./components/Statistics/Statistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";

function App() {
  const [urls, setUrls] = useState<Url[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let storedUrls = JSON.parse(localStorage.getItem("urls") || "[]");
    setUrls(storedUrls);
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prevValue) => !prevValue);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-light-2 bg-opacity-10 mt-40 md:mt-48 lg:mt-36 relative w-full h-full">
        <ShortenerForm handleRefresh={handleRefresh} />
        <div className="pt-20">
          <Results urls={urls} />
          <Statistics />
        </div>
      </div>
      <BoostLinks />
      <Footer />
    </>
  );
}

export default App;
