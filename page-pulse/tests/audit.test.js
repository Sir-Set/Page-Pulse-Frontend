import auditService from "../src/auditService.js";

test("valid URL returns status and length", async () => {
  const result = await auditService("https://example.com");
  expect(result.status).toBe(200);
  expect(result.length).toBeGreaterThan(0);
});

test("cache works", async () => {
  const first = await auditService("https://example.com");
  const second = await auditService("https://example.com");
  expect(second.fromCache).toBe(true);
});
