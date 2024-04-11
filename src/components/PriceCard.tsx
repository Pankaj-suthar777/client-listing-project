import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PriceCard = ({ price }: { price: number }) => {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="w-full">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8">
        <div className="flex items-baseline text-gray-900">
          <span className="ms-1 text-3xl font-normal text-gray-900">
            ${price}
          </span>
        </div>
        <div className="grid mb-5 mt-8 gap-2 grid-cols-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                  "justify-center items-center"
                )}
              >
                <i className="ri-calendar-line mr-2 h-4 w-4"></i>
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                  "justify-center items-center"
                )}
              >
                <i className="ri-calendar-line mr-2 h-4 w-4"></i>
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <div className="col-span-2 mt-5">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-primaryRed hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-200   font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center outline-none "
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
