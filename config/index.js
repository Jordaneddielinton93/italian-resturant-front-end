const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : "https://italianbowls.netlify.app";
// if in production use there server else use local host
