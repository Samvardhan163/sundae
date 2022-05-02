import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
export default function Options({ optionType }) {
  const [items, SetItem] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then((response) => {
      SetItem(response.data);
    });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;
  // const options = items.map((item) => (
  //   <ItemComponent
  //     key={item.name}
  //     name={item.name}
  //     imagePath={item.imagePath}
  //   />
  // ));

  const options = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{options}</Row>;
}
