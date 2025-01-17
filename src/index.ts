/**
 * Convert a 15-character Salesforce ID to its 18-character case-safe version
 * @param sfid15 The 15-character Salesforce ID
 * @returns The 18-character case-safe ID
 */
export function to18(sfid15: string): string {
  if (!sfid15) {
    throw new Error("Input ID cannot be empty");
  }

  if (sfid15.length === 18) {
    return sfid15;
  }

  if (sfid15.length !== 15) {
    throw new Error("Input ID must be 15 characters");
  }

  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345";
  let suffix = "";

  // Process each group of 5 characters
  for (let i = 0; i < 3; i++) {
    let flags = 0;

    // Check each character in the group for uppercase
    for (let j = 0; j < 5; j++) {
      const c = sfid15.charAt(i * 5 + j);
      // If character is uppercase, set corresponding bit
      if (c >= "A" && c <= "Z") {
        flags += 1 << j; // Bits are set from right to left
      }
    }

    suffix += CHARS[flags];
  }

  return sfid15 + suffix;
}

/**
 * Convert an 18-character Salesforce ID to its 15-character version
 * @param sfid18 The 18-character Salesforce ID
 * @returns The 15-character ID
 */
export function to15(sfid18: string): string {
  if (!sfid18) {
    throw new Error("Input ID cannot be empty");
  }

  if (sfid18.length === 15) {
    return sfid18;
  }

  if (sfid18.length !== 18) {
    throw new Error("Input ID must be 18 characters");
  }

  return sfid18.substring(0, 15);
}
