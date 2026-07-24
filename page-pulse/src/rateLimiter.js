const limits = new Map();
const WINDOW = 60000; // 1 min
const MAX_REQ = 10;

export default function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  if (!limits.has(ip)) limits.set(ip, []);
  const timestamps = limits.get(ip).filter(t => now - t < WINDOW);
  timestamps.push(now);
  limits.set(ip, timestamps);

  if (timestamps.length > MAX_REQ) {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }
  next();
}
