/**
 * Custom Sass logger  ─────────────────────────────────────────────────────────
 * - Silences deprecation warnings if they originate from `node_modules`
 * - For our own code (not in node_modules) it shows the warning normally.
 */
import type { Logger } from "sass";

const logger: Logger = {
  warn(text, { span }) {
    const file = span?.url?.toString() ?? "";

    // Ignore warnings whose source is inside node_modules
    if (file.includes("/node_modules/")) return;

    // Otherwise, print them to stderr
    console.warn(text);
  },
  debug() {
    /* no-op */
  },
};

export default logger;
