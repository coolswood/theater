/**
 * Date and year helper utilities for dynamic site content.
 */

export const CURRENT_YEAR = new Date().getFullYear();

export function getCurrentYear(): number {
  return new Date().getFullYear();
}
