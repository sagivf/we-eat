# WeEat Sagiv Frankel

- https://we-eat-daily.herokuapp.com
- https://we-eat-daily.herokuapp.com/sidekiq

- add .env for zomato 
ZOMATO_API_KEY=64051c9e2b0354b2938b32fcf4cd8fb2

- Create restaurants `heroku run rake "zomato:restaurants[280,10,30,10,5]"`


---

- Create api server `rails new . --api --database=postgresql -T --no-rdoc --no-ri`

- Create client side app `npx create-react-app client`

- Run rails `rails s -p 3001`

- Seed data
`
copy(JSON.stringify(x.map(({ coordinates, name, address, max_delivery_time, accepts_10bis, lat, lon }) => ({
    name,
    address,
    max_delivery_time,
    accepts_10bis, 
    lat: coordinates.lat, 
    lng: coordinates.lng,     
}))))
`

- run client and server - `rake start`


## deploy
- `git push heroku master`

