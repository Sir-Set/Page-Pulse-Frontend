import express from "express";
import auditService from "./auditService.js";
import rateLimiter from "./rateLimiter.js";

const router = express.Router();

router.post("/", rateLimiter, async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url || !/^https?:\/\//.test(url)) {
      return res.status(400).json({ error: "Invalid URL" });
    }
    const result = await auditService(url);
    res.json({ requestId: req.id, result });
  } catch (err) {
    next(err);
  }
});

export default router;
