# WeEat Sagiv Frankel

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