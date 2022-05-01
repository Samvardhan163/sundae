import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import { useEffect, useState } from "react";

export default function Options({ optionType }) {
  const [item, SetItem] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then((response) => {
      SetItem(response.data);
    });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;
  const options = item.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    ></ItemComponent>
  ));
}
