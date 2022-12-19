import { Navbar } from "../components";

export const Home = () => {
  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }}>
      <div style={{ height: "10%", width: "100%" }}>
        <Navbar />
      </div>

      <div style={{ height: "90%", width: "100%" }}>
        Home Page , Hi my name is jethor
      </div>
    </div>
  );
};
