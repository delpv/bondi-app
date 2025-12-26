import Parse from "parse";

/**
 * Formats a date for activity display
 * @param {Date|string} date - The date to format
 * @returns {string} - Formatted date or "TBD" if invalid
 */
export const formatActivityDate = (date) => {
  if (!date) return "TBD";
  return new Date(date).toLocaleString();
};

/**
 * Extracts year from date for "Member since" display
 * @param {Date|string} date - The date to extract year from
 * @returns {string} - Year or "Unknown" if invalid
 */
export const formatMemberSince = (date) => {
  if (!date) return "Unknown";
  return new Date(date).getFullYear();
};
