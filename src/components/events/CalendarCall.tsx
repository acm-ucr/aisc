"use client"

import React from "react"
import { Calendar } from "@/components/ui/calendar"

const CalendarCall = () => {

 const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex justify-center bg-aisc-black py-15">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-2xl w-3/4"
      />
    </div>
  )
}

export default CalendarCall