export default function TraceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 trace-grid opacity-60" />
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-violet/20 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
    </div>
  );
}