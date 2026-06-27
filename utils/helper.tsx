export function collapse(arr: string[] = [], head = 6, tail = 4) {
  if (arr.length <= head + tail) {
    return arr;
  }

  return [...arr.slice(0, head), "...", ...arr.slice(-tail)];
}

export const matchesType = (file: string, filter: string[]) => {
  if (filter.length === 0) return true;

  return filter.some((f) => {
    if (f === "base") {
      return file.includes("base");
    }

    if (f === "alveolar") {
      return file.includes("alveolar");
    }

    if (f === "teeth") {
      return !file.includes("base") && !file.includes("alveolar");
    }

    return false;
  });
};

export const matchesSearch = (file: string, keyword: string) =>
  file.toLowerCase().includes(keyword.toLowerCase());
