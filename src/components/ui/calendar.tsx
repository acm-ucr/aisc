"use client";

import * as React from "react";
import { ChevronDownIcon, StepBack, StepForward } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import * as motion from "motion/react-client";

const slideUp = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
};

const slideDown = {
  hidden: { opacity: 0, y: -5 },
  show: { opacity: 1, y: 0 },
};
const transition = { duration: 0.3 };

export type GoogleEventProps = {
  start: { dateTime: string };
  end: { dateTime: string };
  location: string;
  description: string;
  summary: string;
};

export type EventProps = Partial<{
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

type CalendarDayCellProps = {
  date: Date;
  displayMonth: Date;
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

const CalendarDayCell = ({
  date,
  displayMonth,
  events,
  setCurrent,
}: CalendarDayCellProps) => {
  const today = new Date();
  const isToday =
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();

  const currentMonth = displayMonth.getMonth() === date.getMonth();

  const filteredEvents = events?.filter(({ start, end }) => {
    if (!start || !end) return false;
    const eventStartDate = new Date(start);
    const eventEndDate = new Date(end);

    eventStartDate.setHours(0, 0, 0, 0);
    eventEndDate.setHours(23, 59, 59, 999);

    return date >= eventStartDate && date <= eventEndDate;
  });

  return (
    <td className="w-full p-0 align-top">
      <motion.div
        variants={slideDown}
        transition={{ ...transition, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`${isToday ? "bg-aisc-blue" : currentMonth ? "bg-transparent" : "bg-aisc-black"} no-scrollbar flex max-h-[200px] min-h-[100px] flex-col items-end overflow-y-auto border-1 p-1 md:min-h-[150px] lg:min-h-[200px]`}
      >
        <p
          className={`${currentMonth ? "" : "opacity-80"} ${isToday && "font-bold text-white"} text-fit sticky top-0 m-1 rounded-xl bg-transparent px-1 text-center md:text-left md:text-xl`}
        >
          {date.getDate()}
        </p>

        {filteredEvents?.map(
          ({ title, start, end, location, description }, index) => {
            const startDate = new Date(start as string);
            if (
              startDate.getDate() === date.getDate() &&
              startDate.getMonth() === date.getMonth() &&
              startDate.getFullYear() === date.getFullYear()
            ) {
              return (
                <motion.div
                  key={index}
                  variants={slideUp}
                  transition={{ ...transition, delay: 0.2 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${isToday ? "bg-aisc-lightgray" : "bg-aisc-blue"} bghover:bg-opacity-100 font-aisc-alt mb-1 flex w-full cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 text-center font-medium transition hover:opacity-60`}
                  onClick={() =>
                    setCurrent({ title, start, end, location, description })
                  }
                >
                  <span className="my-auto w-full overflow-clip rounded-md bg-white text-xs text-black md:text-base">
                    {title}
                  </span>
                </motion.div>
              );
            }
            return null;
          },
        )}
      </motion.div>
    </td>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  formatters,
  components,
  events,
  setCurrent,
  ...props
}: CalendarProps) {
  console.log("Calendar events:", events);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "border-b-aisc-pink group/calendar w-3/4 border-b-2 p-0 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (weekday) =>
          weekday.toLocaleString("default", { weekday: "long" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-full max-w-7xl mx-auto"),
        months: cn("flex gap-4 flex-col md:flex-row relative"),
        month: cn("flex flex-col w-full gap-4"),
        nav: cn(
          "flex items-center gap-60 w-full absolute top-0 inset-x-0 justify-center scale-125",
        ),
        button_previous: cn(
          buttonVariants({ variant: "ghost" }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost" }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size) text-white font-aisc-alt",
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
        ),
        dropdown: cn("absolute bg-popover inset-0 opacity-0"),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-4xl"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
        ),
        table: "w-full border-collapse",
        weekdays: cn(
          "grid grid-cols-7 text-center text-sm font-bold rounded-t-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white",
        ),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-2xl select-none font-aisc-alt text-white",
        ),
        week: cn("flex w-full text-white"),
        week_number_header: cn("select-none w-(--cell-size)"),
        week_number: cn("text-[0.8rem] select-none text-muted-foreground"),
        day: cn("relative w-full h-full p-0 text-center"),
        range_start: cn("rounded-l-md bg-accent"),
        range_middle: cn("rounded-none"),
        range_end: cn("rounded-r-md bg-accent"),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-md",
        ),
        outside: cn(
          "text-muted-foreground text-aisc-black aria-selected:text-muted-foreground",
        ),
        disabled: cn("text-muted-foreground opacity-50"),
        hidden: cn("invisible"),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={cn(className)}
            {...props}
          />
        ),
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <StepBack
                className={cn("size-4 text-white", className)}
                {...props}
              />
            );
          }
          if (orientation === "right") {
            return (
              <StepForward
                className={cn("size-4 text-white", className)}
                {...props}
              />
            );
          }
          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        Day: ({ day }) => (
          <CalendarDayCell
            date={day.date}
            displayMonth={day.displayMonth}
            events={events}
            setCurrent={setCurrent}
          />
        ),
        ...components,
      }}
      {...props}
    />
  );
}

export { Calendar };
