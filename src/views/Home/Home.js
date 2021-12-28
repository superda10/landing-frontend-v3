import { About, Projects, Works, TheTeam } from './components';
import { ToastContainer } from "react-toastify"

const Home = () => {
  return (
    <div>
      <About />
      <Projects />
      <Works />
      <TheTeam />
      <ToastContainer />
    </div>
  );
};

export default Home;
