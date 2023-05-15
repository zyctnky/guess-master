export { default } from "next-auth/middleware";

export const config = { matcher: ["/start/:path*", "/play/:path*", "/words/:path*"] };
