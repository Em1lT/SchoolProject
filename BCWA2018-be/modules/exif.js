'use strict';

const ExifImage = require('exif').ExifImage;

const getCoordinates = (img) => {
  return new Promise((resolve, reject) => {
    try {
      new ExifImage({image: img}, function(error, exifData) {
        if (error) {
          // console.log('Error: ' + error.message);
          reject();
        } else {
          if (exifData.gps.GPSLatitude) {
            const lat = gpsToDecimal(exifData.gps.GPSLatitude,
                exifData.gps.GPSLatitudeRef);
            const lon = gpsToDecimal(exifData.gps.GPSLongitude,
                exifData.gps.GPSLongitudeRef);
            const coordinates = {
              lat: lat,
              lng: lon,
            };
            resolve(coordinates);
          } else {
            reject();
          }
        }
      });
    } catch (error) {
      // console.log('Error: ' + error.message);
      reject();
    }
  });
};

// convert GPS coordinates to GoogleMaps format
const gpsToDecimal = (gpsData, hem) => {
  let d = parseFloat(gpsData[0]) + parseFloat(gpsData[1] / 60) +
      parseFloat(gpsData[2] / 3600);
  return (hem === 'S' || hem === 'W') ? d *= -1 : d;
};

module.exports = {
  getCoordinates: getCoordinates,
};
