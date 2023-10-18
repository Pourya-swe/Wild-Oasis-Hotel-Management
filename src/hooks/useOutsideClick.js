import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listeningCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      // Note: The reason that we are listening to this event on capturing phase is that, the modal wiil be close each we click on the button to open it.
      document.addEventListener("click", handleClick, listeningCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listeningCapturing);
    },
    [handler, listeningCapturing]
  );

  return ref;
}

export default useOutsideClick;
