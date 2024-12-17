'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      weekStartsOn={1}
      classNames={{
        months: 'flex flex-col sm:flex-row sm:space-x-4  bg-[rgb(238,247,251)]',
        month: 'font-bold text-lg',
        caption:
          'flex justify-center relative items-center bg-primary py-3 text-white',
        caption_label: 'text-lg font-bold',
        nav: 'space-x-1 flex items-center',
        nav_button: 'h-7 w-7 bg-transparent p-0',
        nav_button_previous: 'absolute left-8',
        nav_button_next: 'absolute right-8',
        table: 'border-collapse mx-8 mb-8',
        head_row: 'flex gap-2',
        head_cell: 'text-black uppercase pt-5 w-8 font-semibold text-sm',
        row: 'flex w-full mt-2 gap-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-white hover:border hover:border-primary hover:text-primary'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected: cn(
          buttonVariants({ variant: 'outline' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100'
        ),
        day_today: 'font-semibold',
        day_outside:
          'day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn('h-4 w-4', className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn('h-4 w-4', className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
