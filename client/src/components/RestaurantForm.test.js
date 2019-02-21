import React from 'react';
import { render, mount } from 'enzyme';
import RestaurantForm from './RestaurantForm';

const cuisines = {
  state: {
    data: []
  }
}

const data = {
  name: 'Sagiv Restaurant',
  address: 'aaaa',
  lat: 33,
  lng: 44,
  rating: 3,
  cuisine: {
    id: 3333
  },
  accepts_10bis: true,
  max_delivery_time_minutes: 60
}

describe('<RestaurantForm />', () => {

  it('renders edit modal with correct field values populated', () => {

    const wrapper = render(<RestaurantForm cuisines={cuisines}
                                           data={data}/>)

    for (let [key, value] of Object.entries(data)) {
      let el = wrapper.find(`#restaurant_${key}`)
      let val
      switch (key) {
        case 'cuisine':
          expect(el.find('.ant-select-selection-selected-value').text()).toEqual("3333")
          break
        case 'rating':
          expect(el.find('.ant-select-selection-selected-value img').length).toEqual(3)
          break
        case 'max_delivery_time_minutes':
          expect(el.find('.ant-select-selection-selected-value').text()).toEqual('1 Hour')
          break
        case 'accepts_10bis':
          expect(el.hasClass('ant-switch-checked')).toEqual(true)
          break
        case 'lat':
        case 'lng':
          val = Number(el.val())
          expect(val).toEqual(value)
          break
        default:
          val = el.val()
          expect(val).toEqual(value)
          break
      }
    }
  })

  it('saves edited values correctly', () => {
    const onSave = jest.fn()
    const wrapper = mount(<RestaurantForm cuisines={cuisines}
                             onSave={onSave}
                             data={data}/>)


    wrapper.find('button[type="submit"]').simulate('submit')
    expect(onSave).toHaveBeenCalledTimes(1)
    expect(onSave).toHaveBeenCalledWith(data, {
      "name": "Sagiv Restaurant",
      "address": "aaaa",
      "lat": 33,
      "lng": 44,
      "rating": 3,
      "cuisine": 3333,
      "max_delivery_time_minutes": 60,
      "accepts_10bis": true
    })
  })
})