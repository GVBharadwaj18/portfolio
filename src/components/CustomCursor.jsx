import { useEffect, useState, useRef } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    // Only enable on devices with a mouse
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON";

      setIsPointer(!!isInteractive);
    };

    const onMouseDown = (e) => {
      setIsClicking(true);
      const newClick = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setClicks((prev) => [...prev.slice(-3), newClick]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 500);
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Sleek Triangular Arrow Pointer */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className={`transition-all duration-150 -ml-1 -mt-1 origin-top-left ${
            isClicking
              ? "scale-90"
              : isPointer
              ? "scale-125 filter drop-shadow-[0_0_8px_hsl(var(--primary))]"
              : "filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          }`}
        >
          {/* Triangular Arrow Pointer SVG */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Triangular arrow head with subtle gradient and border */}
            <path
              d="M3 2L19.5 9.5L11 12.5L7.5 21L3 2Z"
              className={
                isPointer
                  ? "fill-primary stroke-white/80"
                  : "fill-foreground stroke-background/80"
              }
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Inner accent dot */}
            <circle
              cx="7.5"
              cy="7.5"
              r="1.5"
              className={isPointer ? "fill-white" : "fill-primary"}
            />
          </svg>
        </div>
      </div>

      {/* Click Micro-Ripples */}
      {clicks.map((click) => (
        <div
          key={click.id}
          className="fixed pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary animate-ping"
          style={{
            left: click.x,
            top: click.y,
            width: "32px",
            height: "32px",
            animationDuration: "0.5s",
          }}
        />
      ))}
    </>
  );
};
