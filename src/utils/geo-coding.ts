export const geocode = async (
  accomodation: string
): Promise<{
  lat: number;
  lon: number;
}> => {
  const geoRes = await fetch(
    `https://nominatim.openstreetmap.org/search?=Wolnego%204,%20Katowice&format=json&q=${encodeURIComponent(
      accomodation
    )}`
  );
  const geoData = await geoRes.json();
  const lat = parseFloat(geoData[0].lat);
  const lon = parseFloat(geoData[0].lon);
  return { lat, lon };
};
