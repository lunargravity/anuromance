export type Star = {
  className: string;
  style: React.CSSProperties;
};

// Returns a random number with unit (e.g., "12px")
export function random(range: number, unit: string) {
  const randNum = Math.floor(Math.random() * range) + 1;
  return `${randNum}${unit}`;
}

// Creates a star object for rendering
export function createStar(
  size: number,
  width: number,
  height: number,
  styles: Record<string, string>
): Star {
  const randRange5 = Math.floor(Math.random() * 5) + 1;
  const widthAndHeight = random(size, "px");
  return {
    className: `${styles.circle} ${styles[`blink_${randRange5}`]}`,
    style: {
      width: widthAndHeight,
      height: widthAndHeight,
      left: random(width, "px"),
      top: random(height, "px"),
      position: "absolute" as const,
    },
  };
}
