export async function callAiTool(tool: string, text: string): Promise<string> {
  const res = await fetch('/api/ai-tool', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, text }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? 'Request failed');
  return data.output as string;
}
