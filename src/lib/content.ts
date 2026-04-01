import { notion } from "./notion";
import { NotionToMarkdown } from "notion-to-md";

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPostContent(pageId: string) {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const md = n2m.toMarkdownString(mdBlocks);
  return md.parent;
}
