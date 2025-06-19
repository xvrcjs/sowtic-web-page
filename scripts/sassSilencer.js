/**
 * Custom Sass logger that mutes deprecation warnings originating from
 * src/styles/vendor/bootstrap/**  but keeps everything else.
 */
import path from "path";
import type { Logger } from "sass";

const vendorDir = path.resolve("src/styles/vendor/bootstrap");

const logger /** @type {Logger} */ = {
  warn(text, { span }) {
    const file = span?.url?.pathname || "";
    if (file.startsWith(vendorDir)) return; // 🚫 silence vendor warnings
    console.warn(text);                      // ✅ show project warnings
  },
  debug() { /* no-op */ },
};

export default logger;
