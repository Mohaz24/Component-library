import React from "react";
import Badge from "./Badges/Badge";
import Banner from "./Banners/Banner";
import Card from "./Cards/Card";
import { ToggleContext } from "./Toggles/Toggle";

export default function Main() {
  const { theme } = React.useContext(ToggleContext);
  return (
    <main className={`main-theme-${theme}`}>
      <h3 className="badge-title">1. Badges</h3>

      <section id="badges-container">
        <Badge size="square" bg="white">
          Badge
        </Badge>
        <Badge size="square" bg="red">
          Badge
        </Badge>
        <Badge size="square" bg="yellow">
          Badge
        </Badge>
        <Badge size="square" bg="green">
          Badge
        </Badge>
        <Badge size="square" bg="blue">
          Badge
        </Badge>
        <Badge size="square" bg="indigo">
          Badge
        </Badge>
        <Badge size="square" bg="purple">
          Badge
        </Badge>
        <Badge size="square" bg="pink">
          Badge
        </Badge>
      </section>

      <h3 className="badge-title">2. Banners</h3>

      <section id="banner-container">
        <Banner type="success" variants={false} />

        <Banner type="warning" variants={false} />

        <Banner type="danger" variants={false} />

        <Banner type="neutral" variants={false} />
      </section>

      <section id="cards-container">
        <h3 className="badge-title"> 3. Cards</h3>
        <Card />
      </section>
    </main>
  );
}
