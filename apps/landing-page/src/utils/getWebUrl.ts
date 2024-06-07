export default function getWebUrl() {
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || "";

  return baseUrl;
}
