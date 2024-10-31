import { ResetIcon } from "@radix-ui/react-icons";

function Reset({ setCount }) {
  function handleReset(event) {
    setCount(0);

    event.currentTarget.blur();
  }

  return (
    <button className="reset-btn" onClick={handleReset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default Reset;
