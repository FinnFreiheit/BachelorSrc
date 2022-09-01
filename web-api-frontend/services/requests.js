const url = 'https://53.37.88.112/api/jsonrpc'

if (typeof window !== 'undefined') {
    const authToken = window.localStorage.getItem("authToken");

    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': authToken
    }
}


//TODO Fehlerbehandlung.

export const ping = () => {
    return fetch(url, {
        method:"POST",
        headers: header,
        body: JSON.stringify([{
            "jsonrpc":"2.0",
            "method":"Api.Ping",
            "id":99
        }])
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

export const login = (user, password) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{
            "jsonrpc": "2.0",
            "method": "Api.Login",
            "params": {
                "user": user,
                "password": password
            },
            "id": 1
        }])
    }).then((res) => res.json())
        .then((data) => {
            console.log(data[0])
            return data[0];
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getCertificatURL = () => {
    return fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify([{
            "jsonrpc": "2.0",
            "method": "Api.GetCertificateUrl",
            "id": 2
        }])
    })
        .then(res => res.json())
        .then(data => {
            if (data[0].result) {
                return data[0].result
            } else {
                console.log(data[0].error)
                return []
            }
        })
        .catch(err => console.log(err));

}

export const getPermissions = () => {
    return fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify([{
            "jsonrpc": "2.0",
            "method": "Api.GetPermissions",
            "id": 3
        }])
    })
        .then(res => res.json())
        .then(data => {
            if (data[0].result) {
                return data[0].result
            } else {
                console.log(data[0].error)
                return []
            }
        })
        .catch(err => console.log(err))
}

export const plcProgramBrowse = (mode, varName) => {
    if (varName === "") {
        return fetch(url, {
            method: "POST",
            headers: header,
            body: JSON.stringify(
                [{
                    "jsonrpc": "2.0",
                    "method": "PlcProgram.Browse",
                    "id": 4,
                    "params": {
                        "mode": mode
                    }
                }]
            )
        })
            .then(res => res.json())
            .then(data => {
                return data[0]
            })
            .catch(err => console.log(err))
    } else {
        return fetch(url, {
            method: "POST",
            headers: header,
            body: JSON.stringify(
                [{
                    "jsonrpc": "2.0",
                    "method": "PlcProgram.Browse",
                    "id": 4,
                    "params": {
                        "mode": mode,
                        "var": `\"${varName}\"`
                    }
                }]
            )
        })
            .then(res => res.json())
            .then(data => {
                return data[0]
            })
            .catch(err => console.log(err))
    }
}

export const getApiVersion = () =>{
    return fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify([{
            "jsonrpc": "2.0",
            "method": "Api.Version",
            "id": 5
        }])
    })
        .then(res => res.json())
        .then(data => {
            if (data[0].result) {
                return data[0].result
            } else {
                console.log(data[0].error)
                return []
            }
        })
        .catch(err => console.log(err));

}

export const logout = () =>{
    return fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify([{
            "jsonrpc": "2.0",
            "method": "Api.Logout",
            "id": 5
        }])
    })
        .then(res => res.json())
        .then(data => {
            if (data[0].result) {
                console.log(data[0])
                return data[0].result
            } else {
                console.log(data[0].error)
                return []
            }
        })
        .catch(err => console.log(err));

}

export const apiBrowse = () =>{
    return fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify([{
            "jsonrpc": "2.0",
            "method": "Api.Browse",
            "id": 5
        }])
    })
        .then(res => res.json())
        .then(data => {
           return data[0]
        })
        .catch(err => console.log(err));
}