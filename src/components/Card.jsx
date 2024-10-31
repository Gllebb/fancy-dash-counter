import { useEffect, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Reset from "./Reset";
import CountButtons from "./CountButtons";
import ButtonComponent from "./ButtonComponent";

function Card() {
  const [count, setCount] = useState(0);
  const locked = count == 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        if (count == 5) {
          setCount(0);
        } else {
          setCount((prevCount) => prevCount + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <h1>{locked}</h1>
      <Title locked={locked} />
      <Count count={count} />
      <Reset setCount={setCount} />
      <CountButtons>
          <ButtonComponent
            type={"decrement"}
            setCount={setCount}
            locked={locked}
          />
          <ButtonComponent
            type={"increment"}
            setCount={setCount}
            locked={locked}
          />
      </CountButtons>
    </div>
  );
}

export default Card;
