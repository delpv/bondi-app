//parse price string to number
export const parsePrice = (rawPrice) => {
  if (!rawPrice) return 0;

  const lower = rawPrice.trim().toLowerCase();
  if (lower === "free") return 0;

  // remove currency symbols and convert to number
  const numericPart = rawPrice.replace(/[^\d.,]/g, "").replace(",", ".");
  const num = parseFloat(numericPart);

  return isNaN(num) ? 0 : num;
};
