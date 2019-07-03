# Proyecto Jordan 
[![Build Status](https://travis-ci.org/Miloro/ProyectoJordan.svg?branch=master)](https://travis-ci.org/Miloro/ProyectoJordan)

## Para utilizar este proyecto:
Requisitos:
1) MongoDB corriendo
2) Node v.8
3) Nodemon (recommended)

## Pasos para utilizarlo:
1) Clonar este proyecto
2) Correr npm install
3) Correr npm start (si no dispone de nodemon en su maquina, puede levantarlo con 'node index.js', pero sepa que ante cada cambio que quiera realizarle al codigo, va a tener que bajarlo y volverlo a subir CADA VEZ.)

## Agregados:
1) El archivo "Proyecto_Jordan.postman_collection.json" se puede importar en PostMan para ver los endpoints disponibles. 
MANTENGAMOSLO SIEMPRE ACTUALIZADO.

## Comandos para CLI:

```
node main.js CrearEstuche --codigo="ABC500" --color="Rojo" --marca="Ray-Ban" --stock=10 --material="Cuero" --precioCompra=200 --precioVenta=300
```

```
node main.js CrearCristal --codigo="ABC30" --marca="SUV" --stock=2 --material="CRISTAL" --tipo="MULTIFOCAL" --precioCompra=200 --precioVenta=300
```

```
node main.js CrearAnteojo --codigo="ABC30" --marca="SUV" --stock=2 --material="Plastico" --tipo="comun" --precioCompra=200 --precioVenta=300
```