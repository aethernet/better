import { Shop, Item } from '../../src/gilded_rose'

describe('Update Regular Items', () => {
  it('should decrement Quality for Regular items for each update', () => {
    const gildedRose = new Shop([
      new Item('foo', 10, 10),
      new Item('bar', 25, 2),
    ])
    const items = gildedRose.updateQuality()
    expect(items.length).toBe(2)
    expect(items[0].quality).toBe(9)
    expect(items[1].quality).toBe(1)
  })

  it('should decrement Sell By Date for all Items for each update', () => {
    const gildedRose = new Shop([
      new Item('foo', 7, 10),
      new Item('bar', 25, 2),
    ])
    const items = gildedRose.updateQuality()
    expect(items.length).toBe(2)
    expect(items[0].sellIn).toBe(6)
    expect(items[1].sellIn).toBe(24)
  })

  it('should double decrease quality once Item sell by date has passed', () => {
    const gildedRose = new Shop([
      new Item('foo', -1, 10),
      new Item('bar', 0, 2),
      new Item('bar', -2, -2),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(8)
    expect(items[1].quality).toBe(0)
    expect(items[1].quality).toBe(0)
  })
})
