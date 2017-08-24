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

## REFERENCES

- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- https://www.distelli.com/docs/tutorials/build-and-deploy-nodejs-with-docker/
- http://blog.arungupta.me/show-layers-of-docker-image/
