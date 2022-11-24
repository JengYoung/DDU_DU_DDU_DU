export function $(query, elem = document) {
  return elem.querySelector(query);
}

export function createElem(tag, className = null, textContent = null) {
  const elem = document.createElement(tag);

  if (className === null) return elem;

  if (typeof className === 'string') {
    elem.className = className;
  } else {
    elem.classList.add(...className);
  }

  if (textContent) {
    elem.textContent = textContent;
  }

  return elem;
}
