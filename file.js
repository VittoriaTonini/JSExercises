const today = new Date();
console.log(today);

const options = [
  {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  },
  {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  },
  {
    year: "numeric",
    month: "2-digit",
    day: "short",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }
]

console.log(today.toLocaleString(undefined, options[0]));
console.log(today.toLocaleString(undefined, options[1]));
console.log(today.toLocaleString(undefined, options[2]));