const coordsConverter = require('./coordsConverter');

const point = (sourceCRS, toCRS, pointCoords) => coordsConverter(sourceCRS, toCRS, pointCoords);

const multipoint = (sourceCRS, toCRS, pointCoordsArray) =>
  pointCoordsArray.map(pointCoords => coordsConverter(sourceCRS, toCRS, pointCoords));

const linestring = (sourceCRS, toCRS, lineCoords) => multipoint(sourceCRS, toCRS, lineCoords);

const multilinestring = (sourceCRS, toCRS, multilineCoords) =>
  multilineCoords.map(lineCoords => multipoint(sourceCRS, toCRS, lineCoords));

const polygon = (sourceCRS, toCRS, polygonCoords) =>
  polygonCoords.map(coordArray => linestring(sourceCRS, toCRS, coordArray));

const multipolygon = (sourceCRS, toCRS, multipolygonCoords) =>
  multipolygonCoords.map(data => polygon(sourceCRS, toCRS, data));

exports.point = point;
exports.multipoint = multipoint;
exports.linestring = linestring;
exports.multilinestring = multilinestring;
exports.polygon = polygon;
exports.multipolygon = multipolygon;
