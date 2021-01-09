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

Itt a konkrét usecase-hez szükséges endpointokat taglalom a megbeszéltek szerint

#### Autó típusok kilistázása

Az autók listáját a `GET /cars` endpointon találjuk. Az `url` mező-t kell használni navigációnál.

#### Űrlapok

A kapott auto url-t a `GET /forms/:url` endpoint-al tudjuk hasznosítani, az adatokból a megbeszéltek szerint űrlapot képzünk, majd a válaszokat formázva elküldjük a `POST /teslas` endpointnak.

Példa JSON-ok

```JSON
{
    "options": [
        {
            "name": "Kormány",
            "multipleChoices": false,
            "options": [
                {
                    "key": "Van",
                    "value": "van"
                },
                {
                    "key": "Nincs",
                    "value": "nincs"
                }
            ]
        },
        {
            "name": "Ülés",
            "multipleChoices": false,
            "options": [
                {
                    "key": "Van",
                    "value": "van"
                },
                {
                    "key": "Nincs",
                    "value": "nincs"
                }
            ]
        },
        {
            "name": "Extrák",
            "multipleChoices": true,
            "options": [
                {
                    "key": "51 Kínai rabszolga",
                    "value": "szolgak"
                },
                {
                    "key": "+10 év garancia",
                    "value": "gari10"
                }
            ]
        }
    ],
    "colors": [
        {
            "name": "Zöld B)",
            "hex": "#bada55"
        },
        {
            "name": "brick",
            "hex": "#ba5441"
        }
    ],
    "_id": "5ff9a1dcf82c5e0770c4a98d",
    "name": "Model X rendelés",
    "description": "Szabja személyre az ÖN Tesla Model X-ét",
    "autoUrl": "model-3",
    "__v": 0
}
```

Erre válasz:

```JSON
{
    "owner":"Tóth Balázs",
    "color":{"name":"Zöld","hex":"#bada55"},
    "car":"5ff87eed093548824a757c0a",
    "values":[
        {"key":"Kormány","value":"van"},
        {"key":"Ülés","value":"van"},
        {"key":"Extrák","value":"szolgak"},
        {"key":"Extrák","value":"gari10"}
    ]
}
```

vagy

```JSON
{
    "owner":"Tóth Balázs",
    "color":{"name":"Zöld","hex":"#bada55"},
    "car":"5ff87eed093548824a757c0a",
    "values":[
        {"key":"Kormány","value":"van"},
        {"key":"Ülés","value":"van"}
    ]
}
```

A car-hoz az auto id-jét kell írni. Url-ből id-t a `GET /cars/:url/convert` endpointon képzünk.

#### Baráti rendelés megtekintése

A megtekintés oldalon a `GET /teslas/:id`, és a `GET /cars/id/:id` endpointot használjuk.

## Megjegyzések

Az alkalmazáshoz nem szükséges lokális mongodb, cloud solutionban van az egyszerűség kedvéért
