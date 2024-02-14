import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const comparePassword = async (password: string) => {
  return await bcrypt.compare(password, import.meta.env.PASSWORD_SALT);
};

export const getToken = () => {
  return jwt.sign({}, import.meta.env.JWT_SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token?: string) => {
  if (!token) return false;
  try {
    return !!jwt.verify(token, import.meta.env.JWT_SECRET);
  } catch (err) {
    return false;
  }
};

export const isValidURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const revalidateSlug = (slug: string, requestURL: string) => {
  return fetch(`${requestURL}/${slug}`, {
    headers: { "x-prerender-revalidate": import.meta.env.BYPASS_TOKEN },
  });
};
