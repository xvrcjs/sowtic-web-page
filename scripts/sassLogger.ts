/**
 * Registrador personalizado de Sass.
 * - Silencia advertencias que provienen de `node_modules`.
 * - Muestra el resto de advertencias de forma normal.
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
