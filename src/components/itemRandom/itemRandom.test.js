import React from 'react'
import ItemRandom from './itemRandom'
import {shallow} from 'enzyme'

describe('testing <ItemRandom/>', () => {

  describe('testing snap & state', () => {
    const item = shallow(<ItemRandom/>)

    it('ItemRandom have rendered correctly', () => {
      expect(item).toMatchSnapshot()
    })
    it('ItemRandom state "random" is empty object', () => {
      expect(item.state().random).toBeObject()
    })
    it('ItemRandom state "loading" is empty true', () => {
      expect(item.state().loading).toBeTruthy()
    })
    it('ItemRandom state "error" is empty false', () => {
      expect(item.state().error).toBeFalsy()
    })
  })

  describe('Handlers test', () => {
    const item = shallow(<ItemRandom/>)

    it('testing onRandom', () => {
      item.instance().onRandom()
      expect(item.state().loading).toBeFalsy()
    })
    it('testing onError', () => {
      item.instance().onError()
      expect(item.state().error).toBeTruthy()
      expect(item.state().loading).toBeFalsy()
    })
    it('testing updateRandom', () => {
      item.instance().updateRandom()
      expect(item.state().loading).toBeFalsy()
    })
  })
  
})