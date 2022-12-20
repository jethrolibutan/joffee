import { Navbar } from "../components";
import "./About.css";

export const About = () => {
  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }}>
      <div className="navbar">
        <Navbar />
      </div>

      {/* style={{ height: "90%", width: "100%" }} */}

      <div className="about-1">
        A coffeehouse,[1][2] coffee shop, or café is an establishment that
        primarily serves coffee of various types, notably espresso, latte, and
        cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee
        and iced tea, as well as other non-caffeinated beverages. In continental
        Europe, cafés serve alcoholic drinks. A coffeehouse may also serve food,
        such as light snacks, sandwiches, muffins, fruit, or pastries.
        Coffeehouses range from ownensive restaurant), transport café, teahouse
        or tea room, or other casual eating and drinking place.[3][4][5][6][7] A
        coffeehouse may share some of the same characteristics of a bar or
        restaurant, but it is different from a cafeteria. Many coffeehouses in
        the Middle East and in West Asian immigrant districts in the Western
        world offer shisha (actually called nargile in Levantine Arabic, Greek
        and Turkish), flavored tobacco smoked through a hookah. An espresso bar
        is a type of coffeehouse that specializes in serving espresso and
        espresso-based drinks.
      </div>
    </div>
  );
};
