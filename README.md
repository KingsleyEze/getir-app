# Getir App

#### Heroku API: https://stark-basin-39482.herokuapp.com/api/records/search

## Commands

```bash
npm install # install packages
npm test # test using Jest
npm run coverage # test and open the coverage report in the browser
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run docs # generate API docs
```

## Example:

```jsx
POST /api/records/search HTTP/1.1
Host: stark-basin-39482t.herokuapp.com
Content-Type: application/json
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
