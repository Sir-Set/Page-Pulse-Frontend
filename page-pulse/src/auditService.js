import fetch from "node-fetch";
import cache from "./cache.js";

export default async function auditService(url) {
  const cached = cache.get(url);
  if (cached) return { fromCache: true, ...cached };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    const text = await response.text();
    const result = { status: response.status, length: text.length };
    cache.set(url, result);
    return result;
  } finally {
    clearTimeout(timeout);
  }
}