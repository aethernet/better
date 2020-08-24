import Tools from '../tools'

/** Static Conjured Item Update Class */
export default class ConjuredItemUpdate {
  /** Updates Conjured Item
   * @param {Item} item - Item to update
   * @returns {Item} - Updated Item
   */
  static update({ name, sellIn, quality }) {
    return {
      name,
      sellIn: sellIn - 1,
      quality: Tools.qualityBounds(sellIn > 1 ? quality - 2 : quality - 4),
    }
  }
}
