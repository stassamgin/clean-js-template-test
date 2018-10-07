export const getElementFromTemplate = (template) => {
  const container = document.createElement('div');
  container.innerHTML = template;
  return container
}

export default { getElementFromTemplate }