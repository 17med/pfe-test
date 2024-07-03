import jwt from "jsonwebtoken";

function createtoken(payload, expiresIn = "10h") {
  const secretKey = process.env.SECRET_KEY;
  console.log(secretKey, payload, expiresIn);
  return jwt.sign(payload, secretKey, { expiresIn });
}
function verifyJWT(token) {
  const secretKey = process.env.SECRET_KEY;
  try {
    const decoded = jwt.verify(token, secretKey);
    return { valid: true, expired: false, decoded };
  } catch (err) {
    return {
      valid: false,
      expired: err.message.includes("jwt expired"),
      decoded: null,
    };
  }
}
function isadmin(token) {
  try {
    const { decoded } = verifyJWT(token);
    return decoded.isadmin;
  } catch (err) {
    return false;
  }
}
export { createtoken, verifyJWT, isadmin };
