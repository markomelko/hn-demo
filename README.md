Small fast demo project for a given Hackernoon assignment - read stories.

App created with Vite / React / Javascript.

### In the future.

(after v 20.11.2022) Perhaps the whole data architecture could be thought of differently. Along side e.g. user presses next story, not fethed stories
can be stored to the state etc.

### Public demo

[http://hackernoon-demo.s3-website-eu-west-1.amazonaws.com/](http://hackernoon-demo.s3-website-eu-west-1.amazonaws.com/)

### Project origins

[https://news.ycombinator.com/](https://news.ycombinator.com/)

### Dev docs

[https://vitejs.dev/](https://vitejs.dev/)

[https://reactjs.org/](https://reactjs.org/)

[https://react-redux.js.org/api/hooks#recipe-useactions](https://react-redux.js.org/api/hooks#recipe-useactions)

### Requirements

- Nodejs 16+
- npm 8+

### Package dependencies

Install dependencies by running: `npm install`.

### Environment Variables

Get credentials from assingment emals or from author

| Variable            | Purpose                                   |
| ------------------- | ----------------------------------------- |
| `VITE_STORIES_ROOT` | Root URL for top stories, returns 500 IDs |
| `VITE_CONTENT_ROOT` | A single Story / Comment - content URL    |

Create .env file to the project root, and set variables as .env.sample advices.

### Commands and localhost address

```sh
npm install
npm run dev
```

Localhost address: `http://127.0.0.1:5173/`

### some notes

- PRIME:

  Clean CSS classes / colors. Add Scroller features.

- TODO:

  Eslint, tests for primary components,

  Make this to additional dev branch (as they are not required)

- LATER:

  In the background, you should be able to request any new stories that are released during user is reading current ones and they should be downloaded without re-loading all content again. Maybe ID-based state indexing (keeping track / fetching new stories) would better than count based.

  Help scrolling, e.g. when open story from teasers, make 'back' feature that returns browser to the correct spot and maybe prev ready story is highlighted some how.

### Author

Marko M - marko.melko@live.com
