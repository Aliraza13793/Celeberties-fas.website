import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  color: string;
  description?: string;
  postCount?: number;
}

export default function CategoryCard({
  name,
  slug,
  color,
  description,
  postCount,
}: CategoryCardProps) {
  return (
    <Link href={`/${slug}`}>
      <div
        className="group relative overflow-hidden rounded-xl p-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex items-center justify-center min-h-[80px]"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
        <div className="relative z-10 text-center">
          <h3 className="text-sm font-bold">{name}</h3>
          {description && (
            <p className="mt-2 text-sm text-white/80 line-clamp-2">{description}</p>
          )}
          {postCount !== undefined && (
            <p className="mt-3 text-xs text-white/60">
              {postCount} {postCount === 1 ? "article" : "articles"}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
