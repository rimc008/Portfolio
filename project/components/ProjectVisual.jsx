"use client";

export default function ProjectVisual({ type }) {
  if (type === "yojanaai") return <YojanaAIVisual />;
  if (type === "ragenius") return <RAGeniusVisual />;
  if (type === "ecommerce") return <EcommerceVisual />;
  return <DefaultVisual />;
}

/* ─── YojanaAI — Government Scheme Discovery ─── */
function YojanaAIVisual() {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden border-b border-border bg-gradient-to-br from-card to-background lg:border-b-0 lg:border-r">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cocoa-700/15 blur-[60px]" />

      <div className="relative flex h-full flex-col gap-3 p-6">
        {/* Chat query */}
        <div className="ml-auto max-w-[75%] rounded-lg rounded-br-sm bg-cocoa-700/15 px-3 py-2 text-xs text-cocoa-600">
          What schemes are available for farmers?
        </div>

        {/* AI response */}
        <div className="max-w-[85%] space-y-2">
          <div className="rounded-lg rounded-bl-sm border border-border bg-card/80 px-3 py-2.5">
            <div className="mb-1.5 text-xs font-semibold text-cocoa-700">
              Matching Schemes
            </div>
            <div className="space-y-1.5">
              {["PM-KISAN", "Pradhan Mantri Fasal Bima", "Kisan Credit Card"].map(
                (s, i) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 rounded border border-border/60 bg-secondary/30 px-2 py-1.5"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-cocoa-700" />
                    <span className="text-xs text-muted-foreground">{s}</span>
                    <span className="ml-auto font-mono text-[10px] text-cocoa-700/60">
                      {(0.94 - i * 0.08).toFixed(2)}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Pipeline indicators */}
        <div className="mt-auto flex items-center gap-2 font-mono text-[10px] text-muted-foreground/60">
          <span className="rounded bg-secondary/50 px-1.5 py-0.5">embed</span>
          <span>→</span>
          <span className="rounded bg-secondary/50 px-1.5 py-0.5">qdrant</span>
          <span>→</span>
          <span className="rounded bg-secondary/50 px-1.5 py-0.5">rank</span>
        </div>
      </div>
    </div>
  );
}

/* ─── RAGeniusAI — RAG Learning Workspace ─── */
function RAGeniusVisual() {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden border-b border-border bg-gradient-to-br from-card to-background lg:border-b-0 lg:border-r">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-0 bottom-0 h-32 w-32 rounded-full bg-cocoa-500/15 blur-[50px]" />

      <div className="relative flex h-full flex-col gap-3 p-6">
        {/* PDF document mockup */}
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2">
          <div className="flex h-8 w-6 items-center justify-center rounded bg-red-500/20 text-[8px] font-bold text-red-400">
            PDF
          </div>
          <div className="flex-1">
            <div className="h-1.5 w-24 rounded-full bg-muted-foreground/30" />
            <div className="mt-1 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
          </div>
          <span className="font-mono text-[10px] text-cocoa-700/60">
            processed
          </span>
        </div>

        {/* Chunks + embeddings */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex-1 rounded border border-border/60 bg-secondary/30 p-2"
            >
              <div className="space-y-1">
                <div className="h-1 w-full rounded-full bg-cocoa-700/40" />
                <div className="h-1 w-2/3 rounded-full bg-cocoa-700/25" />
              </div>
            </div>
          ))}
        </div>

        {/* AI interaction */}
        <div className="rounded-lg border border-border bg-card/80 p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-cocoa-700/30" />
            <span className="text-xs font-semibold text-cocoa-700">
              Quiz generated
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="rounded border border-border/50 bg-secondary/20 px-2 py-1.5 text-xs text-muted-foreground">
              Q: What is the main concept of...?
            </div>
            <div className="flex gap-1.5">
              {["A", "B", "C", "D"].map((opt, i) => (
                <div
                  key={opt}
                  className={`flex-1 rounded border px-2 py-1 text-center text-xs ${
                    i === 1
                      ? "border-cocoa-700/40 bg-cocoa-700/10 text-cocoa-700"
                      : "border-border/50 bg-secondary/20 text-muted-foreground"
                  }`}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Ecommerce Application ─── */
function EcommerceVisual() {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden border-b border-border bg-gradient-to-br from-card to-background lg:border-b-0 lg:border-r">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute right-1/3 top-0 h-32 w-32 rounded-full bg-cocoa-700/10 blur-[50px]" />

      <div className="relative flex h-full flex-col gap-3 p-6">
        {/* Store header */}
        <div className="flex items-center justify-between rounded-lg border border-border bg-card/60 px-3 py-2">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500/60" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
            <div className="h-2 w-2 rounded-full bg-green-500/60" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className="text-cocoa-700">🛒</span> 3
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-border/60 bg-secondary/30 p-2.5"
            >
              <div className="mb-2 h-12 rounded bg-gradient-to-br from-cocoa-700/10 to-cocoa-500/5" />
              <div className="h-1.5 w-full rounded-full bg-muted-foreground/25" />
              <div className="mt-1 h-1.5 w-2/3 rounded-full bg-muted-foreground/15" />
              <div className="mt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-cocoa-700">
                  ₹{(i * 499).toLocaleString()}
                </span>
                <div className="h-4 w-4 rounded border border-border" />
              </div>
            </div>
          ))}
        </div>

        {/* Payment flow indicator */}
        <div className="mt-auto flex items-center gap-2 font-mono text-[10px] text-muted-foreground/60">
          <span className="rounded bg-secondary/50 px-1.5 py-0.5">cart</span>
          <span>→</span>
          <span className="rounded bg-secondary/50 px-1.5 py-0.5">auth</span>
          <span>→</span>
          <span className="rounded bg-secondary/50 px-1.5 py-0.5">razorpay</span>
        </div>
      </div>
    </div>
  );
}

function DefaultVisual() {
  return (
    <div className="flex h-full min-h-[280px] items-center justify-center border-b border-border bg-card/40 lg:border-b-0 lg:border-r">
      <span className="font-mono text-sm text-muted-foreground">Project</span>
    </div>
  );
}
