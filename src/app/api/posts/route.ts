import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const POSTS_FILE = path.join(process.cwd(), "src/lib/custom-posts.json");

interface CustomPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "published" | "draft";
  category: string;
  featured: boolean;
  createdAt: string;
}

function readPosts(): CustomPost[] {
  try {
    if (fs.existsSync(POSTS_FILE)) {
      const data = fs.readFileSync(POSTS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch {}
  return [];
}

function writePosts(posts: CustomPost[]) {
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
}

export async function GET() {
  const posts = readPosts();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const posts = readPosts();

  const newPost: CustomPost = {
    id: Date.now().toString(),
    title: body.title,
    slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    excerpt: body.excerpt || "",
    content: body.content || "",
    status: body.status || "draft",
    category: body.category || "celebrity-news",
    featured: body.featured || false,
    createdAt: new Date().toISOString().split("T")[0],
  };

  posts.push(newPost);
  writePosts(posts);

  return NextResponse.json({ success: true, post: newPost });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID required" }, { status: 400 });
  }

  const posts = readPosts();
  const filtered = posts.filter((p) => p.id !== id);
  writePosts(filtered);

  return NextResponse.json({ success: true });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const posts = readPosts();

  const index = posts.findIndex((p) => p.id === body.id);
  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  posts[index] = { ...posts[index], ...body };
  writePosts(posts);

  return NextResponse.json({ success: true, post: posts[index] });
}
