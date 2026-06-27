export function collapse(arr: string[] = [], head = 6, tail = 4) {
  if (arr.length <= head + tail) {
    return arr;
  }

  return [...arr.slice(0, head), "...", ...arr.slice(-tail)];
}
