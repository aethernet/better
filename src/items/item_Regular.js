import Tools from '../tools'

/** Static Regular Item Update Class */
export default class RegularItemUpdate {
  /** Updates Regular Item
   * @param {Item} item - Item to update
   * @returns {Item} - Updated Item
   */
  static update({ name, sellIn, quality }) {
    return {
      name,
      sellIn: sellIn - 1,
      quality: Tools.qualityBounds(sellIn > 1 ? quality - 1 : quality - 2),
    }
  }
}
