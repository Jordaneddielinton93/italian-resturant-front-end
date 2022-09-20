const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : "https://italian-resturant-front-end.vercel.app/";
// if in production use there server else use local host
