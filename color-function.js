// Convierte un color en hexadecimal #FF7700 en un objeto que contiene los 3 colores (rojo, verde y azul) {r: 255, g: 119, b: 0}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

// Devuelve el valor de la luminosidad de un color. Los parámetros deben ser los colores en orden rojo, verde y azul.
function luminance(r, g, b) {
    let [lumR, lumG, lumB] = [r, g, b].map(component => {
        let proportion = component / 255;

        return proportion <= 0.03928
            ? proportion / 12.92
            : Math.pow((proportion + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
}

// Si se le pasan dos luminosidades, devuelve el contraste que existe entre ellas.
function contrastRatio(luminance1, luminance2) {
    let lighterLum = Math.max(luminance1, luminance2);
    let darkerLum = Math.min(luminance1, luminance2);

    return (lighterLum + 0.05) / (darkerLum + 0.05);
}