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
      "ReadOneAtATime.html": htmlReport(data),
    };
  }

const SLEEP_DURATION = 0.4;

export default function () {
    const url = 'https://53.37.88.112/api/jsonrpc'

  
    const payloadReadOne = JSON.stringify([{
        "jsonrpc": "2.0",
        "method": "PlcProgram.Read",
        "params": {
            "var":"\"Test1\""
        },
        "id": 100
    }])

    const payloadReadTwo = JSON.stringify([{
        "jsonrpc": "2.0",
        "method": "PlcProgram.Read",
        "params": {
            "var":"\"Test2\""
        },
        "id": 100
    }])

    const payloadReadThree = JSON.stringify([{
        "jsonrpc": "2.0",
        "method": "PlcProgram.Read",
        "params": {
            "var":"\"Test3\""
        },
        "id": 100
    }])

    const payloadReadFour = JSON.stringify([{
        "jsonrpc": "2.0",
        "method": "PlcProgram.Read",
        "params": {
            "var":"\"Test4\""
        },
        "id": 100
    }])

    const payloadReadFive = JSON.stringify([{
        "jsonrpc": "2.0",
        "method": "PlcProgram.Read",
        "params": {
            "var":"\"Test5\""
        },
        "id": 100
    }])

    const params = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': "HKFL2hBPoj8q9eGjz336drvhuCmX",
        },
    };

    group('simple user journey', (_) => {

        const ReadOneRes = http.post(url, payloadReadOne, params);
        check(ReadOneRes, {
            'ReadOne status 200': (r) => r.status === 200,
            'ReadOne has result': (r) => r.json()[0].hasOwnProperty("result")
        })
        console.log(ReadOneRes.json()[0].result)

        if(ReadOneRes.json()[0].hasOwnProperty("error")){
            console.log(ReadOneRes.json()[0].hasOwnProperty("error"))
        }
        sleep(SLEEP_DURATION)

        const ReadTwoRes = http.post(url, payloadReadTwo, params);
        check(ReadTwoRes, {
            'ReadTwo status 200': (r) => r.status === 200,
            'ReadTwo has result': (r) => r.json()[0].hasOwnProperty("result")
        })
        console.log(ReadTwoRes.json()[0].result)

        if(ReadTwoRes.json()[0].hasOwnProperty("error")){
            console.log(ReadTwoRes.json()[0].hasOwnProperty("error"))
        }
        sleep(SLEEP_DURATION)

        const ReadThreeRes = http.post(url, payloadReadThree, params);
        check(ReadThreeRes, {
            'ReadThree status 200': (r) => r.status === 200,
            'ReadThree has result': (r) => r.json()[0].hasOwnProperty("result")
        })
        console.log(ReadThreeRes.json()[0].result)

        if(ReadThreeRes.json()[0].hasOwnProperty("error")){
            console.log(ReadThreeRes.json()[0].hasOwnProperty("error"))
        }
        sleep(SLEEP_DURATION)

        const ReadFourRes = http.post(url, payloadReadFour, params);
        check(ReadFourRes, {
            'ReadFour status 200': (r) => r.status === 200,
            'ReadFour has result': (r) => r.json()[0].hasOwnProperty("result")
        })
        console.log(ReadFourRes.json()[0].result)

        if(ReadFourRes.json()[0].hasOwnProperty("error")){
            console.log(ReadFourRes.json()[0].hasOwnProperty("error"))
        }
        sleep(SLEEP_DURATION)

        const ReadFiveRes = http.post(url, payloadReadFive, params);
        check(ReadFiveRes, {
            'ReadFive status 200': (r) => r.status === 200,
            'ReadFive has result': (r) => r.json()[0].hasOwnProperty("result")
        })
        console.log(ReadFiveRes.json()[0].result)

        if(ReadFiveRes.json()[0].hasOwnProperty("error")){
            console.log(ReadFiveRes.json()[0].hasOwnProperty("error"))
        }
        sleep(SLEEP_DURATION)


    })
}