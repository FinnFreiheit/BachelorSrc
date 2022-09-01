import http from 'k6/http';
import {group, check, sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    insecureSkipTLSVerify: true,
    stages:[
        {duration: '30m', target: 1},
    ]
}

export function handleSummary(data) {
    return {
      "readBulk.html": htmlReport(data),
    };
  }

export default function () {
    const url = 'https://53.37.88.112/api/jsonrpc'

    const payloadBrowse = JSON.stringify([
        {
            "jsonrpc":"2.0",
            "method":"PlcProgram.Read",
            "params":{
                "var":"\"Test1\""
            },
            "id":99
        },
        {
            "jsonrpc":"2.0",
            "method":"PlcProgram.Read",
            "params":{
                "var":"\"Test2\""
            },
            "id":99
        },
        {
            "jsonrpc":"2.0",
            "method":"PlcProgram.Read",
            "params":{
                "var":"\"Test3\""
            },
            "id":99
        },
        {
            "jsonrpc":"2.0",
            "method":"PlcProgram.Read",
            "params":{
                "var":"\"Test4\""
            },
            "id":99
        },
        {
            "jsonrpc":"2.0",
            "method":"PlcProgram.Read",
            "params":{
                "var":"\"Test5\""
            },
            "id":99
        }
])

    const params = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': "wRKNfipbnMzBp+hFm4dc4rDhakS2",
        },
    };

    const browseRes = http.post(url, payloadBrowse, params);
    check(browseRes, {
        'read status 200': (r) => r.status === 200,
        'req complete' : (r) => r.json().length === 5,
    })
    console.log(browseRes.json().length)

    /*
    if(browseRes.json()[0].hasOwnProperty("error")){
        console.log(browseRes.json()[0].hasOwnProperty("error"))
    }
    */

}