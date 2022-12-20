import { Navbar } from "../components";
import "./Home.css";

export const Home = () => {
  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }}>
      <div className="navbar">
        <Navbar />
      </div>

      <div>
        <div className="section-1">
          <div className="title-1"> Dulce cafe</div>
        </div>

        <div className>
          <div className="section-2-title">It's more than coffee.</div>

          <div className="section-2-text">
            Dulce Cafe is a culmination of many for one purpose: to create a
            place to serve and inspire. When talking about the legacy that we
            wanted our family to have, it was a no brainer. We wanted to provide
            a safe space, with great coffee, for everyone to enjoy. We want to
            give back the same comfort we have been given through the years. A
            community is built and sustained by sharing experiences together. We
            have all loved, grieved, laughed, and dreamed over a cup of coffee.
            It’s more than coffee. It’s a chance to connect and create.
          </div>

          <div className="section-4">
            <div className="section-4-text">
              "Soulful and delicious taste! I highly recommend Dulce Cafe! I
              recently visited a coffee shop and was blown away by the delicious
              coffee and excellent service. It's a great place to grab a cup of
              coffee and relax. "
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
