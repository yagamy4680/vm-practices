## CHANGES

- Build image with `4.8.4-alpine` as base, to reduce image size from 654MB to 44.5MB
- Add `publish`, `app_start`, and `app_stop` scripts

## COMMANDS

**build and publish**

```bash
./build && ./publish
```

**start**

```bash
./app_start
```

**stop**

```bash
./app_stop
```

## Supported APIs

Run the nodejs application on Mac OS X:

```bash
$ npm install
$ node ./index.js
Running on http://0.0.0.0:8080
```

Get all network interfaces:

```text
$ http http://127.0.0.1:8080/interfaces
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 749
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Aug 2017 17:46:08 GMT
ETag: W/"2ed-nDWhWB1x4acd5VdDEEM/jvD13z0"
X-Powered-By: Express

{
    "en5": [
        {
            "address": "fe80::9eeb:e8ff:fe37:9f60",
            "family": "IPv6",
            "internal": false,
            "mac": "9c:eb:e8:37:9f:60",
            "netmask": "ffff:ffff:ffff:ffff::",
            "scopeid": 11
        },
        {
            "address": "10.90.0.110",
            "family": "IPv4",
            "internal": false,
            "mac": "9c:eb:e8:37:9f:60",
            "netmask": "255.255.255.0"
        }
    ],
    "lo0": [
        {
            "address": "::1",
            "family": "IPv6",
            "internal": true,
            "mac": "00:00:00:00:00:00",
            "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
            "scopeid": 0
        },
        {
            "address": "127.0.0.1",
            "family": "IPv4",
            "internal": true,
            "mac": "00:00:00:00:00:00",
            "netmask": "255.0.0.0"
        },
        {
            "address": "fe80::1",
            "family": "IPv6",
            "internal": true,
            "mac": "00:00:00:00:00:00",
            "netmask": "ffff:ffff:ffff:ffff::",
            "scopeid": 1
        },
        {
            "address": "127.94.0.1",
            "family": "IPv4",
            "internal": true,
            "mac": "00:00:00:00:00:00",
            "netmask": "255.0.0.0"
        }
    ]
}
```

Get hostname:

```text
$ http http://127.0.0.1:8080/hostname
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 14
Content-Type: text/html; charset=utf-8
Date: Thu, 24 Aug 2017 17:46:42 GMT
ETag: W/"e-hyUrsuRKCgDb1uQUrdhPgl90IJI"
X-Powered-By: Express

grandia.local
```


## REFERENCES

- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- https://www.distelli.com/docs/tutorials/build-and-deploy-nodejs-with-docker/
- http://blog.arungupta.me/show-layers-of-docker-image/
