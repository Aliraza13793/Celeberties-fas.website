export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: { name: string; slug: string; color: string };
  author: string;
  publishedAt: string;
  readTime: number;
  views: number;
  tags: string[];
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  "zendaya-valentino-cannes-2026": {
    title: "Zendaya Stuns in Custom Valentino at Cannes Film Festival 2026",
    slug: "zendaya-valentino-cannes-2026",
    excerpt: "The actress turned heads in a breathtaking custom Valentino gown that perfectly blended modern elegance with classic Hollywood glamour.",
    content: `
      <p>Zendaya once again proved why she's one of the most fashionable celebrities in the world as she arrived at the Cannes Film Festival 2026 in a breathtaking custom Valentino gown.</p>
      <p>The actress, who has been making waves in the fashion industry for years, chose a stunning ivory creation that perfectly blended modern elegance with classic Hollywood glamour. The gown featured intricate beadwork, a dramatic train, and a silhouette that flattered her figure perfectly.</p>
      <h2>The Look</h2>
      <p>The custom Valentino gown was a masterpiece of craftsmanship, featuring hand-sewn crystals and delicate lace detailing. The plunging neckline and flowing skirt created a silhouette that was both sophisticated and contemporary.</p>
      <p>Zendaya paired the gown with minimalist jewelry from Bulgari, letting the dress take center stage. Her hair was styled in a sleek updo, and her makeup featured a bold red lip that perfectly complemented the ivory gown.</p>
      <h2>The Fashion Moment</h2>
      <p>This appearance marks another chapter in Zendaya's fashion evolution. From her early days as a Disney star to becoming a global fashion icon, she has consistently pushed boundaries and defied expectations.</p>
      <p>Fashion critics have been raving about the look, with many calling it one of the best appearances in Cannes history. The gown has already been compared to some of the most iconic red carpet moments of all time.</p>
      <h2>What's Next</h2>
      <p>As Zendaya continues to promote her latest film, we can expect more stunning fashion moments. With her stylist Law Roach by her side, every red carpet appearance becomes a fashion event.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=1200&h=600&fit=crop",
    category: { name: "Red Carpet", slug: "red-carpet", color: "#ef4444" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-07-03",
    readTime: 5,
    views: 24500,
    tags: ["Zendaya", "Valentino", "Cannes", "Red Carpet", "Fashion"],
  },
  "hailey-bieber-street-style": {
    title: "Hailey Bieber's Off-Duty Street Style Guide",
    slug: "hailey-bieber-street-style",
    excerpt: "From oversized blazers to casual denim, discover Hailey's go-to everyday looks.",
    content: `
      <p>Hailey Bieber has become the unofficial queen of street style. Her ability to mix high-end pieces with everyday basics has made her a style icon for millions.</p>
      <h2>Key Pieces in Hailey's Wardrobe</h2>
      <ul><li><strong>Oversized Blazers:</strong> The foundation of many of her looks</li><li><strong>Wide-leg Trousers:</strong> Paired with fitted tops for balance</li><li><strong>Mini Bags:</strong> Accessory of choice</li><li><strong>Chunky Sneakers:</strong> For a casual finish</li></ul>
      <h2>How to Recreate Her Looks</h2>
      <p>The key to Hailey's style is understanding proportion. She consistently pairs oversized pieces with fitted ones, creating a balanced silhouette that looks effortless but is actually very intentional.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&h=600&fit=crop",
    category: { name: "Street Style", slug: "street-style", color: "#f59e0b" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-14",
    readTime: 4,
    views: 18200,
    tags: ["Hailey Bieber", "Street Style", "Fashion"],
  },
  "top-10-luxury-handbags-2026": {
    title: "Top 10 Luxury Handbags Worth Investing In 2026",
    slug: "top-10-luxury-handbags-2026",
    excerpt: "These designer bags hold their value and elevate any outfit instantly.",
    content: `
      <p>Luxury handbags aren't just accessories—they're investments. Here are the top 10 bags that consistently hold their value and remain stylish year after year.</p>
      <h2>1. Hermès Birkin</h2><p>The holy grail of handbags. The Birkin consistently appreciates in value.</p>
      <h2>2. Chanel Classic Flap</h2><p>Chanel increases prices regularly, making early purchases a smart financial move.</p>
      <h2>3. Louis Vuitton Neverfull</h2><p>Practical, recognizable, and holds value well.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&h=600&fit=crop",
    category: { name: "Luxury Brands", slug: "luxury-brands", color: "#059669" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-13",
    readTime: 7,
    views: 31000,
    tags: ["Luxury", "Handbags", "Investment"],
  },
  "beyonce-fashion-line-2026": {
    title: "Beyonce's New Fashion Line: Everything We Know",
    slug: "beyonce-fashion-line-2026",
    excerpt: "The megastar is expanding her fashion empire with a new ready-to-wear collection.",
    content: `
      <p>Beyonce is set to launch her most ambitious fashion venture yet—a complete ready-to-wear collection that promises to redefine accessible luxury.</p>
      <h2>What We Know So Far</h2><p>The collection will feature everything from everyday basics to statement pieces.</p>
      <h2>Price Range</h2><p>Prices will range from $50 for basic pieces to $2,000 for premium items.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop",
    category: { name: "Fashion", slug: "fashion", color: "#8b5cf6" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-12",
    readTime: 6,
    views: 42000,
    tags: ["Beyonce", "Fashion Line", "New Collection"],
  },
  "best-beauty-looks-met-gala-2026": {
    title: "The Best Beauty Looks from Met Gala 2026",
    slug: "best-beauty-looks-met-gala-2026",
    excerpt: "From bold makeup to stunning hairstyles, these beauty moments stole the show.",
    content: `
      <p>The 2026 Met Gala wasn't just about fashion—the beauty looks were equally spectacular.</p>
      <h2>Best Makeup</h2><p>Several celebrities opted for metallic eyeshadows and bold lip colors.</p>
      <h2>Best Hair</h2><p>From sleek updos to flowing waves, the hair looks were nothing short of spectacular.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop",
    category: { name: "Beauty", slug: "beauty", color: "#ec4899" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-11",
    readTime: 5,
    views: 28500,
    tags: ["Met Gala", "Beauty", "Makeup"],
  },
  "taylor-swift-style-timeline": {
    title: "Taylor Swift's Red Carpet Evolution: A Style Timeline",
    slug: "taylor-swift-style-timeline",
    excerpt: "Trace the evolution of Taylor Swift's fashion journey from country sweetheart to global style icon.",
    content: `
      <p>Taylor Swift's style has undergone one of the most dramatic transformations in celebrity fashion history.</p>
      <h2>The Country Years (2006-2012)</h2><p>Sundresses, cowboy boots, and signature curly hair.</p>
      <h2>The Pop Transition (2012-2016)</h2><p>More polished looks with sequined dresses and the iconic red lip.</p>
      <h2>The Current Era</h2><p>Sophisticated and elegant, mixing classic pieces with modern trends.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1200&h=600&fit=crop",
    category: { name: "Celebrity News", slug: "celebrity-news", color: "#e11d48" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-10",
    readTime: 8,
    views: 15600,
    tags: ["Taylor Swift", "Style Evolution", "Red Carpet"],
  },
  "chanel-spring-2026-collection": {
    title: "Chanel's Spring 2026 Collection: A Complete Breakdown",
    slug: "chanel-spring-2026-collection",
    excerpt: "Virginie Viard delivers a romantic collection that pays homage to Coco Chanel's legacy.",
    content: `
      <p>Chanel's Spring 2026 collection was a masterclass in balancing heritage with modernity.</p>
      <h2>The Inspiration</h2><p>Virginie Viard drew inspiration from the French Riviera.</p>
      <h2>Key Trends</h2><ul><li>Soft pastels mixed with classic black and white</li><li>Updated tweed suits with modern proportions</li></ul>
    `,
    featuredImage: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&h=600&fit=crop",
    category: { name: "Designer Collections", slug: "designer-collections", color: "#3b82f6" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-09",
    readTime: 6,
    views: 12400,
    tags: ["Chanel", "Spring Collection", "Runway"],
  },
  "celebrity-hairstyles-diy": {
    title: "How to Recreate Celebrity Hairstyles at Home",
    slug: "celebrity-hairstyles-diy",
    excerpt: "Get the look without the salon price tag with these easy-to-follow tutorials.",
    content: `
      <p>You don't need a professional stylist to get celebrity-worthy hair.</p>
      <h2>The Hailey Bieber Bob</h2><p>Sleek, blunt bob achievable with a flat iron and shine serum.</p>
      <h2>Taylor Swift's Waves</h2><p>Use a large-barrel curling iron, leave ends straight, brush out for effortless waves.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=600&fit=crop",
    category: { name: "Beauty", slug: "beauty", color: "#ec4899" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-08",
    readTime: 4,
    views: 9800,
    tags: ["Hairstyles", "DIY", "Beauty"],
  },
  "best-dressed-grammy-2026": {
    title: "Best Dressed at the Grammy Awards 2026",
    slug: "best-dressed-grammy-2026",
    excerpt: "Our picks for the most fashionable moments from music's biggest night.",
    content: `
      <p>The 2026 Grammy Awards delivered some incredible fashion moments.</p>
      <h2>Top Looks</h2><p>From jaw-dropping gowns to unexpected streetwear-meets-glamour combinations.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop",
    category: { name: "Red Carpet", slug: "red-carpet", color: "#ef4444" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-07",
    readTime: 5,
    views: 22100,
    tags: ["Grammy Awards", "Red Carpet", "Best Dressed"],
  },
  "summer-2026-fashion-trends": {
    title: "Summer 2026 Fashion Trends You Need to Know",
    slug: "summer-2026-fashion-trends",
    excerpt: "From vibrant colors to sustainable fashion, these trends are set to dominate this season.",
    content: `
      <p>Summer 2026 is shaping up to be one of the most exciting fashion seasons in years.</p>
      <h2>Key Trends</h2><ul><li><strong>Bold Colors:</strong> Vibrant oranges, greens, and purples</li><li><strong>Sustainable Fashion:</strong> Eco-friendly materials going mainstream</li><li><strong>Oversized Everything:</strong> From blazers to shorts</li></ul>
    `,
    featuredImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop",
    category: { name: "Fashion", slug: "fashion", color: "#8b5cf6" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-06",
    readTime: 6,
    views: 17300,
    tags: ["Summer Trends", "Fashion", "2026"],
  },
  "quiet-luxury-celebrity-guide": {
    title: "The Rise of Quiet Luxury: A Celebrity Guide",
    slug: "quiet-luxury-celebrity-guide",
    excerpt: "Why the biggest stars are ditching logos for understated elegance.",
    content: `
      <p>Quiet luxury has become the dominant trend among celebrities.</p>
      <h2>What Is Quiet Luxury?</h2><p>Quality over logos. Well-made pieces in premium materials that speak for themselves.</p>
      <h2>Celebrities Leading the Trend</h2><p>Hailey Bieber, Kendall Jenner, and Sofia Richie have championed this aesthetic.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200&h=600&fit=crop",
    category: { name: "Luxury Brands", slug: "luxury-brands", color: "#059669" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-05",
    readTime: 5,
    views: 14500,
    tags: ["Quiet Luxury", "Celebrity Style", "Minimalism"],
  },
  "zendaya-fashion-evolution": {
    title: "Zendaya's Fashion Evolution: From Disney Star to Style Icon",
    slug: "zendaya-fashion-evolution",
    excerpt: "How the actress became one of the most fashionable celebrities in the world.",
    content: `
      <p>Zendaya's fashion journey is one of the most remarkable transformations in celebrity style history.</p>
      <h2>The Disney Years</h2><p>Early red carpet appearances showed a young star finding her voice in fashion.</p>
      <h2>The Breakout Moments</h2><p>Working with stylist Law Roach, Zendaya began taking bold fashion risks that paid off spectacularly.</p>
      <h2>Current Era</h2><p>Now a global fashion icon, Zendaya consistently tops best-dressed lists worldwide.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&h=600&fit=crop",
    category: { name: "Celebrity News", slug: "celebrity-news", color: "#e11d48" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-07-01",
    readTime: 6,
    views: 18500,
    tags: ["Zendaya", "Fashion Evolution", "Style Icon"],
  },
  "harry-styles-fashion-brand": {
    title: "Harry Styles Launches New Fashion Brand",
    slug: "harry-styles-fashion-brand",
    excerpt: "The singer expands his fashion empire with a new sustainable clothing line.",
    content: `
      <p>Harry Styles has officially entered the fashion industry with his own sustainable clothing brand.</p>
      <h2>The Vision</h2><p>Harry's brand focuses on gender-neutral, sustainable fashion that promotes self-expression.</p>
      <h2>The Collection</h2><p>The debut collection features vibrant colors, oversized silhouettes, and eco-friendly materials.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&h=600&fit=crop",
    category: { name: "Celebrity News", slug: "celebrity-news", color: "#e11d48" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-28",
    readTime: 4,
    views: 22000,
    tags: ["Harry Styles", "Fashion Brand", "Sustainable"],
  },
  "rihanna-maternity-style": {
    title: "Rihanna's Maternity Style: The Definitive Guide",
    slug: "rihanna-maternity-style",
    excerpt: "The pop star redefined pregnancy fashion with her bold choices.",
    content: `
      <p>Rihanna completely redefined what maternity fashion could be with her daring and stylish pregnancy looks.</p>
      <h2>Bold Choices</h2><p>From crop tops to designer gowns, Rihanna proved that pregnancy style has no rules.</p>
      <h2>Iconic Moments</h2><p>Her Met Gala maternity look became one of the most talked-about fashion moments of the year.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=600&fit=crop",
    category: { name: "Celebrity News", slug: "celebrity-news", color: "#e11d48" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-25",
    readTime: 5,
    views: 15800,
    tags: ["Rihanna", "Maternity Style", "Fashion"],
  },
  "kardashians-fashion-empire": {
    title: "The Kardashians' Fashion Empire: A Timeline",
    slug: "kardashians-fashion-empire",
    excerpt: "From reality TV to fashion moguls, how the family built their brands.",
    content: `
      <p>The Kardashian-Jenner family has built one of the most powerful fashion empires in the world.</p>
      <h2>The Beginning</h2><p>From their early boutique DASH to global fashion brands, the family's journey has been remarkable.</p>
      <h2>Individual Brands</h2><p>Each family member has created their own successful fashion and beauty ventures.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=600&fit=crop",
    category: { name: "Celebrity News", slug: "celebrity-news", color: "#e11d48" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-22",
    readTime: 8,
    views: 31000,
    tags: ["Kardashians", "Fashion Empire", "Business"],
  },
  "timothee-chalamet-best-moments": {
    title: "Timothée Chalamet: Best Red Carpet Moments",
    slug: "timothee-chalamet-best-moments",
    excerpt: "The actor's most memorable and fashion-forward red carpet appearances.",
    content: `
      <p>Timothée Chalamet has become one of the most exciting men in fashion.</p>
      <h2>The Haider Ackermann Suit</h2><p>His breakout fashion moment that put him on the style map.</p>
      <h2>The Backless Bob Mackie</h2><p>The look that proved men's red carpet fashion could be bold and innovative.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    category: { name: "Celebrity News", slug: "celebrity-news", color: "#e11d48" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-20",
    readTime: 5,
    views: 19200,
    tags: ["Timothée Chalamet", "Red Carpet", "Menswear"],
  },
  "beyonce-renaissance-tour-fashion": {
    title: "Beyoncé's Renaissance Tour Fashion: Every Look",
    slug: "beyonce-renaissance-tour-fashion",
    excerpt: "A complete breakdown of Beyoncé's iconic tour wardrobe.",
    content: `
      <p>Beyoncé's Renaissance Tour was a masterclass in fashion and performance.</p>
      <h2>Custom Designs</h2><p>The tour featured custom pieces from the world's top designers.</p>
      <h2>Iconic Moments</h2><p>Each city brought new fashion surprises and show-stopping looks.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=600&fit=crop",
    category: { name: "Celebrity News", slug: "celebrity-news", color: "#e11d48" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-18",
    readTime: 7,
    views: 45000,
    tags: ["Beyonce", "Renaissance Tour", "Fashion"],
  },
  "capsule-wardrobe-celebrity": {
    title: "How to Build a Capsule Wardrobe Like a Celebrity",
    slug: "capsule-wardrobe-celebrity",
    excerpt: "Minimalist fashion tips from the stars.",
    content: `
      <p>Celebrities like Meghan Markle and Victoria Beckham have mastered the art of the capsule wardrobe.</p>
      <h2>Essential Pieces</h2><p>Every celebrity capsule wardrobe starts with quality basics in neutral colors.</p>
      <h2>The Formula</h2><p>Invest in classic pieces, mix high and low, and always prioritize fit.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop",
    category: { name: "Fashion", slug: "fashion", color: "#8b5cf6" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-15",
    readTime: 7,
    views: 11200,
    tags: ["Capsule Wardrobe", "Minimalism", "Fashion Tips"],
  },
  "sustainable-fashion-celebrities": {
    title: "Sustainable Fashion: Celebrities Leading the Way",
    slug: "sustainable-fashion-celebrities",
    excerpt: "Stars making eco-friendly fashion choices.",
    content: `
      <p>More celebrities than ever are embracing sustainable fashion and using their platforms to promote eco-friendly choices.</p>
      <h2>Emma Watson</h2><p>A pioneer in sustainable red carpet fashion.</p>
      <h2>Stella McCartney</h2><p>The designer leading the luxury sustainability movement.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=600&fit=crop",
    category: { name: "Fashion", slug: "fashion", color: "#8b5cf6" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-12",
    readTime: 5,
    views: 9800,
    tags: ["Sustainable Fashion", "Eco-Friendly", "Celebrity Style"],
  },
  "celebrity-skincare-routines": {
    title: "Celebrity Skincare Routines Revealed",
    slug: "celebrity-skincare-routines",
    excerpt: "The secrets behind flawless celebrity skin.",
    content: `
      <p>Celebrity dermatologists and estheticians reveal the skincare routines behind Hollywood's glowing complexions.</p>
      <h2>The Basics</h2><p>Cleansing, moisturizing, and sun protection form the foundation of every celebrity routine.</p>
      <h2>The Extras</h2><p>LED masks, professional facials, and custom serums take their skin to the next level.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=600&fit=crop",
    category: { name: "Beauty", slug: "beauty", color: "#ec4899" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-10",
    readTime: 6,
    views: 15400,
    tags: ["Skincare", "Celebrity Beauty", "Routines"],
  },
  "celebrity-makeup-brands": {
    title: "Best Celebrity Makeup Brands to Try",
    slug: "celebrity-makeup-brands",
    excerpt: "Beauty lines worth your money.",
    content: `
      <p>Celebrity beauty brands have flooded the market, but which ones are actually worth your money?</p>
      <h2>Fenty Beauty</h2><p>Rihanna's inclusive beauty line changed the industry forever.</p>
      <h2>Rare Beauty</h2><p>Selena Gomez's brand focuses on mental health and accessible beauty.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&h=600&fit=crop",
    category: { name: "Beauty", slug: "beauty", color: "#ec4899" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-08",
    readTime: 5,
    views: 12100,
    tags: ["Makeup Brands", "Celebrity Beauty", "Fenty", "Rare Beauty"],
  },
  "kendall-jenner-airport-style": {
    title: "Kendall Jenner's Airport Style Moments",
    slug: "kendall-jenner-airport-style",
    excerpt: "How the supermodel travels in style.",
    content: `
      <p>Kendall Jenner has turned airport arrivals into fashion shows with her effortlessly cool travel looks.</p>
      <h2>The Formula</h2><p>Comfortable basics, oversized outerwear, and statement accessories.</p>
      <h2>Key Looks</h2><p>From cargo pants to designer sets, her airport style is always on point.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop",
    category: { name: "Street Style", slug: "street-style", color: "#f59e0b" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-05",
    readTime: 4,
    views: 14300,
    tags: ["Kendall Jenner", "Airport Style", "Street Style"],
  },
  "best-street-style-summer-2026": {
    title: "Best Celebrity Street Style of Summer 2026",
    slug: "best-street-style-summer-2026",
    excerpt: "The hottest off-duty looks this season.",
    content: `
      <p>Summer 2026 has brought some incredible street style moments from celebrities around the world.</p>
      <h2>Top Trends</h2><p>Mesh tops, low-rise jeans, and colorful accessories dominated the streets.</p>
      <h2>Best Dressed</h2><p>Hailey Bieber, Dua Lipa, and Zendaya led the street style charge.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&h=600&fit=crop",
    category: { name: "Street Style", slug: "street-style", color: "#f59e0b" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-03",
    readTime: 5,
    views: 19800,
    tags: ["Street Style", "Summer Fashion", "Celebrity Style"],
  },
  "met-gala-2026-recap": {
    title: "Met Gala 2026: The Ultimate Fashion Recap",
    slug: "met-gala-2026-recap",
    excerpt: "Every stunning look from this year's Met Gala theme.",
    content: `
      <p>The Met Gala 2026 delivered some of the most memorable fashion moments in the event's history.</p>
      <h2>Best Dressed</h2><p>From Zendaya's sculptural gown to Rihanna's avant-garde ensemble, the red carpet was electric.</p>
      <h2>Theme Interpretations</h2><p>Celebrities and their stylists brought creative interpretations of this year's theme.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=600&fit=crop",
    category: { name: "Red Carpet", slug: "red-carpet", color: "#ef4444" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-06-01",
    readTime: 7,
    views: 48000,
    tags: ["Met Gala", "Red Carpet", "Fashion Event"],
  },
  "oscar-fashion-iconic-looks": {
    title: "Oscar Fashion: The Most Iconic Looks of All Time",
    slug: "oscar-fashion-iconic-looks",
    excerpt: "A look back at the most memorable Academy Awards fashion moments.",
    content: `
      <p>The Academy Awards have given us some of the most iconic fashion moments in history.</p>
      <h2>Björk's Swan Dress</h2><p>The most talked-about Met Gala and Oscar fashion moment of all time.</p>
      <h2>Billy Porter's Tuxedo Gown</h2><p>The look that redefined menswear on the red carpet.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&h=600&fit=crop",
    category: { name: "Red Carpet", slug: "red-carpet", color: "#ef4444" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-05-28",
    readTime: 8,
    views: 35000,
    tags: ["Oscars", "Red Carpet", "Iconic Fashion"],
  },
  "hermes-birkin-vs-kelly": {
    title: "Hermès Birkin vs Kelly: Which Is Worth More?",
    slug: "hermes-birkin-vs-kelly",
    excerpt: "A deep dive into the two most iconic luxury bags.",
    content: `
      <p>The Hermès Birkin and Kelly bags are the most sought-after luxury handbags in the world.</p>
      <h2>The Birkin</h2><p>Named after Jane Birkin, this iconic tote has become the ultimate status symbol.</p>
      <h2>The Kelly</h2><p>Named after Grace Kelly, this structured bag is the epitome of elegance.</p>
      <h2>Investment Value</h2><p>Both bags consistently appreciate in value, making them smart luxury investments.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=600&fit=crop",
    category: { name: "Luxury Brands", slug: "luxury-brands", color: "#059669" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-05-25",
    readTime: 6,
    views: 21000,
    tags: ["Hermes", "Birkin", "Kelly", "Luxury Bags"],
  },
  "dior-summer-2026-review": {
    title: "Dior's Summer 2026 Ready-to-Wear Review",
    slug: "dior-summer-2026-review",
    excerpt: "Maria Grazia Chiuri's latest collection impresses.",
    content: `
      <p>Dior's Summer 2026 collection was a celebration of feminine strength and modern elegance.</p>
      <h2>The Inspiration</h2><p>Maria Grazia Chiuri drew from feminist art and architecture for this stunning collection.</p>
      <h2>Key Looks</h2><p>Structured blazers, flowing dresses, and bold accessories defined the collection.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop",
    category: { name: "Designer Collections", slug: "designer-collections", color: "#3b82f6" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-05-22",
    readTime: 5,
    views: 10800,
    tags: ["Dior", "Fashion Week", "Runway"],
  },
  "gucci-new-direction": {
    title: "Gucci's New Creative Direction: What to Expect",
    slug: "gucci-new-direction",
    excerpt: "The fashion house's next chapter begins.",
    content: `
      <p>Gucci is entering a new era with fresh creative direction and bold design choices.</p>
      <h2>The Transition</h2><p>The brand is evolving while maintaining its iconic heritage.</p>
      <h2>What's Coming</h2><p>Expect unexpected collaborations, sustainable initiatives, and boundary-pushing designs.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop",
    category: { name: "Designer Collections", slug: "designer-collections", color: "#3b82f6" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-05-20",
    readTime: 7,
    views: 16200,
    tags: ["Gucci", "Fashion House", "New Direction"],
  },
  "affordable-designer-bag-alternatives": {
    title: "Best Affordable Alternatives to Designer Bags",
    slug: "affordable-designer-bag-alternatives",
    excerpt: "Get the look for less with these dupes.",
    content: `
      <p>You don't need to spend thousands to get the designer bag look. Here are the best affordable alternatives.</p>
      <h2>Best Dupes</h2><p>These bags capture the essence of designer styles at a fraction of the price.</p>
      <h2>Quality Picks</h2><p>Invest in mid-range options that look expensive without the designer price tag.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    category: { name: "Shopping Guides", slug: "shopping-guides", color: "#6366f1" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-05-18",
    readTime: 5,
    views: 22400,
    tags: ["Affordable Fashion", "Bag Dupes", "Shopping"],
  },
  "celebrity-fashion-under-100": {
    title: "Celebrity-Approved Fashion Under $100",
    slug: "celebrity-fashion-under-100",
    excerpt: "Style on a budget with these picks.",
    content: `
      <p>These celebrities prove you don't need a big budget to look like a star.</p>
      <h2>Best Picks</h2><p>From Zara to H&M, these affordable pieces have been spotted on celebrities.</p>
      <h2>How to Style</h2><p>Tips on how to make budget pieces look expensive.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop",
    category: { name: "Shopping Guides", slug: "shopping-guides", color: "#6366f1" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-05-15",
    readTime: 4,
    views: 18900,
    tags: ["Budget Fashion", "Affordable Style", "Celebrity Looks"],
  },
  "best-online-shopping-sites": {
    title: "Best Online Shopping Sites for Fashion",
    slug: "best-online-shopping-sites",
    excerpt: "Where to shop for the latest trends.",
    content: `
      <p>These online retailers offer the best selection, prices, and shopping experiences for fashion lovers.</p>
      <h2>Luxury</h2><p>Net-a-Porter, Mytheresa, and SSENSE for high-end fashion.</p>
      <h2>Mid-Range</h2><p>ASOS, Revolve, and Shopbop for trendy styles.</p>
      <h2>Budget</h2><p>Zara, H&M, and Uniqlo for affordable basics.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop",
    category: { name: "Shopping Guides", slug: "shopping-guides", color: "#6366f1" },
    author: "Fashion Editorial Team",
    publishedAt: "2026-05-12",
    readTime: 6,
    views: 15600,
    tags: ["Online Shopping", "Fashion Retailers", "Shopping Guide"],
  },
};

export function getBlogPost(slug: string): BlogPost | null {
  return BLOG_POSTS[slug] || null;
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(BLOG_POSTS);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = BLOG_POSTS[slug];
  if (!post) return [];
  return Object.values(BLOG_POSTS)
    .filter((p) => p.slug !== slug && p.category.slug === post.category.slug)
    .slice(0, limit);
}

export function getCustomPosts(): BlogPost[] {
  try {
    const fs = require("fs");
    const path = require("path");
    const filePath = path.join(process.cwd(), "src/lib/custom-posts.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return data
        .filter((p: any) => p.status === "published")
        .map((p: any) => ({
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          content: p.content || "<p>No content available.</p>",
          featuredImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop",
          category: { name: "Celebrity News", slug: p.category || "celebrity-news", color: "#e11d48" },
          author: "Admin",
          publishedAt: p.createdAt,
          readTime: 5,
          views: 0,
          tags: ["New Post"],
        }));
    }
  } catch {}
  return [];
}

export function getAllPosts(): BlogPost[] {
  return [...Object.values(BLOG_POSTS), ...getCustomPosts()];
}
