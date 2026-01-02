"use client";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://newsdata.io/api/1/latest?apikey=pub_72df6f14ec284bec9ad32ca2ed962b44&country=in&language=en"
        );

        const data = await res.json();
        if (data.status !== "success") {
          throw new Error("Failed to load news");
        }

        setNews(data.results || []);
      } catch (err) {
        setError("Unable to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2">
          <h1 className="text-xl font-semibold">
            News
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {loading && (
          <p className="text-center text-gray-500">
            Loading latest headlines…
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden border hover:shadow-md transition"
            >
              {/* Image */}
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                />
              )}

              {/* Content */}
              <div className="p-4">
                {/* Source */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {item.source_id || "News"}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-semibold text-base leading-snug line-clamp-3">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {item.description || "Click to read full article"}
                </p>

                {/* Footer */}
                <div className="mt-4">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-sm text-blue-600 font-medium hover:underline"
                    >
                      Read full coverage →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
