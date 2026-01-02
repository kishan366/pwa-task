"use client";
import { useEffect, useState } from "react";

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const year = new Date().getFullYear();

  // ✅ Calendarific API key applied directly
  const API_KEY = "x6U9qSK91W1pdQOvNwbMtu1ApSimDT4U";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=IN&year=${year}`
        );

        const data = await res.json();

        if (!data?.response?.holidays) {
          throw new Error("Failed to load events");
        }

        setEvents(data.response.holidays);
      } catch (err) {
        setError("Unable to load calendar events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [year]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        📅 {year} Events Calendar
      </h1>

      <p className="text-center text-gray-600 mb-8">
        National & Cultural Events (India)
      </p>

      {loading && (
        <p className="text-center text-gray-500">
          Loading events...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500">
          {error}
        </p>
      )}

      <div className="max-w-4xl mx-auto space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border p-4 flex justify-between items-center hover:shadow transition"
          >
            <div>
              <h2 className="font-semibold">
                {event.name}
              </h2>
              <p className="text-sm text-gray-600">
                {event.description || "Public event"}
              </p>
            </div>

            <div className="text-sm font-medium text-blue-600">
              {event.date.iso}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
