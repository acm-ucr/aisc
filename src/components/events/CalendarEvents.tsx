"use client";

import {
  Calendar,
  EventProps,
  GoogleEventProps,
} from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

//Temporary Events for show
const today = new Date();
const yesterday = new Date();
const future = new Date();
yesterday.setDate(yesterday.getDate() - 1);
future.setDate(future.getDate() + 15);

const dummyEvents: EventProps[] = [
  {
    title: "Test Event",
    start: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      10,
      0,
      0,
    ).toISOString(),
    end: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      11,
      0,
      0,
    ).toISOString(),
    location: "UCR Campus",
    description: "This is just a test event",
  },
  {
    title: "Event Before",
    start: new Date(
      yesterday.getFullYear(),
      yesterday.getMonth(),
      yesterday.getDate(),
      0,
      0,
      0,
    ).toISOString(),
    end: new Date(
      yesterday.getFullYear(),
      yesterday.getMonth(),
      yesterday.getDate(),
      11,
      0,
      0,
    ).toISOString(),
    location: "UCR Campus",
    description: "This is just a test event",
  },
  {
    title: "Future Event",
    start: new Date(
      future.getFullYear(),
      future.getMonth(),
      future.getDate(),
      14,
      0,
      0,
    ).toISOString(),
    end: new Date(
      future.getFullYear(),
      future.getMonth(),
      future.getDate(),
      15,
      0,
      0,
    ).toISOString(),
    location: "UCR Campus",
    description: "This is a future test event",
  },
];

const Events = () => {
  const [current, setCurrent] = useState<EventProps>({});
  const today = new Date();
  const timeMin = new Date(
    today.getTime() - 60 * 60 * 24 * 7 * 5 * 1000,
  ).toISOString();
  const timeMax = new Date(
    today.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
  ).toISOString();
  today.setHours(0, 0, 0, 0);

  const { isPending, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
            timeMin,
          )}&timeMax=${encodeURIComponent(timeMax)}`).then((res) => res.json());

      console.log("Raw Google Calendar API response:", response);

      const events = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title: summary,
        }),
      );
      return events;
    },
  });
  console.log("Fetched calendar events:", data);
  return (
    <>
      {!isPending && (
        <Dialog
          open={Object.keys(current).length > 0}
          onOpenChange={() => setCurrent({})}
        >
          <DialogContent className="border-aisc-pink border-4 p-8">
            <DialogHeader>
              <DialogTitle>
                <p className="text-4xl font-medium">{current.title}</p>
                <p className="font-openSans my-2 flex flex-col gap-1 text-base">
                  <p>Location: {current.location}</p>
                  Time:{" "}
                  {new Date(current.start as string).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    },
                  )}{" "}
                  to{" "}
                  {new Date(current.end as string).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </DialogTitle>
              <DialogDescription className="font-aisc-alt relative text-black">
                {current.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
      <div className="bg-aisc-black mx-auto my-4 flex w-full pt-4 pb-12">
        <Calendar
          mode="single"
          selected={new Date()}
          className="mx-auto w-full"
          events={dummyEvents} //replace this with data from fetching after review
          setCurrent={setCurrent}
        />
      </div>
    </>
  );
};

export default Events;
