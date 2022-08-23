import { useEffect, useState } from "react";

const useSlider = (elements) => {
  const [currentItem, setCurrentItem] = useState({
    number: 0,
    direction: "r",
  });
  const [beforeItem, setBeforeItem] = useState(null);

  useEffect(() => {
    elements.current.forEach((el, i) => {
      if (currentItem.direction === "r") {
        el.className = "slider__element";
        if (i === currentItem.number) el.className = "slider__element appear-r";
        if (i === beforeItem) el.className = "slider__element disappear-l";
      } else {
        el.className = "slider__element";
        if (i === currentItem.number) el.className = "slider__element appear-l";
        if (i === beforeItem) el.className = "slider__element disappear-r";
      }
    });
  }, [currentItem, beforeItem, elements]);

  const handleRight = (e) => {
    setBeforeItem(currentItem.number);
    if (currentItem.number === elements.current.length - 1)
      setCurrentItem({ number: 0, direction: "r" });
    else setCurrentItem({ number: currentItem.number + 1, direction: "r" });
  };

  const handleLeft = (e) => {
    setBeforeItem(currentItem.number);
    if (currentItem.number === 0)
      setCurrentItem({ number: elements.current.length - 1, direction: "l" });
    else setCurrentItem({ number: currentItem.number - 1, direction: "l" });
  };

  return { currentItem, handleLeft, handleRight };
};

export default useSlider;
