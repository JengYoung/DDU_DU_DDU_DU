export const getClassName = <T>(styles: T, base: keyof T, className?: string) => {
  return className
    ? styles[base] +
        ' ' +
        className
          .split(' ')
          .map((name) => styles[name as keyof T] ?? name)
          .join(' ')
    : styles[base];
};
