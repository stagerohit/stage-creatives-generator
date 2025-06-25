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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-64 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data.map((item, idx) => (
        <Card key={idx} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          {item.thumbnailURL ? (
            <img
              src={item.thumbnailURL}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-muted flex items-center justify-center text-muted-foreground">
              No Image
            </div>
          )}
          <CardContent className="p-4">
            <div className="text-xs uppercase text-muted-foreground mb-1">{item.contentType}</div>
            <div className="font-semibold text-lg text-foreground mb-1">{item.title}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 