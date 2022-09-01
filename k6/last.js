import http from 'k6/http';
import {group, check, sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    insecureSkipTLSVerify: true,
    stages:[
        {duration: '1m', target: 1},
        {duration:'10m', target: 1},
        {duration: '1m', target: 3},
        {duration: '10m', target: 3},
        {duration: '1m', target: 5},
        {duration: '10m', target: 5},
    ]
}

export function handleSummary(data) {
    return {
      "Last.html": htmlReport(data),
    };
  }

export default function () {
    const url = 'https://53.37.88.112/api/jsonrpc'

    const payloadBrowse = JSON.stringify([{
        "jsonrpc": "2.0",
        "method": "PlcProgram.Browse",
        "params": {
            "mode": "children"
        },
        "id": 100
    }])

    const params = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': "bL17yabuKDQTGhXXIb/4Nrn2ZpoX",
        },
    };

    const browseRes = http.post(url, payloadBrowse, params);
    check(browseRes, {
        'browse status 200': (r) => r.status === 200,
        'has result': (r) => r.json()[0].hasOwnProperty("result")
    })
    console.log(browseRes.json()[0].result.length)

    if(browseRes.json()[0].hasOwnProperty("error")){
        console.log(browseRes.json()[0].hasOwnProperty("error"))
    }

}