import { GPS_DETAIL_URL, GPS_URL, LOGIN_URL, SIGNUP_URL } from "../constants";
import axios from "axios";

function getGpsSummary(token: string) {
  return axios.get(GPS_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}

function getGpsDetail(token: string, id: string) {
  return axios.get(GPS_DETAIL_URL.replace("{id}", id), {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
}

const gpsService = {
  getGpsSummary,
  getGpsDetail,
};

export default gpsService;
