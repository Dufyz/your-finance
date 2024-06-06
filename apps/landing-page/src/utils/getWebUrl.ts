export default function getWebUrl() {
  const env = String(process.env.NEXT_WEB_URL!);
  return env;
}
