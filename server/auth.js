import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, "secretKey", { expiresIn: "1h" });
  return token;
};

export default generateToken;
