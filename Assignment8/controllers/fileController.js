exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.status(200).json({
    message: "File uploaded successfully",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
};
