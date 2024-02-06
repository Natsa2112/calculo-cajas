function calculateBoxes() {
  var units = parseInt(document.getElementById('units').value);
  var unitsPerBox = parseInt(document.getElementById('unitsPerBox').value);
  
  if (isNaN(units) || isNaN(unitsPerBox) || units <= 0 || unitsPerBox <= 0) {
    alert('Por favor, ingrese números válidos mayores que cero.');
    return;
  }
  
  var boxes = Math.floor(units / unitsPerBox);
  var remainder = units % unitsPerBox;
  
  var result = document.getElementById('result');
  
  if (boxes > 0) {
    if (boxes === 1) {
      if (remainder > 0) {
        result.textContent = `Es ${boxes} caja con ${unitsPerBox} unidades y resto una caja con ${remainder} unidades.`;
      } else {
        result.textContent = `Es ${boxes} caja con ${unitsPerBox} unidades.`;
      }
    } else {
      if (remainder > 0) {
        result.textContent = `Son ${boxes} cajas con ${unitsPerBox} unidades y resto una caja con ${remainder} unidades.`;
      } else {
        result.textContent = `Son ${boxes} cajas con ${unitsPerBox} unidades.`;
      }
    }
  } else {
    result.textContent = `Una caja con ${units} unidades.`;
  }
}
