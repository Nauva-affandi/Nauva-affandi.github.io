export async function GET(target: string, level: string) {
  const data = await import(`../databases/${target}/${level}.json`);
  return data.default;
}