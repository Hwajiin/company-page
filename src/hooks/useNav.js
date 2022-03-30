import { useEffect, useState } from "react";

const useNav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      if (open === true) {
        setOpen(false);
      }
    });

    return window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
      if (open === true) {
        setOpen(false);
      }
    });
  }, [open]);

  return { width, open, setOpen };
};

export default useNav;
