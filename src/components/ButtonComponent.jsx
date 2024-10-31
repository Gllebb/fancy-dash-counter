import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function ButtonComponent({ type, setCount, locked }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "decrement") {
        const newValue = prev - 1;

        if (newValue < 0) {
          return 0;
        }

        return prev - 1;
      } else if (type === "increment") {
        return prev + 1;
      }
    });

    event.currentTarget.blur();
  }

  return (
    <button className="count-btn" onClick={handleClick} disabled={locked}>
      {type === "decrement" && <MinusIcon className="count-btn-icon" />}
      {type === "increment" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}

export default ButtonComponent;
