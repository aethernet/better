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

  it('should update 30 times and be in predictable state', () => {
    const gildedRose = new Shop([
      new Item('Foo Bar', 3, 18),
      new Item('Aged Brie', 10, 5),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
      new Item('Conjured bar', 25, 18),
      new Item('Sulfuras, Hand of Ragnaros', 10, 80),
    ])

    for (let i = 0; i < 4; i += 1) {
      gildedRose.updateQuality()
    }
    const items5 = [...gildedRose.updateQuality()]

    // after 5 updates
    expect(items5[0].quality).toBe(10)
    expect(items5[0].sellIn).toBe(-2)
    expect(items5[1].quality).toBe(10)
    expect(items5[1].sellIn).toBe(5)
    expect(items5[2].quality).toBe(20)
    expect(items5[2].sellIn).toBe(5)
    expect(items5[3].quality).toBe(8)
    expect(items5[3].sellIn).toBe(20)
    expect(items5[4].quality).toBe(80)
    expect(items5[4].sellIn).toBe(10)

    for (let i = 5; i < 29; i += 1) {
      gildedRose.updateQuality()
    }
    const items30 = [...gildedRose.updateQuality()]

    // after 30 updates
    expect(items30[0].quality).toBe(0)
    expect(items30[0].sellIn).toBe(-27)
    expect(items30[1].quality).toBe(50)
    expect(items30[1].sellIn).toBe(-20)
    expect(items30[2].quality).toBe(0)
    expect(items30[2].sellIn).toBe(-20)
    expect(items30[3].quality).toBe(0)
    expect(items30[3].sellIn).toBe(-5)
    expect(items30[4].quality).toBe(80)
    expect(items30[4].sellIn).toBe(10)
  })
})
