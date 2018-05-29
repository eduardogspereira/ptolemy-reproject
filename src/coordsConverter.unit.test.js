const coordsConverter = require('./coordsConverter');

describe('coordsConverter', () => {
  it('should convert when EPSG code is given', () => {
    const sourceCRS = 4326;
    const toCRS = 32722;
    const coords = [-21.710415, -50.747481];
    expect(coordsConverter(sourceCRS, toCRS, coords)).toEqual([
      2544667.424865139,
      3957039.505610453,
    ]);
  });

  it('should fail with an wrong EPSG code', () => {
    const sourceCRS = 4326111;
    const toCRS = 32722;
    const coords = [-21.710415, -50.747481];
    expect(() => coordsConverter(sourceCRS, toCRS, coords)).toThrowError();
  });

  it('should convert when proj string is given', () => {
    const sourceCRS = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
    const toCRS = 32722;
    const coords = [-21.710415, -50.747481];
    expect(coordsConverter(sourceCRS, toCRS, coords)).toEqual([
      2544667.424865139,
      3957039.505610453,
    ]);
  });

  it('should convert when WKT string is given', () => {
    const sourceCRS = `GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.01745329251994328,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4326"]]`;
    const toCRS = 32722;
    const coords = [-21.710415, -50.747481];
    expect(coordsConverter(sourceCRS, toCRS, coords)).toEqual([
      2544667.424865139,
      3957039.505610453,
    ]);
  });
});
