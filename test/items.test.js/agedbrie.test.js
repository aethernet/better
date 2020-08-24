import { Shop, Item } from '../../src/gilded_rose'

// Note: after Sell By Date, quality double increase.
// Even if this is not explicit in Spec, we assume it's the correct behaviour

describe('_Aged Brie_ items', () => {
  it('should increase quality (instead of decrease)', () => {
    const gildedRose = new Shop([
      new Item('Aged Brie', 10, 5),
      new Item('Aged Brie', -1, 8),
      new Item('Aged Brie', -5, 50),
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(6)
    expect(items[1].quality).toBe(10)
    expect(items[2].quality).toBe(50)
  })
})
