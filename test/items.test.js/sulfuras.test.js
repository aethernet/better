import { Shop, Item } from '../../src/gilded_rose'

// Note: We assume there's only one Sulfuras, even if not explicit in Specs.
// Megacy code only handle this specific Sulfuras

describe('_Sulfuras_ items', () => {
  it('should never change quality', () => {
    const gildedRose = new Shop([
      new Item('Sulfuras, Hand of Ragnaros', 10, 80),
      new Item('Sulfuras, Hand of Ragnaros', -5, 80),
      new Item('Sulfuras, Hand of Ragnaros', 10, 80),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(80)
    expect(items[1].quality).toBe(80)
    expect(items[2].quality).toBe(80)
  })

  it('should never change sell by date', () => {
    const gildedRose = new Shop([
      new Item('Sulfuras, Hand of Ragnaros', 10, 80),
      new Item('Sulfuras, Hand of Ragnaros', 10, 70),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toBe(10)
    expect(items[1].sellIn).toBe(10)
  })
})
