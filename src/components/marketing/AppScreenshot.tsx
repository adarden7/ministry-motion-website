import Image from 'next/image';

/**
 * Presents a real product screenshot inside a browser-window frame so app
 * captures read as polished product imagery. Theme-aware (light/dark).
 * Source images are 2x captures (2880x1800) served responsively by next/image.
 */
export function AppScreenshot({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="not-prose">
      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-violet-500/10 ring-1 ring-black/5 dark:ring-white/10">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-muted/60">
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-amber-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-muted-foreground">app.ministrymotion.com</span>
        </div>
        <Image
          src={src}
          alt={alt}
          width={2880}
          height={1800}
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="w-full h-auto"
          priority={priority}
        />
      </div>
      {caption && <figcaption className="mt-3 text-center text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}
