import Shop from '../src/gilded_rose'
import Item from '../src/item'

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe('fixme')
  })
})
