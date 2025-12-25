/**
 * Parse price string to number
 * @param {string} rawPrice - Price input (e.g., "Free", "€10", "$5.50")
 * @returns {number} - Parsed price as number
 */
export const parsePrice = (rawPrice) => {
    if (!rawPrice) return 0;

    const lower = rawPrice.trim().toLowerCase();
    if (lower === "free") return 0;

    // Remove currency symbols and convert to number
    const numericPart = rawPrice.replace(/[^\d.,]/g, "").replace(",", ".");
    const num = parseFloat(numericPart);

    return isNaN(num) ? 0 : num;
};