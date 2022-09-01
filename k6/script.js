import http from 'k6/http';
import {group, check, sleep} from 'k6';

export const options = {
    insecureSkipTLSVerify: true,
    stages:[
        {duration: '1m', target: 1},
    ]
}

const SLEEP_DURATION = 0.4;

export default function () {
    const url = 'https://53.37.88.112/api/jsonrpc'

    const payloadLogin = JSON.stringify([{
            "jsonrpc": "2.0",
            "method": "Api.Login",
            "params": {
                "user": "Everybody",
                "password": ""
            },
            "id": 99
        }]
    );

    const payloadLogout = JSON.stringify([{
            "jsonrpc": "2.0",
            "method": "Api.Logout",
            "id":101
        }]
    );

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
        },
    };

    group('simple user journey', (_) => {
        const loginRes = http.post(url, payloadLogin, params);
        check(loginRes, {
            'Login status 200': (r) => r.status === 200,
        });
        params.headers['X-Auth-Token'] = loginRes.json()[0].result.token;

        if(loginRes.json()[0].hasOwnProperty("error")){
            console.log(loginRes.json()[0].hasOwnProperty("error"))
        }
        sleep(SLEEP_DURATION)

        const browseRes = http.post(url, payloadBrowse, params);
        check(browseRes, {
            'browse status 200': (r) => r.status === 200,
            'has result': (r) => r.json()[0].hasOwnProperty("result")
        })
        console.log(browseRes.json()[0].result.length)

        if(browseRes.json()[0].hasOwnProperty("error")){
            console.log(browseRes.json()[0].hasOwnProperty("error"))
        }
        sleep(SLEEP_DURATION)

        const logoutRes = http.post(url, payloadLogout, params);
        check(logoutRes, {
            'logout status 200': (r) => r.status === 200,
        })
        if(logoutRes.json()[0].hasOwnProperty("error")){
            console.log(logoutRes.json()[0].hasOwnProperty("error"))
        }

    })
}