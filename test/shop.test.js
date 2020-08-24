import Shop from '../src/shop'
import Item from '../src/item'

describe('Shop', () => {
  it('should create an empty shop', () => {
    const gildedRose = new Shop()
    const items = gildedRose.updateQuality()
    expect(items.length).toBe(0)
  })

  it('should never decrease quality below 0 for any items', () => {
    const gildedRose = new Shop([
      new Item('foo', 10, 0),
      new Item('bar', 25, 2),
    ])
    const items = gildedRose.updateQuality()
    expect(items.length).toBe(2)
    expect(items[0].quality).toBe(0)
    expect(items[1].quality).toBe(1)
  })

  it('should never let quality of an Item increase to more than 50', () => {
    const gildedRose = new Shop([
      new Item('Aged Brie', 10, 50),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(50)
    expect(items[1].quality).toBe(50)
  })
})
