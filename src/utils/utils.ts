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

export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): (...args: any[]) => void {
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
