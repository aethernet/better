export default class ItemUpdate {
  static update(item) {
    // Sulfuras are never updated
    if (item.name.includes('Sulfuras')) return item

    // All other type age by 1 per update
    const sellInDecreasedItem = { ...item, sellIn: item.sellIn - 1 }

    // Update Quality for specialty
    if (item.name.includes('Backstage passes')) return ItemUpdate.updateBackstagePasses(sellInDecreasedItem)
    if (item.name.includes('Aged Brie')) return ItemUpdate.updateAgedBrie(sellInDecreasedItem)
    // add new aging item type here

    // Update Regular
    return ItemUpdate.updateRegular(sellInDecreasedItem)
  }

  /** Bound quality between 0 & 50
   * @param {Item} item - Item to limit
   * @returns {Item} - Bounded Item
  */
  static qualityBounds(quality) {
    if (quality < 0) return 0
    if (quality > 50) return 50
    return quality
  }

  /** Update quality for regular Item
   * @param {Item} item - Item to update
   * @returns {Item} - Updated Item
  */
  static updateRegular(item) {
    return {
      ...item,
      quality: ItemUpdate.qualityBounds(item.sellIn > 1 ? item.quality - 1 : item.quality - 2),
    }
  }

  /** Update quality for Aged Brie Item
   * @param {Item} item - Item to update
   * @returns {Item} - Updated Item
  */
  static updateAgedBrie(item) {
    return {
      ...item,
      quality: ItemUpdate.qualityBounds(item.sellIn > 1 ? item.quality + 1 : item.quality + 2),
    }
  }

  /** Update quality for Backstage Passes
   * @param {Item} item - Item to update
   * @returns {Item} - Updated Item
  */
  static updateBackstagePasses(item) {
    let newQuality = item.quality

    if (item.sellIn < 0) newQuality = 0
    else if (item.sellIn < 6) newQuality = item.quality + 3
    else if (item.sellIn < 11) newQuality = item.quality + 2
    else newQuality = item.quality + 1

    return {
      ...item,
      quality: ItemUpdate.qualityBounds(newQuality),
    }
  }
}
