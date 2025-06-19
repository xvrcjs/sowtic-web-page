/**
 * Custom Sass logger
 * - Silences warnings originating from node_modules.
 * - Prints other warnings normally.
 */
import type { Logger } from "sass";

const logger: Logger = {
  warn(text, { span }) {
    const file = span?.url?.toString() ?? "";
    if (file.includes("/node_modules/")) return;
    console.warn(text);
  },
  debug() {
    // no-op
  },
};

export default logger;
