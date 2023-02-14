import http from 'k6/http';
import { check, group, sleep } from 'k6';
//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";



export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 100,
      iterations: 1,
      maxDuration: '10m',
    },
  },
};

const BASE_URL = 'http://web:3000/api/internal/idp/v1/customer-profile';



export default () => {
  const loginRes = http.get(`${BASE_URL}`);

  // check(loginRes, {
  //   'check status code is 200': (resp) => resp.status===200,
  // });

};

//export function handleSummary(data) {
//  return {
//    "summary.html": htmlReport(data),
//    stdout: textSummary(data, { indent: " ", enableColors: true }),
//  };
//}