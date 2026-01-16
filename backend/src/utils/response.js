function ok(res, data, message) {
  return res.json({ success: true, message, data });
}

function created(res, data, message) {
  return res.status(201).json({ success: true, message, data });
}

module.exports = { ok, created };
