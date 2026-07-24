const store = new Map();
const WINDOW = process.env.CACHE_WINDOW || 60000; // 1 min

export default {
  get(url) {
    const entry = store.get(url);
    if (entry && Date.now() - entry.timestamp < WINDOW) {
      return entry.data;
    }
    return null;
  },
  set(url, data) {
    store.set(url, { data, timestamp: Date.now() });
  }
};
