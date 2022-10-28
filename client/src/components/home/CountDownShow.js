import { useCountdown } from "hooks/useCountDown";
import React from "react";

const CountDownShow = ({ time }) => {
  const [days, hours, minutes, seconds] = useCountdown(time);
  return (
    <div className="flex gap-3 text-white">
      <CountDownItem number={days} text="Days" />:
      <CountDownItem number={hours} text="Hours" />:
      <CountDownItem number={minutes} text="Minutes" />:
      <CountDownItem number={seconds} text="Seconds" />
    </div>
  );
};

const CountDownItem = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center select-none">
      <div className="text-xl font-semibold">
        {number < 10 ? "0" + number : number}
      </div>
      <p className="text-sm font-light">{text}</p>
    </div>
  );
};

export default CountDownShow;
