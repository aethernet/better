/** Static Sulfuras Update Class */
export default class RegularItemUpdate {
  /** Updates Sulfuras Item
   * @description Sulfuras are Legendary items and never change quality or Sell By Date
   * @param {Item} item - Item to update
   * @returns {Item} - Same Item
   */
  static update(item) {
    return {
      ...item,
    }
  }
}
