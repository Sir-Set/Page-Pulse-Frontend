# Page Pulse

Page Pulse is a small Express API that retrieves basic metadata for a web page, caches reports, and limits requests per client.

## Setup

```bash
npm install
npm start
```

The server starts at `http://localhost:3000`.

## Endpoints

`GET /api/health` returns the service status.

`POST /api/audit` accepts a JSON body containing a URL:

```json
{ "url": "https://example.com" }
```

The response includes the final requested URL, HTTP status code, response time, content type, fetch timestamp, and whether it was served from the in-memory cache.

## Development

```bash
npm test
npm run dev
```

The GitHub Actions workflow installs locked dependencies and runs the test suite on pushes and pull requests.
