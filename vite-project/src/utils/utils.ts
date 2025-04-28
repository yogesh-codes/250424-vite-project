/**
 * Shortens an email string to at most maxLength characters (default 20),
 * inserting "…" in the middle if it’s too long.
 * Always preserves the domain (the part after "@") and as much of the local‐part as will fit.
 *
 * @param email - The full email address to shorten.
 * @param maxLength - Maximum allowed length of the returned string (default 20).
 * @returns The possibly-truncated email.
 */
function shortenEmail(email: string, maxLength: number = 20): string {
    if (email.length <= maxLength) {
        return email;
    }

    const parts = email.split("@");
    if (parts.length !== 2) {
        // Not a valid email format – just truncate normally
        return email.slice(0, maxLength - 1) + "…";
    }

    const [local, domain] = parts;
    // Reserve for "@", domain, and ellipsis
    const available = maxLength - domain.length - 2;
    if (available <= 0) {
        // Not enough room for local-part + ellipsis, so just show “…@domain”
        return `…@${domain}`;
    }

    // Split available roughly in half for start/end of local-part
    const frontChars = Math.ceil(available / 2);
    const backChars = Math.floor(available / 2);

    const start = local.slice(0, frontChars);
    const end = local.slice(local.length - backChars);

    return `${start}…${end}@${domain}`;
}

// Examples:
console.log(shortenEmail("verylongusername@example.com"));
// → "veryl…e@example.com"

console.log(shortenEmail("short@ex.co"));
// → "short@ex.co"

console.log(shortenEmail("another.really.long.name@domain.com", 25));
// → "another.r…long.name@domain.com"

export { shortenEmail };
