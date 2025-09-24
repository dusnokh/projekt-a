 // Array of color names with RGB values
const NAMED_COLORS = [
  { name: "black", r: 0, g: 0, b: 0 },
  { name: "white", r: 255, g: 255, b: 255 },
  { name: "gray", r: 128, g: 128, b: 128 },
  { name: "red", r: 255, g: 0, b: 0 },
  { name: "green", r: 0, g: 128, b: 0 },
  { name: "blue", r: 0, g: 0, b: 255 },
  { name: "yellow", r: 255, g: 255, b: 0 },
  { name: "cyan", r: 0, g: 255, b: 255 },
  { name: "magenta", r: 255, g: 0, b: 255 },
  { name: "orange", r: 255, g: 165, b: 0 },
  { name: "pink", r: 255, g: 192, b: 203 },
  { name: "purple", r: 128, g: 0, b: 128 },
  { name: "brown", r: 165, g: 42, b: 42 },
  { name: "navy", r: 0, g: 0, b: 128 },
  { name: "teal", r: 0, g: 128, b: 128 },
  { name: "gold", r: 255, g: 215, b: 0 },
  { name: "salmon", r: 250, g: 128, b: 114 },
  { name: "coral", r: 255, g: 127, b: 80 },
  { name: "khaki", r: 240, g: 230, b: 140 },
  { name: "turquoise", r: 64, g: 224, b: 208 },
  { name: "indigo", r: 75, g: 0, b: 130 },
  { name: "lavender", r: 230, g: 230, b: 250 },
  { name: "beige", r: 245, g: 245, b: 220 },
  { name: "lime", r: 0, g: 255, b: 0 },
  { name: "maroon", r: 128, g: 0, b: 0 },
  { name: "lightgray", r: 211, g: 211, b: 211 },
  { name: "aliceblue", r: 240, g: 248, b: 255 },
  { name: "mintcream", r: 245, g: 255, b: 250 },
  { name: "honeydew", r: 240, g: 255, b: 240 },
  { name: "linen", r: 250, g: 240, b: 230 }
];

// DOM elements connect
const r = document.getElementById("r");             // I
const g = document.getElementById("g");             // I
const b = document.getElementById("b");             // I
const preview = document.getElementById("preview"); // O: color box background
const closestName = document.getElementById("closestName"); // O

// Helper: squared distance between two colors
/*function afstand(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
}*/
function distance2(r1, g1, b1, r2, g2, b2) {
  return (r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2;
}

/*
// Find the closest named color
function findClosestName(r, g, b) {
  let best = NAMED_COLORS[0];
  let bestDist = distance2(r, g, b, best.r, best.g, best.b);

  for (const c of NAMED_COLORS) {
    const d = distance2(r, g, b, c.r, c.g, c.b);
    if (d < bestDist) {
      bestDist = d;
      best = c;
    }
  }
  return best.name; // O: returns the closest color name as a string
}
*/
function findClosestName(r, g, b) {
  let best = NAMED_COLORS[0];
  let bestDist = distance2(r, g, b, best.r, best.g, best.b);

  for (let i = 0; i < NAMED_COLORS.length; i++) {
    const c = NAMED_COLORS[i]; // pick the i-th color object
    const d = distance2(r, g, b, c.r, c.g, c.b);

    if (d < bestDist) {
      bestDist = d;
      best = c;
    }
  }

  return best.name;
}

// Update the preview box and color name
function update() {
  const R = parseInt(r.value); // I: read Red slider value
  const G = parseInt(g.value); // I: read Green slider value
  const B = parseInt(b.value); // I: read Blue slider value

  preview.style.backgroundColor = `rgb(${R}, ${G}, ${B})`; // O: show mixed color
  closestName.textContent = findClosestName(R, G, B);      // O: show nearest color name
}

// Event listeners
r.addEventListener("input", update); // I: reacts to user moving Red slider
g.addEventListener("input", update); // I: reacts to user moving Green slider
b.addEventListener("input", update); // I: reacts to user moving Blue slider

// Initial render
update(); // O: make sure the box and name show on page load
