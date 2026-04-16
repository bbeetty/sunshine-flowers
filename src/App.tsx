import { useMemo, useState } from 'react';
import { products, categories, colors, type Category, type ColorTag } from './data';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeColors, setActiveColors] = useState<ColorTag[]>([]);
  const [maxPrice, setMaxPrice] = useState(150);
  const [sort, setSort] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filtered = useMemo(() => {
    const list = products.filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      if (activeColors.length && !activeColors.includes(p.color)) return false;
      if (p.price > maxPrice) return false;
      return true;
    });
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, activeColors, maxPrice, sort]);

  const toggleColor = (c: ColorTag) =>
    setActiveColors((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  const resetFilters = () => {
    setActiveCategory('All');
    setActiveColors([]);
    setMaxPrice(150);
    setSort('featured');
  };

  const swatchMap: Record<ColorTag, string> = {
    Pink: '#F9D5D3',
    Peach: '#FBD9B8',
    Yellow: '#FCEBA4',
    Lilac: '#DCD0EC',
    White: '#F4EFE7',
    Green: '#CCE6D0',
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-butter text-lg">✿</span>
          <span className="font-display text-xl font-semibold tracking-tight">Sunshine Flowers</span>
        </div>
        <nav className="hidden gap-8 text-sm text-muted md:flex">
          <a href="#shop" className="hover:text-ink">Shop</a>
          <a href="#about" className="hover:text-ink">About</a>
          <a href="#journal" className="hover:text-ink">Journal</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </nav>
        <button className="rounded-full bg-ink px-5 py-2 text-sm text-cream hover:opacity-90">
          Cart (0)
        </button>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-4">
        <div className="rounded-3xl bg-blush/60 px-8 py-14 md:px-14 md:py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">Fresh this week</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Soft blooms,<br />
            sunny mornings.
          </h1>
          <p className="mt-5 max-w-md text-muted">
            Hand-tied bouquets and potted greens in gentle pastel palettes, delivered across the city.
          </p>
          <a
            href="#shop"
            className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm text-cream hover:opacity-90"
          >
            Shop the collection
          </a>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl">The Collection</h2>
            <p className="mt-1 text-sm text-muted">{filtered.length} arrangements</p>
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ink/20"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="grid gap-10 md:grid-cols-[240px_1fr]">
          <aside className="space-y-8">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Category</h3>
              <ul className="space-y-2 text-sm">
                {(['All', ...categories] as const).map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setActiveCategory(c)}
                      className={`w-full rounded-full px-3 py-2 text-left transition ${
                        activeCategory === c ? 'bg-ink text-cream' : 'hover:bg-white'
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Color</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => {
                  const active = activeColors.includes(c);
                  return (
                    <button
                      key={c}
                      onClick={() => toggleColor(c)}
                      aria-pressed={active}
                      title={c}
                      className={`flex h-9 w-9 items-center justify-center rounded-full ring-2 transition ${
                        active ? 'ring-ink' : 'ring-transparent hover:ring-ink/20'
                      }`}
                      style={{ backgroundColor: swatchMap[c] }}
                    >
                      <span className="sr-only">{c}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Max price · ${maxPrice}
              </h3>
              <input
                type="range"
                min={10}
                max={150}
                step={2}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-ink"
              />
              <div className="mt-1 flex justify-between text-xs text-muted">
                <span>$10</span>
                <span>$150</span>
              </div>
            </div>

            <button
              onClick={resetFilters}
              className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              Reset filters
            </button>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl bg-white p-12 text-center text-muted">
                No blooms match these filters yet. Try widening your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <article
                    key={p.id}
                    className="group overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className="relative aspect-[4/5] overflow-hidden"
                      style={{ backgroundColor: p.swatch }}
                    >
                      <div
                        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-70"
                        style={{ backgroundColor: p.accent }}
                      />
                      <div
                        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ backgroundColor: p.accent }}
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs text-ink backdrop-blur">
                        {p.category}
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-0.5 p-5">
                      <h3 className="font-display text-lg leading-none">{p.name}</h3>
                      <p className="text-xs text-muted">{p.color}</p>
                      <span className="mt-1 text-xl">${p.price}</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Sunshine Flowers · Fresh from our studio</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Instagram</a>
            <a href="#" className="hover:text-ink">Pinterest</a>
            <a href="#" className="hover:text-ink">hello@sunshine.co</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
