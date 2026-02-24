export function CustomCard({
  title,
  description,
  icon: Icon,
  showAccent = true,
}: {
  title: string;
  description: string;
  icon: any;
  showAccent?: boolean;
}) {
  return (
    <div
      className="group relative rounded-xl border border-border/40 
                 bg-gradient-to-br from-card via-card to-muted/40 
                 p-7 shadow-lg hover:shadow-2xl 
                 backdrop-blur-xl transition-all duration-500 
                 cursor-pointer"
    >
      {/* Soft Glow Layer */}
      <div
        className="absolute inset-0 rounded-xl 
                      bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10 
                      opacity-0 group-hover:opacity-100 
                      transition duration-400"
      />

      {/* Subtle Inner Highlight */}
      <div
        className="absolute inset-[1px] rounded-xl 
                      bg-gradient-to-b from-white/5 to-transparent 
                      pointer-events-none"
      />

      <div className="relative flex flex-col justify-between h-full space-y-6">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl 
                        bg-muted/60 border border-border/50 
                        flex items-center justify-center 
                        group-hover:border-primary/40 
                        transition-all duration-300"
        >
          <Icon
            className="h-6 w-6 text-primary 
                           group-hover:scale-110 
                           transition-transform duration-300"
          />
        </div>

        {/* Text */}
        <div>
          <h3
            className="text-lg font-semibold tracking-tight mb-2 
                         group-hover:text-primary"
          >
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom Accent */}
        {showAccent && (
          <div className="flex items-center justify-between pt-4">
            <div
              className="h-[2px] w-10 bg-primary/40 rounded-full 
                          group-hover:w-24 transition-all duration-500"
            />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              AI Powered
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
