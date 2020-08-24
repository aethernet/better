import Tools from '../tools'

export default class AgedBrieItemUpdate {
  /** Update quality for Aged Brie Item
     * @param {Item} item - Item to update
     * @returns {Item} - Updated Item
     */
  static update({ name, sellIn, quality }) {
    return {
      name,
      sellIn: sellIn - 1,
      quality: Tools.qualityBounds(sellIn > 1 ? quality + 1 : quality + 2),
    }
  }
}
