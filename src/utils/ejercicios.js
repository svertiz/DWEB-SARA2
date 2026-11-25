/*
 * ¿Para qué usamos export?
 * Este archivo es un módulo de JavaScript. Sus funciones no están disponibles
 * automáticamente en otros archivos: export permite que se puedan importar.
 *
 * En JsBasico.jsx utilizamos:
 *   import * as ejercicios from '../utils/ejercicios.js';
 * Esto reúne las funciones exportadas bajo el nombre ejercicios. Por ejemplo:
 *   ejercicios.sumarPrecios(['5', '8', '3']);
 *
 * Una función auxiliar que solo se llame dentro de este archivo no necesita exportarse.
 */

// EJEMPLOS RESUELTOS

// El control entrega texto: Number lo convierte antes del cálculo.
export function precioPareja(precio) {
  precio = Number(precio);
  let cantidad = 2;
  return precio * cantidad;
}

// Convertimos la edad recibida como texto antes de compararla.
export function puedeEntrar(edad) {
  edad = Number(edad);
  if (edad >= 18) {
    return 'Puede entrar';
  }
  return 'Necesita acompañante';
}

// Recibimos un array de precios. Un acumulador guarda la suma del recorrido.
// Number convierte cada precio antes de sumar, ya que los controles envían texto.
export function sumarPrecios(precios) {
  let total = 0;
  // length permite trabajar con cualquier cantidad de precios, incluso ninguno.
  for (let i = 0; i < precios.length; i = i + 1) {
    total = total + Number(precios[i]);
  }
  return total;
}

// EJERCICIOS: completa los TODO conservando los parámetros.
// 1. Minutos enteros: 0 <= inicio < fin <= 1440.
// duracion(600, 645) devuelve 45.
export function duracion(inicio, fin) {
  inicio = Number(inicio);
  fin = Number(fin);

  if (inicio < 0){
    return 'El inicio debe ser mayor o igual a 0';
  }
  if (inicio > fin){
    return 'El inicio debe ser menor al final';
  }
  if (fin > 1440){
    return 'El final debe ser menor o igual a 1440';
  }
  // TODO: resta inicio a fin.
  let total = fin - inicio;
  return total;
}

// 2. Devuelve un booleano: ambos enteros y 0 <= inicio < fin <= 1440.
// horarioValido(600, 645) → true; horarioValido(645, 645) → false.
export function horarioValido(inicio, fin) {
  inicio = Number(inicio);
  fin = Number(fin);
  // TODO: combina Number.isInteger y comparaciones con &&.
  if (Number.isInteger(inicio) && Number.isInteger(fin) && inicio >= 0 && inicio < fin && fin <= 1440){
    return true;
  } else {
    return false;
  }
}

// 3. Recibe un array de géneros y el texto buscado. Cuenta coincidencias exactas.
// contarPorGenero(['indie', 'rock', 'indie'], 'indie') → 2.
// contarPorGenero([], 'indie') → 0. Debe funcionar con cualquier longitud.
export function contarPorGenero(generos, buscado) {
  // TODO: empieza un contador en 0, recorre generos con for y compara cada valor.
  let c = 0;
  for (let i = 0; i < generos.length; i++){
    if (generos[i] === buscado){
        c++;
    }
  }
  return c;
}

// 4. Recibe un array de duraciones no negativas, en minutos, como textos.
// minutosTotales(['45', '90', '60']) → 195; minutosTotales([]) → 0.
// Debe funcionar con cualquier longitud y sin modificar el array recibido.
export function minutosTotales(duraciones) {
  // TODO: empieza un acumulador en 0 y recorre duraciones con for.
    let suma = 0;
  for (let i = 0; i <= duraciones.length; i++){
    if (duraciones[i] >= 0 && duraciones[i]){
        suma += Number(duraciones[i]);
    }
  }
  // Convierte cada valor con Number(duraciones[i]) antes de sumarlo.
  return suma;
}

// 5. Dos textos: nombre de artista y consulta.
// Ignora mayúsculas y espacios exteriores de la consulta. Texto vacío coincide.
// coincideTexto('Bruma Solar', ' BRUMA ') → true.
export function coincideTexto(artista, texto) {
  // TODO: usa trim(), toLowerCase() e includes(). Devuelve un booleano.
  let artistaSinExcepciones = artista.trim().toLowerCase();
  let textoSinExcepciones = texto.trim().toLowerCase();
  return artistaSinExcepciones.includes(textoSinExcepciones);
}

// 6. Dos códigos de escenario. Devuelve un booleano.
// coincideEscenario('rio', 'rio') → true; ('rio', 'bosque') → false.
export function coincideEscenario(escenario, buscado) {
  // TODO: compara los parámetros con igualdad estricta (===).
  return escenario === buscado;
}

// 7. Convertir minutos a hora.
// Convierte minutos enteros entre 0 y 1440 al formato HH:MM. Casos: 635 → 10:35; 0 → 00:00; 1440 → 24:00. Para valores inválidos devuelve 'Dato no válido'.
export function hora(minutos) {
  // TODO: Usa Number, Number.isInteger, Math.floor, el resto (%) y padStart.
    let minNum = Number(minutos);
    if (!Number.isInteger(minNum) || minutos < 0 || minutos > 1440){
        return "Dato no válido";
    } else {
        const horas = Math.floor(minNum / 60);
        const minsRestantes = minNum % 60;

        const horasFormateadas = String(horas).padStart(2, '0');
        const minsFormateados = String(minsRestantes).padStart(2, '0');
        return horasFormateadas + ":" + minsFormateados;
    }
}

// 8. Aplicar un descuento.
// Devuelve el precio final como número con un máximo de dos decimales. Precio no negativo y porcentaje entre 0 y 100, ambos finitos. Rechaza campos vacíos. Casos: 20 y 15 → 17; 19.99 y 10 → 17.99; -1 o 120 % → 'Dato no válido'.
export function aplicarDescuento(precio, porcentaje) {
  // TODO: Valida antes de operar. toFixed devuelve texto; convierte de nuevo con Number.
  if (precio >= 0 && porcentaje >= 0 && porcentaje <= 100 && !precio.empty() && !porcentaje.empty()){
    let precioFinal = Number(precio) * (porcentaje/100);
    return Number(precioFinal.toFixed());
  } else {
    return "Datos inválidos";
  }
}

// 9. Encontrar la mayor duración.
// Devuelve la mayor duración numérica sin modificar el array. Casos: 45;90;60 → 90; 60;60 → 60; lista vacía → null. Los elementos serán duraciones válidas no negativas.
export function mayorDuracion(duraciones) {
  // TODO: Recorre el array y conserva el máximo. Convierte cada elemento con Number.
  return undefined;
}

// 10. Eliminar géneros repetidos.
// Devuelve un array nuevo sin duplicados y conserva el orden. Quita espacios exteriores, pero distingue mayúsculas. Casos: indie;rock;indie → [indie, rock]; lista vacía → [].
export function generosUnicos(generos) {
  // TODO: Usa un array acumulador, trim e includes antes de añadir cada género.
  return undefined;
}

// 11. Buscar artistas.
// Devuelve un array nuevo de nombres que contienen la consulta, ignorando mayúsculas y espacios exteriores de esta. Conserva los nombres originales. Una consulta vacía devuelve todos; 'zzz' devuelve [].
export function buscarArtistas(artistas, texto) {
  // TODO: Usa filter con una función con nombre, toLowerCase e includes. No uses flechas.
  return undefined;
}

// 12. Convertir duraciones a horas.
// Devuelve un array nuevo con las duraciones en horas. Casos: 60;90;120 → [1, 1.5, 2]; lista vacía → []. No modifiques el array original.
export function duracionesEnHoras(duraciones) {
  // TODO: Usa map con una función con nombre. Convierte cada elemento con Number y divide por 60.
  return undefined;
}

// 13. Calcular una compra.
// Cada precio se corresponde con la cantidad de la misma posición. Devuelve el total como número, redondeado a dos decimales. Casos: 12;8;5 y 2;1;3 → 47; ambas listas vacías → 0. Longitudes distintas → 'Datos no válidos'. Los elementos serán precios no negativos y cantidades enteras no negativas.
export function calcularCompra(precios, cantidades) {
  // TODO: Comprueba las longitudes. Usa reduce con una función con nombre, índice y acumulador inicial 0. Convierte ambos valores con Number.
  return undefined;
}

// 14. Detectar solapamientos.
// Recibe dos intervalos en minutos enteros, entre 0 y 1440 y con inicio menor que fin. Casos: 600–660 y 630–690 → true; 600–660 y 660–720 → false; intervalos separados → false. Si algún intervalo no es válido devuelve 'Horario no válido'.
export function solapan(inicioA, finA, inicioB, finB) {
  // TODO: Convierte los cuatro parámetros con Number. Valida y comprueba si cada inicio es anterior al fin del otro intervalo.
  return undefined;
}
