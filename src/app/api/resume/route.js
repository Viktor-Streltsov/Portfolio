import { readFile } from "fs/promises";
import * as path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "src/app/contact/resume/resume.pdf"
  );

  const pdf = await readFile(filePath);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}

