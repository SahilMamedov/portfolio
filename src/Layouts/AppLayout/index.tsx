import { Outlet } from "react-router-dom";

import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PhoneSideBar from "components/PhoneSideBar";
const AppLayout = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { pathname } = useLocation();

  //  delays rerouting by 800 milliseconds
  useEffect(() => {
    setIsTransitioning(false);
    setTimeout(() => {
      setIsTransitioning(true);
    }, 800);
  }, [pathname]);

  return (
    <div>
      <Header />
      <PhoneSideBar />
      {isTransitioning && <Outlet />}
    </div>
  );
};

export default AppLayout;
