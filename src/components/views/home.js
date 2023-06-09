import Composant from "./composant";
import "../assets/style/styleAlexandre.css";
import "../assets/style/styleAlexandre.css";
import Menu from "../assets/menu";
import Button from "../button";
import Gauge from "../Gauge";
import bar from "../assets/images/bar.png";

import IconTelevision from "../assets/icons/tv";
import IconBxFridge from "../assets/icons/kitchen";
import IconBath from "../assets/icons/bath";
import IconBedOutline from "../assets/icons/room";
import IconAddFill from "../assets/icons/add";

export default function Home() {
  return (
    <div>
      <img className="bar" src={bar} alt="bar" />
      <div className="text">
        <p>60W </p>
      </div>
      <Menu />
      <Button />
      <div className="room">
        <Button
          name="Salon"
          icon={<IconTelevision />}
          onClick={() => console.log("Salon button clicked")}
        />
        <Button
          name="Cuisine"
          icon={<IconBxFridge />}
          onClick={() => console.log("Salon button clicked")}
        />

        <Button
          name="Sdb"
          icon={<IconBath />}
          onClick={() => console.log("Salon button clicked")}
        />

        <Button
          name="Chambre"
          icon={<IconBedOutline />}
          onClick={() => console.log("Salon button clicked")}
        />
      </div>
      <div className="add">
        <Button
          name="Ajouter"
          icon={<IconAddFill />}
          onClick={() => console.log("Salon button clicked")}
        />
      </div>
      <div className="add">
        <Button
          name="Ajouter"
          icon={<IconAddFill />}
          onClick={() => console.log("Salon button clicked")}
        />
      </div>
      <Composant />
      <Gauge />
    </div>
  );
}
