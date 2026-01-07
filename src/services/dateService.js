import Parse from "parse";

//formats a date for activity display

export const formatActivityDate = (date) => {
  if (!date) return "TBD";
  return new Date(date).toLocaleString();
};

//extracts year from date for "Member since" display

export const formatMemberSince = (date) => {
  if (!date) return "Unknown";
  return new Date(date).getFullYear();
};
