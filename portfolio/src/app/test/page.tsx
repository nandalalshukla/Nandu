import { Client } from "@notionhq/client";

export default async function TestPage() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  // 1. Get database posts
  const db = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  const pageId = db.results[0].id;

  // 2. Get content blocks
  const blocks = await notion.blocks.children.list({
    block_id: pageId,
  });

  return (
    <div>
      <h1>Blocks Test</h1>
      <pre>{JSON.stringify(blocks.results, null, 2)}</pre>
    </div>
  );
}
