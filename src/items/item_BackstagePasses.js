import Tools from '../tools'

/** Static Backstage Passes Update Class */
export default class BackstagePassesUpdate {
  /** Update Backstage Passes Item
   * @param {Item} item - Item to update
   * @returns {Item} - Updated Item
   */
  static update({ name, sellIn, quality }) {
    return {
      name,
      sellIn: sellIn - 1,
      quality: Tools.qualityBounds(BackstagePassesUpdate.computeQuality({ sellIn, quality })),
    }
  }

  /** Compute quality for Aged Brie Item
   * @param {Item} item - Item to update
   * @returns {number} - Updated quality
   */
  static computeQuality({ sellIn, quality }) {
    if (sellIn < 0) return 0
    if (sellIn < 6) return quality + 3
    if (sellIn < 11) return quality + 2
    return quality + 1
  }
}
