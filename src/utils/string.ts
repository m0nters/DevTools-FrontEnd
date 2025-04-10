// Format a string as a valid URL slug
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w-]+/g, "") // Remove special characters
    .replace(/--+/g, "-") // Replace multiple dashes with a single dash
    .trim();
}

// Truncate text with ellipsis
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

/**
 * Why this function?
 *
 * If write like `return !text;` it will be true for `0`, `""`, `false`
 */
export function hasValue(text: any): boolean {
  return (
    text !== undefined &&
    text !== null &&
    (typeof text === "string" ? text.trim() !== "" : true)
  );
}
