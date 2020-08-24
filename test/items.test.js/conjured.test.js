import { Shop, Item } from '../../src/gilded_rose'

describe('Update Conjured Items', () => {
  it('should decrement Quality for Conjured items twice as fast as regular', () => {
    const gildedRose = new Shop([
      new Item('Conjured foo', 10, 10),
      new Item('Conjured bar', 25, 2),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(8)
    expect(items[1].quality).toBe(0)
  })

  it('should double decrease quality once Item sell by date has passed', () => {
    const gildedRose = new Shop([
      new Item('Conjured foo', -1, 10),
      new Item('Conjured bar', 0, 2),
      new Item('Conjured bar', -2, -2),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(6)
    expect(items[1].quality).toBe(0)
    expect(items[1].quality).toBe(0)
  })
})
