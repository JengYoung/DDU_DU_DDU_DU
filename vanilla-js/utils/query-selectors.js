
export function $(query, elem = document) {
  return elem.querySelector(query);
}

export function createElem(tag, className = null) {
  const elem = document.createElement(tag);

  if (className === null) return;
  if (typeof className === 'string') {
    elem.className = className
  } else {
    elem.classList.add(...className);
  }
}
