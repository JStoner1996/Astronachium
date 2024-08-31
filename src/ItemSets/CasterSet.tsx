import React from "react";
import ItemSet from "./ItemSet";

const CasterSet: React.FC = () => {
  return (
    <ItemSet
      image={""}
      name={"Caster"}
      role={"Damage / Support"}
      items={[
        { name: "Symbiote", image: "" },
        { name: "Headress of Fury", image: "" },
        { name: "Mana Spring Amulet", image: "" },
        { name: "Tundra Talisman", image: "" },
        { name: "Lich Wraps", image: "" },
      ]}
    />
  );
};

export default CasterSet;
