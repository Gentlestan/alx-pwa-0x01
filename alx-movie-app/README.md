MoviesDatabase API Overview The MoviesDatabase API provides access to a rich collection of data about movies, TV shows, actors, and related content. It allows developers to fetch details such as ratings, titles, series information, and upcoming releases. The API is RESTful and returns data in JSON format, making it easy to integrate into web or mobile applications.

Key Features

Titles & Metadata: Retrieve detailed information about movies, TV shows, and episodes using endpoints like:

GET /titles – Fetch a list of titles.

GET /titles/{id} – Get details of a specific title.

GET /titles/{id}/aka – Get alternate titles for a movie or show.

GET /titles/random – Fetch a random movie or show.

Series & Episodes: Explore TV show content by fetching series and season data:

GET /titles/series/{seriesId} – Get series details.

GET /titles/seasons/{seriesId} – Get all seasons of a series.

GET /titles/series/{seriesId}/{season} – Get a specific season’s episodes.

GET /titles/episode/{id} – Fetch details of a specific episode.

Ratings & Reviews:

GET /titles/{id}/ratings – Get IMDb-style rating information for a title.

Upcoming & Trending:

GET /titles/x/upcoming – View upcoming movies or series.

GET /titles/x/titles-by-ids – Retrieve multiple titles in a single call.

Search Functionality: Search for movies, shows, or actors across the database using flexible query parameters.

Actors & Cast: Retrieve actor profiles and their filmography.

Utility Endpoints: Access helper routes for data like genres, languages, or obsolete/deprecated endpoints.

MovieDatabase API Version v(1) current

Available Endpoints Titles Method Endpoint Description GET /titles Get a list of all titles. GET /titles/{id} Get details for a specific movie or show by ID. GET /titles/{id}/aka Get alternate names for a movie or show. GET /titles/{id}/ratings Get ratings (e.g., IMDb-style) for a title. GET /titles/random Fetch a random movie or show.

Series & Episodes Method Endpoint Description GET /titles/series/{seriesId} Get information about a specific TV series. GET /titles/seasons/{seriesId} Get all available seasons for a series. GET /titles/series/{seriesId}/{season} Get details for a specific season. GET /titles/episode/{id} Get details for a specific episode.

Upcoming & Batch Requests Method Endpoint Description GET /titles/x/upcoming Get a list of upcoming titles. GET /titles/x/titles-by-ids Fetch multiple titles by their IDs in one request.

Actors Method Endpoint Description GET /actors Search or list actors (depending on API support). GET /actors/{id} Get details about a specific actor.

Search Method Endpoint Description GET /search Search for movies, shows, or actors.

Utils Method Endpoint Description GET /utils/* Various utility endpoints (genres, languages, etc.).

Request and Response Format Request and Response Format Request Format

The MoviesDatabase API uses standard REST conventions. Requests are typically made using the GET method, and most endpoints require an IMDb ID as a path parameter. Authentication is handled through RapidAPI headers.

Endpoint:

GET /titles/{id}/main_actors

Example Full URL:

https://moviesdatabase.p.rapidapi.com/titles/tt0944947/main_actors

Headers

Header Type Description x-rapidapi-key string Your RapidAPI key for authentication x-rapidapi-host string The API host (moviesdatabase.p.rapidapi.com)

Path Parameters

Parameter Type Description id string IMDb ID of the movie or series (e.g., tt0944947)

Example Node.js Request const http = require('https');

const options = { method: 'GET', hostname: 'moviesdatabase.p.rapidapi.com', port: null, path: '/titles/tt0944947/main_actors', headers: { 'x-rapidapi-key': 'YOUR_API_KEY', 'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com' } };

const req = http.request(options, function (res) { const chunks = [];

res.on('data', function (chunk) { chunks.push(chunk); });

res.on('end', function () { const body = Buffer.concat(chunks); console.log(body.toString()); }); });

req.end();

Example Response

A successful response returns a JSON object containing the main actors of the given title.

{ "results": [ { "id": "nm0000199", "primaryName": "Emilia Clarke", "characters": ["Daenerys Targaryen"], "roles": [ { "character": "Daenerys Targaryen", "isVoice": false } ] }, { "id": "nm0000293", "primaryName": "Kit Harington", "characters": ["Jon Snow"], "roles": [ { "character": "Jon Snow", "isVoice": false } ] } ] }

✅ Summary

Method: GET

Base URL: https://moviesdatabase.p.rapidapi.com

Authentication: API Key (via headers)

Response Format: JSON

Example IMDb ID: tt0944947 (Game of Thrones)

Authentication

The MoviesDatabase API requires authentication for all requests to ensure secure access. Authentication is handled using API keys provided by RapidAPI. You must include your unique key and host name in the request headers for every API call.

Authentication Method

Each request must include the following headers:

Header Type Description x-rapidapi-key string Your personal API key obtained from the RapidAPI dashboard. x-rapidapi-host string The host name for this API — moviesdatabase.p.rapidapi.com. Example

cURL Example:

curl -X GET "https://moviesdatabase.p.rapidapi.com/titles/tt0944947/main_actors" -H "x-rapidapi-key: YOUR_API_KEY" -H "x-rapidapi-host: moviesdatabase.p.rapidapi.com"

Node.js Example:

const http = require('https');

const options = { method: 'GET', hostname: 'moviesdatabase.p.rapidapi.com', port: null, path: '/titles/tt0944947/main_actors', headers: { 'x-rapidapi-key': 'YOUR_API_KEY', 'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com' } };

const req = http.request(options, (res) => { const chunks = []; res.on('data', (chunk) => chunks.push(chunk)); res.on('end', () => { const body = Buffer.concat(chunks); console.log(body.toString()); }); });

req.end();

Error Handling

The MoviesDatabase API returns standardized HTTP status codes and error messages to help you identify and resolve issues quickly. Each response includes a status code and, in most cases, a descriptive message indicating the nature of the error.

Common Error Codes Status Code Meaning Description Recommended Action 200 OK Success The request was successful, and the server returned the expected data. Process the response as normal. 400 Bad Request Invalid Request The request was malformed or missing required parameters. Check the endpoint path, query parameters, and body format. 401 Unauthorized Authentication Failed The API key is missing, invalid, or expired. Verify your x-rapidapi-key header and reissue the request. 403 Forbidden Access Denied You do not have permission to access this resource. Ensure your API plan includes the requested endpoint. 404 Not Found Resource Not Found The requested movie, show, or actor ID does not exist. Confirm that the IMDb ID or endpoint path is correct. 429 Too Many Requests Rate Limit Exceeded You have exceeded your allowed request limit. Wait before retrying or upgrade your RapidAPI plan. 500 Internal Server Error Server Error An error occurred on the API’s side. Retry after a few seconds or contact support if it persists. Example Error Response { "status": 401, "message": "Invalid or missing API key." }

Handling Errors in Code (Node.js Example) const https = require('https');

const options = { method: 'GET', hostname: 'moviesdatabase.p.rapidapi.com', path: '/titles/invalid_id', headers: { 'x-rapidapi-key': 'YOUR_API_KEY', 'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com' } };

const req = https.request(options, (res) => { let data = ''; res.on('data', (chunk) => (data += chunk)); res.on('end', () => { if (res.statusCode >= 400) { console.error(Error ${res.statusCode}: ${data}); } else { console.log(JSON.parse(data)); } }); });

req.on('error', (err) => console.error('Request failed:', err)); req.end();

Best Practices

Always check the HTTP status code before processing the response.

Implement retry logic for 500 and 429 errors with a short delay.

Log full error messages for debugging but avoid exposing sensitive data (like API keys).
