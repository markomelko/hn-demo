Small fast demo project for a given Hackernoon assignment.

App is created with Vite / React / Javascript.

### the story

Initially, I did the POC phase straigt via component level state management, with useEffect. First phase looked a bit complex / heavy on component level, it worked fine and the dev work took only about on hour.

After one night, I decided to implement application level state manager (Redux) to the app. With the Redux, app's basic functionalities are working clearly. But, maybe the whole data architecture could be thought of differently, but thats a whole other story.

I started this with Javascript, because I thought that possible exceptions with Typescript might slow me down on the work. With @reduxjs/toolkit and Typescript I could have had to scratch my head for a while.

Codebase misses clearly Eslint and Tests, but those would took evening or two.

### Public demo URL

[http://hackernoon-demo.s3-website-eu-west-1.amazonaws.com/](http://hackernoon-demo.s3-website-eu-west-1.amazonaws.com/)

NOTE: Build files are manually copied to AWS S3, without HTTPS. That can be done easily with Github Workflow / Actions and using the required AWS account secrets.

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

There is a generic config, now only to to set 'pagination' count.

That can be found from /config/defaults.js.

### Author

Marko M - marko.melko@live.com
