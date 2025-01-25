export function toggleTheme(
  setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>
): void {
  setSwitchTheme((prev) => !prev);
}

export function toggleDropDown(
  setSwitchDropDown: React.Dispatch<React.SetStateAction<boolean>>
) {
  setSwitchDropDown((prevDropDown) => !prevDropDown);
}

export function debounce(callback: Function, delay: number): () => any {
  let timer: number;
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
}
