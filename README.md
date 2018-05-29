# ptolemy-reproject

Reproject between coordinates systems. Supports EPSG codes.

This project is based on [proj4js](https://www.npmjs.com/package/proj4) and [PostGIS Spatial Reference table](https://github.com/postgis/postgis/blob/svn-trunk/spatial_ref_sys.sql).

It can be used for who needs to deal with more projections than the common web projections (EPSG:4326, EPSG:3857).

## Setup

```bash
npm install ptolemy-reproject
```

## Coordinate Reference System Options

You can use the EPSG code number, WKT or proj4 string to convert the projections.

## Functions

- [point](#point)
- [multipoint](#multipoint)
- [linestring](#linestring)
- [multilinestring](#multilinestring)
- [polygon](#polygon)
- [multipolygon](#multipolygon)

### point

```js
const ptolemyReproject = require('ptolemy-reproject');

//ptolemyReproject.point(sourceCRS, toCRS, pointCoordinate);
const result = ptolemyReproject.point(4326, 32723, [-46.64, -23.5703]);
console.log(result);
// [ 332629.00686995825, 7392387.8835482355 ]
```

### multipoint

```js
const ptolemyReproject = require('ptolemy-reproject');

//ptolemyReproject.multipoint(sourceCRS, toCRS, multipointCoordinate);
const result = ptolemyReproject.multipoint(4326, 32723, [[-46.64, -23.5703], [-47.64, -21.2703]]);
console.log(result);
// [ [ 332629.00686995825, 7392387.8835482355 ],   [ 226053.02820297563, 7645646.386169953 ] ]
```

### linestring

```js
const ptolemyReproject = require('ptolemy-reproject');

//ptolemyReproject.linestring(sourceCRS, toCRS, linestringCoordinate);
const result = ptolemyReproject.linestring(4326, 32723, [
  [-46.64624065160751, -23.569855558195446],
  [-46.645567417144775, -23.570371829788982],
  [-46.645462810993195, -23.570465250146203],
]);
console.log(result);
// [ [ 331991.4287047193, 7392429.793622222 ],
//  [ 332060.80596672115, 7392373.411801645 ],
//  [ 332071.60244720604, 7392363.189180976 ] ]
```

### multilinestring

```js
const ptolemyReproject = require('ptolemy-reproject');

//ptolemyReproject.multilinestring(sourceCRS, toCRS, multilinestringCoordinate);
const result = ptolemyReproject.multilinestring(4326, 32723, [
  [[-46.64624065160751, -23.569855558195446], [-46.645567417144775, -23.570371829788982]],
  [[-46.645567417144775, -23.570371829788982], [-46.645462810993195, -23.570465250146203]],
]);
console.log(result);
// [ [ [ 331991.4287047193, 7392429.793622222 ],
//    [ 332060.80596672115, 7392373.411801645 ] ],
//  [ [ 332060.80596672115, 7392373.411801645 ],
//    [ 332071.60244720604, 7392363.189180976 ] ] ]
```

### polygon

```js
const ptolemyReproject = require('ptolemy-reproject');

//ptolemyReproject.polygon(sourceCRS, toCRS, polygonCoordinate);
const result = ptolemyReproject.polygon(4326, 32722, [
  [
    [-50.77056884765625, -21.13062153436313],
    [-50.9271240234375, -21.12293562133021],
    [-50.83648681640625, -21.19465530313863],
    [-50.77056884765625, -21.13062153436313],
  ],
]);
console.log(result);
// [ [ [ 523823.74799737247, 7663378.812094709 ],
//    [ 507567.6962134191, 7664244.906816781 ],
//    [ 516971.61788843677, 7656300.323619341 ],
//    [ 523823.74799737247, 7663378.812094709 ] ] ]
```

### multipolygon

```js
const ptolemyReproject = require('ptolemy-reproject');

//ptolemyReproject.multipolygon(sourceCRS, toCRS, multipolygonCoordinate);
const result = ptolemyReproject.multipolygon(4326, 32722, [
  [
    [
      [-50.77056884765625, -21.13062153436313],
      [-50.9271240234375, -21.12293562133021],
      [-50.83648681640625, -21.19465530313863],
      [-50.77056884765625, -21.13062153436313],
    ],
  ],
  [
    [
      [-50.9930419921875, -21.971066459686128],
      [-51.16607666015625, -22.039821650237034],
      [-51.0260009765625, -22.06527806776582],
      [-50.9930419921875, -21.971066459686128],
    ],
  ],
]);
console.log(result);
// [[[
//   [523823.74799737247, 7663378.812094709],
//   [507567.6962134191, 7664244.906816781],
//   [516971.61788843677, 7656300.323619341],
//   [523823.74799737247, 7663378.812094709]]],
// [[
//   [500718.3570432642, 7570375.557733057],
//   [482862.1996588615, 7562756.012907166],
//   [497317.38720489846, 7559947.418020568],
//   [500718.3570432642, 7570375.557733057],
//   ]]];
```

## Testing

```bash
npm test
```
