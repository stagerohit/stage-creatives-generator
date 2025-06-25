import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";

interface ContentItem {
  contentType: string;
  title: string;
  thumbnailURL: string;
}

export function ContentList() {
  const [data, setData] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/contents")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 p-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-20 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center bg-white rounded-xl shadow hover:shadow-md transition-shadow overflow-hidden"
        >
          {item.thumbnailURL ? (
            <img
              src={item.thumbnailURL}
              alt={item.title}
              className="w-32 h-20 object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-32 h-20 bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0">
              No Image
            </div>
          )}
          <div className="p-4 flex flex-col justify-center">
            <div className="text-xs uppercase text-muted-foreground mb-1">{item.contentType}</div>
            <div className="font-semibold text-lg text-foreground">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 