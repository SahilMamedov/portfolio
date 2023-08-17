import "./App.css";
import AppRoutes from "./Routes/routes";
import Transition from "components/TransitionRouting";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
function App() {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <Transition />
        <ToastContainer
          position="bottom-right"
          theme="colored"
          transition={Zoom}
        />
        <AppRoutes />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
