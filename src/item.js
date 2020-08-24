/**
   * Item Class - Do not touch
   * @param {Item} item - Item to update
   * @returns {Item} - Updated item
   * @author Goblin in the corner
   */
export default class Item {
  /**
   * Make an Item
   * @param {string} name - Name of Item
   * @param {number} sellIn - Number of Update (days) to sell the Item
   * @param {number} quality - Item Quality (0-50 or 80)
   */
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}
