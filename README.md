# Test task for Integrify

This project was made with react create-react-app, react-bootstrap, react router specially for Integrify platform as test task. Hope you enjoy!

## Used technologies

`React`, React Hooks: `useEffect`, `useState`, `useParams`; `React Router`, Router hook: `useNavigate`; `Localstorage`, `JSONPlaceholder API`, `AccuWeather API`, `React bootstrap` and `CSS styling`

## Disclaimer
1. Weather API is very limited for requests. I have tried to make dynamic weather cards when you send request for 'Find city by name', this dynamic cards can easily create a lot of requests, so API can be locked for 24 hours because of limit really fast. After that you will get 404 error image. I highly recommend checking it on cities, like Helsinki, Oulu etc., because there are almost no cities with same names. ( Example : You will search for Moscow, it will find about 24 cities named Moscow, and each city will create a request for weather to show you current weather there. So it's 25 requests, and the limit is 150/ daily).
2. Arrows on the page are responsible for 'back, forward' action, you can use them instead of browser arrows. Made with `useNavigate` Hook
3. If API will lock due to calls limit, there are 5 different API keys for this platform in `src/components/service-components/request in fetchData` or just reach me so i will change it and refresh. 
4. At first this app was supposed to be a Client Cards app, but after i finished it i decided to add more and more features, and then to add weather, and more features again etc. So some of the parts of code might seem too 'over complicated' and it could be done easier, if i knew that i'm going to add it from very beginning haha. 

## Features 
### Client Card
 1. Localstorage set for Client Card tasks. It's made to imitate post requests to server when adding or removing a new person, so you can add/remove, reload page and the changes will still be there. 
 2. You can add client to favourites, and then sort the list to show only favourite clients
 3. Ability to delete and add clients to the list ( Max 12, after that button is disabled)
 4. Expand cards to see more detailed information about the client
 5. For new clients i connected 'id generator', so the id of new clients and old ones are unique, but in different style.
 6. You can click on button at the end of the list to add new client.
 7. Added filter by name to quickly find client if you know his/her name.

### Weather API
 1. Dynamic Cards - When searching for city you see live weather there, and on click you will be re-directed with router to city page to see forecast for 5 days.
 2. On City page you see 5 days forecast, and if you hover on one of those cards it will rotate showing you forecast for the night time that day.
 3. When you click after search to see more detailed forecast, you are redirected with Router to page with passing ID through useParams.
 
### Screenshots

`Screenshots are scrollable to right side, when you open them`

1. ![Weather API - Search](https://github.com/Rmk-kk/integrify-test/tree/master/public/screenshots/image_2022-11-20_12-34-14.png?raw=true)
2. ![Weather API - City Page](https://github.com/Rmk-kk/integrify-test/tree/master/public/screenshots/image_2022-11-20_12-34-25.png?raw=true)
3. ![Cards API - All Cards](https://github.com/Rmk-kk/integrify-test/tree/master/public/screenshots/image_2022-11-20_12-34-56.png?raw=true)
4. ![Cards API - Detailed information](https://github.com/Rmk-kk/integrify-test/tree/master/public/screenshots/image_2022-11-20_12-35-02.png?raw=true)

### Link to Netlify

https://637a263b850b2c38210cc73f--integrify-test-app.netlify.app


    

