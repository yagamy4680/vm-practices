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


## Default Networking Among Docker Images

When you start 2 docker instances, they are placed in the same network:

```text
$ docker run --name node-web-app2-1503755679 -d yagamy/node-web-app2
2df93ffa7009f576421b8c9d992b72753aba5d1f6368274c4be4b476f626d845

$ docker run --name node-web-app2-1503755677 -d yagamy/node-web-app2
03d2119fcae4492eef5b12a3cf43bf6b63cba7873fb3f862a80ca0425d792032


$ docker exec -it 2df93ffa7009 sh
/usr/src/app # ifconfig
eth0      Link encap:Ethernet  HWaddr 02:42:AC:11:00:03
          inet addr:172.17.0.3  Bcast:0.0.0.0  Mask:255.255.0.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:56 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:2488 (2.4 KiB)  TX bytes:0 (0.0 B)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

/usr/src/app # exit


$ docker exec -it 03d2119fcae4492eef5b12a3cf43bf6b63cba7873fb3f862a80ca0425d792032 sh
/usr/src/app # ifconfig
eth0      Link encap:Ethernet  HWaddr 02:42:AC:11:00:02
          inet addr:172.17.0.2  Bcast:0.0.0.0  Mask:255.255.0.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:357 errors:0 dropped:0 overruns:0 frame:0
          TX packets:4 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:12578 (12.2 KiB)  TX bytes:280 (280.0 B)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
```

And, it is possible to ping from one docker instance to another docker instance via its `172.17.x.x` interface.

```text
$ docker exec -it 03d2119fcae4492eef5b12a3cf43bf6b63cba7873fb3f862a80ca0425d792032 sh
/usr/src/app # ping -c10 172.17.0.3
PING 172.17.0.3 (172.17.0.3): 56 data bytes
64 bytes from 172.17.0.3: seq=0 ttl=64 time=0.234 ms
64 bytes from 172.17.0.3: seq=1 ttl=64 time=0.151 ms
64 bytes from 172.17.0.3: seq=2 ttl=64 time=0.136 ms
64 bytes from 172.17.0.3: seq=3 ttl=64 time=0.148 ms
64 bytes from 172.17.0.3: seq=4 ttl=64 time=0.111 ms
64 bytes from 172.17.0.3: seq=5 ttl=64 time=0.150 ms
64 bytes from 172.17.0.3: seq=6 ttl=64 time=0.166 ms
64 bytes from 172.17.0.3: seq=7 ttl=64 time=0.171 ms
64 bytes from 172.17.0.3: seq=8 ttl=64 time=0.147 ms
64 bytes from 172.17.0.3: seq=9 ttl=64 time=0.130 ms

--- 172.17.0.3 ping statistics ---
10 packets transmitted, 10 packets received, 0% packet loss
round-trip min/avg/max = 0.111/0.154/0.234 ms
```

However, the `172.17.x.x` is different from host network, not applicable for some UDP-based applications with multicast / unicast operations, such as Echonet-Lite.


## REFERENCES

- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- https://www.distelli.com/docs/tutorials/build-and-deploy-nodejs-with-docker/
- http://blog.arungupta.me/show-layers-of-docker-image/
