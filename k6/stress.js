import http from 'k6/http';
import {group, check, sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    insecureSkipTLSVerify: true,
    stages:[
        {duration: '30m', target: 10},
    ]
}

export function handleSummary(data) {
    return {
      "Stress.html": htmlReport(data),
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
            'X-Auth-Token': "lEKZV3zWPS5b98fBRvKSQfWYXKdg",
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