# How to Run Solution

## Case 1 - Database Querying

#### 1. Change to case 1 directory and install sqllite dependency with this command

```bash
cd case-1-database-querying
npm install
```

#### 2. Run `npm start` to get querying result

#### 3. The expected result will be like this bellow

```js
{ ID: 1, UserName: 'Ali', ParentUserName: 'Budi' }
{ ID: 2, UserName: 'Budi', ParentUserName: null }
{ ID: 3, UserName: 'Cecep', ParentUserName: 'Ali' }
```
<br />

## Case 2 - Express Server

#### 1. Make sure you have MySQL database for testing

#### 2. Change to case 2 directory and install dependencies with this command

```bash
cd case-2-express-server
npm install
```

#### 3. Rename `.env.example` file to `.env` It will look like this

```
PORT=3001
API=api/v1
OMDB_KEY=faf7e5bb
OMDB_API=http://www.omdbapi.com
DB_URL=mysql://root@localhost/test
```

#### 4. Change `DB_URL` in `.env` file with your local or remote MySQL database URL with the config below

```
DB_URL=mysql://{username}:{password}@{host}/{database}
```

#### 5. Run `npm start` for initializing database table and running server

#### 6. Run `npm test` for end-to-end and unit testing

#### 7. You can access API with this address

```bash
# Search movie
# GET /api/v1/movie/search?key={string}&page={number}
# Query {key} : searching keyword
# Query {page}: pagination number
curl -i 'localhost:3001/api/v1/movie/search?key=Batman&page=1'

# Detail movie
# GET /api/v1/movie/detail/:id
# Params {id} : imdbID
curl -i 'localhost:3001/api/v1/movie/detail/tt4853102'

# Show logs
# GET /api/v1/log
curl -i 'localhost:3001/api/v1/log'
```

#### 8. You can also run the API with this remote server

```bash
# Example
# GET search movie
curl -i 'https://movie-search-arifintahu.herokuapp.com/api/v1/movie/search?key=Batman&page=1'

# GET detail movie
curl -i 'https://movie-search-arifintahu.herokuapp.com/api/v1/movie/detail/tt4853102'

# GET show logs
curl -i 'https://movie-search-arifintahu.herokuapp.com/api/v1/log'
```
<br />

## Case 3 - Refactor

#### 1. Change to case 3 directory with this command

```bash
cd case-3-refactor
```

#### 2. Run `node test.js` for getting case results

#### 3. The expected result will be like this bellow

```bash
┌────────────┬───────────────────┐
│  (index)   │      Values       │
├────────────┼───────────────────┤
│ inputText  │ 'Welcome (hello)' │
│ outputText │      'hello'      │
└────────────┴───────────────────┘
┌────────────┬──────────────────────────┐
│  (index)   │          Values          │
├────────────┼──────────────────────────┤
│ inputText  │ 'Silakan (duduk) disini' │
│ outputText │         'duduk'          │
└────────────┴──────────────────────────┘
┌────────────┬────────────────┐
│  (index)   │     Values     │
├────────────┼────────────────┤
│ inputText  │ '(Lewat) sini' │
│ outputText │    'Lewat'     │
└────────────┴────────────────┘
┌────────────┬─────────────┐
│  (index)   │   Values    │
├────────────┼─────────────┤
│ inputText  │ 'kosong ()' │
│ outputText │     ''      │
└────────────┴─────────────┘
┌────────────┬───────────────┐
│  (index)   │    Values     │
├────────────┼───────────────┤
│ inputText  │ 'Hello world' │
│ outputText │      ''       │
└────────────┴───────────────┘
┌────────────┬────────┐
│  (index)   │ Values │
├────────────┼────────┤
│ inputText  │   ''   │
│ outputText │   ''   │
└────────────┴────────┘
```
<br />

## Case 4 - Anagram

#### 1. Change to case 4 directory with this command

```bash
cd case-4-anagram
```

#### 2. Run `node test.js` for getting case results

#### 3. The expected result will be like this bellow

```bash
input : [
  'kita', 'atik',
  'tika', 'aku',
  'kia',  'makan',
  'kua'
]
output : [
  [ 'kita', 'atik', 'tika' ],
  [ 'aku', 'kua' ],
  [ 'kia' ],
  [ 'makan' ]
]


input : [
  'kamu', 'ukam',
  'tika', 'aku',
  'kia',  'ikat',
  'kua'
]
output : [ [ 'kamu', 'ukam' ], [ 'tika', 'ikat' ], [ 'aku', 'kua' ], [ 'kia' ] ]
```

By [Miftahul Arifin](https://github.com/arifintahu)

---