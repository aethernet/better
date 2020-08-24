export default class Tools {
  /** Bound quality between 0 & 50
   * @param {Item} item - Item to limit
   * @returns {Item} - Bounded Item
  */
  static qualityBounds(quality) {
    if (quality < 0) return 0
    if (quality > 50) return 50
    return quality
  }
}
