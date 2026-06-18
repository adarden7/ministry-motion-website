import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import type { Heading } from './headings';
import { nodeToText } from './headings';
import { ChartFigure, Callout, type ChartData } from './ArticleVisuals';

const proseClasses = `prose prose-invert max-w-none
  prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
  prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5
  prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
  prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:text-[1.075rem] prose-p:mb-6
  prose-a:text-violet-400 prose-a:font-medium prose-a:underline prose-a:decoration-violet-500/40 prose-a:underline-offset-2 hover:prose-a:text-violet-300
  prose-strong:text-white prose-strong:font-semibold
  prose-ul:text-slate-300 prose-ol:text-slate-300 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-li:leading-relaxed
  prose-li:marker:text-violet-400
  prose-hr:border-white/10 prose-hr:my-12
  prose-code:text-violet-300 prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
  prose-pre:bg-slate-900 prose-pre:border prose-pre:border-white/10
  [&>p:first-of-type]:text-xl [&>p:first-of-type]:leading-[1.7] [&>p:first-of-type]:text-slate-200`;

export function ArticleBody({ content, headings }: { content: string; headings: Heading[] }) {
  // Map source line -> heading id so rendered headings get the exact same
  // anchors as the Table of Contents, with no render-time mutation.
  const idByLine = new Map(headings.map((h) => [h.line, h.id]));
  const lineId = (node: unknown): string | undefined => {
    const line = (node as { position?: { start?: { line?: number } } })?.position?.start?.line;
    return line ? idByLine.get(line) : undefined;
  };

  const components: Components = {
    h2: ({ node, children }) => (
      <h2 id={lineId(node)} className="scroll-mt-24">
        {children}
      </h2>
    ),
    h3: ({ node, children }) => (
      <h3 id={lineId(node)} className="scroll-mt-24">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="not-prose my-10 border-l-4 border-violet-500 pl-6 pr-2 py-1 text-xl md:text-2xl font-medium leading-snug text-white/90 [&>p]:m-0">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => {
      const external = !!href && /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
    table: ({ children }) => (
      <div className="not-prose my-8 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm text-left">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-white/[0.04]">{children}</thead>,
    th: ({ children }) => (
      <th className="px-4 py-3 font-semibold text-white border-b border-white/10">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-slate-300 border-b border-white/5 align-top">{children}</td>
    ),
    img: ({ src, alt }) => (
      <figure className="not-prose my-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={typeof src === 'string' ? src : ''} alt={alt ?? ''} className="w-full rounded-2xl border border-white/10" />
        {alt && <figcaption className="mt-3 text-center text-sm text-slate-500">{alt}</figcaption>}
      </figure>
    ),
    // Unwrap <pre> so fenced "chart"/"callout" blocks aren't wrapped in a code box.
    pre: ({ children }) => <>{children}</>,
    code: ({ className, children }) => {
      const lang = /language-(\w+)/.exec(className ?? '')?.[1];
      const raw = nodeToText(children).trim();
      if (lang === 'chart') {
        try {
          return <ChartFigure chart={JSON.parse(raw) as ChartData} />;
        } catch {
          return null;
        }
      }
      if (lang === 'callout') {
        return <Callout>{raw}</Callout>;
      }
      if (lang) {
        // Real fenced code block.
        return (
          <pre className="not-prose my-8 overflow-x-auto rounded-xl border border-white/10 bg-slate-900 p-5 text-sm">
            <code className={className}>{children}</code>
          </pre>
        );
      }
      // Inline code.
      return <code className={className}>{children}</code>;
    },
  };

  return (
    <div className={proseClasses}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
