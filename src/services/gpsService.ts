import { GPS_DETAIL_URL, GPS_URL, LOGIN_URL, SIGNUP_URL } from "../constants";

function getGpsSummary(token: string) {
  const headers = new Headers();
  headers.append("Authorization", token);
  return fetch(GPS_URL, { headers });
}

function getGpsDetail(token: string, id: string) {
  const headers = new Headers();
  headers.append("Authorization", token);
  return fetch(GPS_DETAIL_URL.replace("{id}", id), { headers });
}

const gpsService = {
  getGpsSummary,
  getGpsDetail,
};

export default gpsService;
