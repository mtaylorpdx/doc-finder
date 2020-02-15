# _Better Doctor Lookup_

#### _Epicodus Week 6 solo project, 2/14/2020_

#### By _Matt Taylor_

## Description

_This project application is an exercise in API Calls utilizing the BetterDoctor API._

## Behavior Driven Development
| Behavior | Input Example | Output Example |
|----|----|-----|
| Allow user to input a city and medical issue, and receive a list of doctors matching that criteria | "Portland, OR", "flu" | List of doctors in Portland, OR that treat flu | |
| Allow user to input a city and doctor's name and receive a list of doctors matching that name |  "Portland, OR", "Bart" | A list of doctors with the name Bart |
| When receiving a list of doctors as a result, list includes detailed information about each doctor | "Bart" | First name, last name, address, phone number, website, accepting new patients (y/n) |
| If the API call returns an error (any message not a 200 OK), the application returns a notification stating the error | ";jdklsajf;jn" | Error Message |
| If the query results in no matches, application returns a notification stating none are found | A doctor who doesn't exist | "No doctors have been found matching your criteria." |

## Setup/Installation Requirements

* BetterDoctor API Key can be retrieved from ``https://developer.betterdoctor.com`` with the creation of an account.

* Open Terminal
* Type ``$ git clone https://github.com/mtaylorpdx/doc-finder``
* Open the project folder
* Type ``$ touch .env`` to create API Key file
* Add your API key to .env as ``API_KEY = {your API key}``
* Type ``$ npm install``
* Type ``$ npm run start``

## Support and contact details

Email [@Matt Taylor](mailto:me@email.com)

## Technologies Used

* Javascript
* Bootstrap
* Webpack
* Jest
* Babel
* ESLint
* BetterDoctor API

### License

*Licensed under the MIT License*

Copyright (c) 2020 **_Matt Taylor_**