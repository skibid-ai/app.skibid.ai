import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * Function for merging class names utilizing Tailwind Merge & Clsx (utility for constructing className strings conditionally)
 *
 * @param {string} inputs - class names for a given component
 * @returns
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
