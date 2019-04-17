# WeEat Sagiv Frankel

- https://we-eat-daily.herokuapp.com
- https://we-eat-daily.herokuapp.com/sidekiq


## Commands
- Run client and server - `rake start`
- Create restaurants `heroku run rake "zomato:restaurants[280,10,30,10,5]"`
- Run rails `rails s -p 3001`

## Setup
- add .env for zomato `ZOMATO_API_KEY=`

---

- Create api server `rails new . --api --database=postgresql -T --no-rdoc --no-ri`
- Create client side app `npx create-react-app client`

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

## Deploy
- `npm run build`
- `npm run deploy`
- `git push heroku master`

