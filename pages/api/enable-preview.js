// Preview mode can technically be used to have
// development like behaviour of getStaticProps

export default (req, res) => {
  res.setPreviewData({});

  res.status(200).json({ name: "John Doe" });
};
