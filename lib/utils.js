/**
 * Utility functions for the application
 */

/**
 * Conditionally join class names together
 * This is a common utility function used in React projects to conditionally apply CSS classes
 * @param {...string} classes - Class names to be joined
 * @returns {string} - Joined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
