const proj4 = require('proj4');
const projData = require('./projData');

const getProj = crs => {
  const crsString = typeof crs === 'number' ? projData[crs] : crs;
  return crsString;
};

module.exports = (sourceCRS, toCRS, coordsPair) => {
  const sourceCRSProj = getProj(sourceCRS);
  const toCRSProj = getProj(toCRS);
  return proj4(sourceCRSProj, toCRSProj, coordsPair);
};
