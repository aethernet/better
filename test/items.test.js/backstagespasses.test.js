import { Shop, Item } from '../../src/gilded_rose'

// Note: We assume there's no other concert than TAFKAL80ETC as the legacy only test for this band

describe('_Backstage Passes_ items', () => {
  it('should increase quality -> 1 per day when concert is in more than 10 days', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
      new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
      new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).not.toBe(11)
    expect(items[1].quality).not.toBe(11)
    expect(items[2].quality).toBe(11)
  })

  it('should increase quality -> 2 per day when concert is in 6 to 10 days', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
      new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
      new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(12)
    expect(items[1].quality).not.toBe(12)
    expect(items[2].quality).not.toBe(12)
  })

  it('should increase quality -> 3 per day when concert is in 5 or less days', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
      new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
      new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).not.toBe(13)
    expect(items[1].quality).toBe(13)
    expect(items[2].quality).not.toBe(13)
  })

  it('should never increase quality over 50 (even when double/triple increase)', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 3, 48),
      new Item('Backstage passes to a TAFKAL80ETC concert', 12, 49),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(50)
    expect(items[1].quality).toBe(50)
    expect(items[1].quality).toBe(50)
  })

  it('should drop quality to 0 after the concert (sell by date has passed)', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(0)
  })
})
