/**
 * Custom Sass logger that mutes deprecation warnings originating from
 * src/styles/vendor/bootstrap/**  but keeps everything else.
 */
import path from "path";

/** @typedef {import("sass").Logger} SassLogger */

const vendorDir = path.resolve("src/styles/vendor/bootstrap");

/** @type {SassLogger} */
const logger = {
  warn(text, { span }) {
    const file = span?.url?.pathname || "";
    if (file.startsWith(vendorDir)) return; // 🚫 silence vendor warnings
    console.warn(text);                      // ✅ show project warnings
  },
  debug() { /* no-op */ },
};

export default logger;
