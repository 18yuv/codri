import admin from 'firebase-admin'

const verifyToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

export default verifyToken;