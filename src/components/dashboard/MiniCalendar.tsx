const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

const WEEKS: (number | null)[][] = [
  [29, 30, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
];

const inMonth = (w: number, d: number | null) => {
  if (d === null) return true;
  if (w === 0 && d > 20) return false;
  if (w === 4 && d < 20) return false;
  return true;
};

export default function MiniCalendar({ today = 21 }: { today?: number }) {
  return (
    <div>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((d, i) => (
          <span key={i} className="text-[11px] font-medium text-white/35">
            {d}
          </span>
        ))}
        {WEEKS.map((week, wi) =>
          week.map((d, di) => {
            const isToday = d === today && wi === 3;
            const dim = !inMonth(wi, d);
            return (
              <div key={`${wi}-${di}`} className="flex items-center justify-center py-0.5">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs ${
                    isToday
                      ? "brand-gradient font-bold text-white shadow-md shadow-violet-500/30"
                      : dim
                      ? "text-white/20"
                      : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  {d}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
