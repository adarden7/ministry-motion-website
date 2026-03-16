const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/app/(marketing)/products/page.tsx',
  'src/app/(marketing)/products/[slug]/page.tsx'
];

function replaceContent(content, filePath) {
  let newContent = content;

  // 1. Global Page Wrapper
  newContent = newContent.replace(/className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased"/g, 'className="min-h-screen bg-background text-foreground antialiased"');
  newContent = newContent.replace(/className="min-h-screen bg-[#0a0a0f] text-white antialiased"/g, 'className="min-h-screen bg-background text-foreground antialiased"');

  // 2. Section Backgrounds (Light to Dark)
  // bg-white -> bg-background
  newContent = newContent.replace(/\bbg-white\b/g, 'bg-background');
  // bg-slate-50, bg-slate-100 -> bg-slate-900 or bg-muted
  // We'll use bg-slate-900 or border-slate-800 to mimic the solutions sub-sections
  newContent = newContent.replace(/\bbg-slate-50\b/g, 'bg-slate-900');
  newContent = newContent.replace(/\bbg-slate-100\b/g, 'bg-slate-800');
  
  // 3. Borders
  newContent = newContent.replace(/\bborder-slate-200\b/g, 'border-slate-800');
  newContent = newContent.replace(/\bborder-slate-100\b/g, 'border-slate-800/50');
  // newContent = newContent.replace(/\bborder-border\b/g, 'border-slate-800');

  // 4. Text Colors
  newContent = newContent.replace(/\btext-slate-900\b/g, 'text-foreground');
  newContent = newContent.replace(/\btext-slate-700\b/g, 'text-slate-300');
  newContent = newContent.replace(/\btext-slate-600\b/g, 'text-muted-foreground');
  newContent = newContent.replace(/\btext-slate-500\b/g, 'text-slate-400');
  // But wait, the hero wants text-white, let's just make sure "text-foreground" is used everywhere instead of hardcoded white unless it's hero text.

  // 5. Hero Gradients and Elements
  // Home
  newContent = newContent.replace(
    'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
    'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
  );
  // Compare
  newContent = newContent.replace(
    /bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900/g,
    'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
  );
  
  // Home exact match hero replace
  if (filePath.includes('home/page.tsx')) {
    newContent = newContent.replace(
      `<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/15 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl" />`,
      `<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />`
    );

    newContent = newContent.replace(
      'from-blue-400 via-cyan-400 to-teal-400',
      'from-emerald-400 via-teal-400 to-cyan-400'
    );
    
    // Fix buttons
    newContent = newContent.replace(
      'bg-gradient-to-r from-blue-500 to-cyan-500 text-foreground font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-lg shadow-lg shadow-blue-500/25',
      'bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all text-lg shadow-lg shadow-emerald-500/25'
    );
    
    // Wait, the newContent replaced white with background
    // <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-background text-blue-900 ...
    newContent = newContent.replace(
      /className="w-full sm:w-auto px-8 py-4 bg-background text-blue-900.*?">/g,
      `className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg flex items-center justify-center gap-2 shadow-lg">`
    );
  }

  // Compare exact match hero replace
  if (filePath.includes('compare/page.tsx')) {
    newContent = newContent.replace(
      `<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />`,
      `<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />`
    );
    
    newContent = newContent.replace(
      'from-blue-400 via-cyan-400 to-teal-400',
      'from-emerald-400 via-teal-400 to-cyan-400'
    );
  }
  
  // Blog / blog[slug] exact match hero replace
  if (filePath.includes('blog/page.tsx')) {
    newContent = newContent.replace(
      /from-blue-900\/20/g,
      'from-emerald-500/15'
    );
    newContent = newContent.replace(
      /from-blue-400 via-cyan-400 to-teal-400/g,
      'from-emerald-400 via-teal-400 to-cyan-400'
    );
  }
  
  if (filePath.includes('blog\\[slug]\\page.tsx') || filePath.includes('blog/[slug]/page.tsx')) {
    newContent = newContent.replace(
      /bg-\[\#0a0a0f\]/g,
      'bg-background'
    );
    newContent = newContent.replace(
      /from-violet-500\/10/g,
      'from-emerald-500/15'
    );
  }

  // Products exact match hero replace
  if (filePath.includes('products/page.tsx') || filePath.includes('products\\[slug]\\page.tsx') || filePath.includes('products/[slug]/page.tsx')) {
    newContent = newContent.replace(
      `<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />`,
      `<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />`
    );
    // Generic match just in case
    newContent = newContent.replace(
      /bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900/g,
      'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
    );
    newContent = newContent.replace(
      'from-blue-400 via-cyan-400 to-teal-400',
      'from-emerald-400 via-teal-400 to-cyan-400'
    );
  }

  // Some tables or cards might need dark adjustments
  // For compare tables, border classes
  newContent = newContent.replace(/\bdivide-slate-200\b/g, 'divide-slate-800');
  newContent = newContent.replace(/\bdivide-slate-100\b/g, 'divide-slate-800');
  
  // Text colors inside components
  newContent = newContent.replace(/text-blue-900/g, 'text-foreground');
  newContent = newContent.replace(/text-slate-900/g, 'text-foreground');
  newContent = newContent.replace(/bg-background/g, 'bg-background');

  return newContent;
}

targetFiles.forEach((file) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const updated = replaceContent(content, fullPath);
    fs.writeFileSync(fullPath, updated);
    console.log('[theme_fix] Updated:', file);
  } else {
    console.log('[theme_fix] Not found:', file);
  }
});
