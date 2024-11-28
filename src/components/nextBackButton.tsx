import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function NextBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const [history, setHistory] = useState({
    stack: [],
    currentIndex: -1,
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    setHistory((prev) => {
      const { stack, currentIndex } = prev;
      const isNewPage =
        stack.length === 0 || stack[currentIndex] !== location.pathname;

      if (isNewPage) {
        const newStack = [
          ...stack.slice(0, currentIndex + 1),
          location.pathname,
        ];
        return {
          stack: newStack,
          currentIndex: newStack.length - 1,
        };
      }
      return prev;
    });
  }, [location]);

  const handleBack = () => {
    if (history.currentIndex > 0) {
      const newIndex = history.currentIndex - 1;
      navigate(history.stack[newIndex]);
      setHistory((prev) => ({ ...prev, currentIndex: newIndex }));
    }
  };

  const handleForward = () => {
    if (history.currentIndex < history.stack.length - 1) {
      const newIndex = history.currentIndex + 1;
      navigate(history.stack[newIndex]);
      setHistory((prev) => ({ ...prev, currentIndex: newIndex }));
    }
  };

  return (
    <div className="flex gap-3">
      <button onClick={handleBack} className="p-2 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7.174"
          height="14.001"
          viewBox="0 0 7.174 14.001"
        >
          <path
            id="angle-small-right"
            d="M9.982,9.88l4.59-4.59a1,1,0,1,1,1.41,1.42l-4.6,4.58a1,1,0,0,0,0,1.42l4.6,4.58a1,1,0,0,1-1.41,1.42l-4.59-4.59A3,3,0,0,1,9.982,9.88Z"
            transform="translate(-9.104 -4.999)"
            fill="#017bfe"
          />
        </svg>
      </button>
      <button
        onClick={handleForward}
        disabled={history.currentIndex >= history.stack.length - 1}
        className="forward-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7.174"
          height="14.001"
          viewBox="0 0 7.174 14.001"
          className="rotate-180"
        >
          <path
            id="angle-small-right"
            d="M9.982,9.88l4.59-4.59a1,1,0,1,1,1.41,1.42l-4.6,4.58a1,1,0,0,0,0,1.42l4.6,4.58a1,1,0,0,1-1.41,1.42l-4.59-4.59A3,3,0,0,1,9.982,9.88Z"
            transform="translate(-9.104 -4.999)"
            fill="#017bfe"
          />
        </svg>
      </button>
    </div>
  );
}

export default NextBackButton;
