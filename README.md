# MyTesla backend

Backend alkalmazás a Másodlagos programozás óra beadandóhoz.

## Telepítés

1. Klónozzuk a repo-t

```bash
git clone https://github.com/hiimbalii/tesla-api
```

2. Amennyiben még nincs telepítsük a nest cli-t

```bash
npm i -g @nestjs/cli
```

3. a mappán belül telepítsük az alkalmazást

```bash
#yarn használatával
yarn

#npm használatával
npm i
```

## Használat

A megfelelő script-tel futtassuk

```bash
yarn start
yarn start:dev

npm run start
npm run start:dev
```

Az alapértelmezett port a `3000`, ezt a [main.ts](src/main.ts)-ben módosítható.

## API Használata

Az automatikus dokumentáció a `/api` endpointon érhető el

Például:

```
localhost:3000/api
```

### Konkrét ajánlások

_todo_

## Megjegyzések

Az alkalmazáshoz nem szükséges lokális mongodb, cloud solutionban van az egyszerűség kedvéért
