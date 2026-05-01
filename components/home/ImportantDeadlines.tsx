import { importantDates } from "@/content/dates";
import { CalendarDays } from "lucide-react";

export function ImportantDeadlines() {
  return (
    <div id="important-deadlines-widget">
      <div className="widget-header flex items-center gap-2">
        <CalendarDays className="w-4 h-4" />
        <span>Important Deadlines</span>
      </div>
      <div className="widget-body">
        <ul className="space-y-3.5">
          {importantDates.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 pb-3.5 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-primary leading-snug">
                  {item.date}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {item.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
