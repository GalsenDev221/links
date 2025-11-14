"use client";

import { useEffect, useRef } from "react";

interface InteractiveGridProps {
  className?: string;
  gridSize?: number;
  strokeWidth?: number;
  opacity?: number;
  color?: string;
  animationSpeed?: number;
}

export function InteractiveGrid({
  className = "",
  gridSize = 40,
  strokeWidth = 1,
  opacity = 0.1,
  color = "currentColor",
  animationSpeed = 2000,
}: InteractiveGridProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Find the nearest grid intersection
      const gridX = Math.round(x / gridSize) * gridSize;
      const gridY = Math.round(y / gridSize) * gridSize;

      // Create ripple effect
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", gridX.toString());
      circle.setAttribute("cy", gridY.toString());
      circle.setAttribute("r", "0");
      circle.setAttribute("fill", "none");
      circle.setAttribute("stroke", color);
      circle.setAttribute("stroke-width", (strokeWidth * 2).toString());
      circle.setAttribute("opacity", (opacity * 3).toString());
      circle.classList.add("pointer-events-none");

      svg.appendChild(circle);

      // Animate the ripple
      const animation = circle.animate(
        [
          { r: "0", opacity: opacity * 3 },
          { r: gridSize.toString(), opacity: "0" },
        ],
        {
          duration: animationSpeed,
          easing: "ease-out",
        }
      );

      animation.onfinish = () => {
        circle.remove();
      };
    };

    svg.addEventListener("mousemove", handleMouseMove);
    return () => svg.removeEventListener("mousemove", handleMouseMove);
  }, [gridSize, strokeWidth, opacity, color, animationSpeed]);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: -1 }}
    >
      <defs>
        <pattern
          id="grid"
          width={gridSize}
          height={gridSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            opacity={opacity}
          />
        </pattern>
        <pattern
          id="dots"
          width={gridSize}
          height={gridSize}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={gridSize / 2}
            cy={gridSize / 2}
            r={strokeWidth}
            fill={color}
            opacity={opacity * 0.5}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}
