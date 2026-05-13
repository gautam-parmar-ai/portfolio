export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

export function minLength(value, min) {
  return String(value || "").trim().length >= min;
}
