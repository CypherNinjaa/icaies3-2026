import { announcements } from "@/content/dates";
import { Megaphone } from "lucide-react";

export function Announcements() {
  return (
    <div id="announcements-widget">
      <div className="widget-header flex items-center gap-2">
        <Megaphone className="w-4 h-4" />
        <span>Announcements</span>
      </div>
      <div className="widget-body">
        {announcements.map((announcement, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-accent text-lg leading-none mt-0.5">★</span>
            <p className="text-sm text-text-body leading-relaxed">
              {announcement}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
