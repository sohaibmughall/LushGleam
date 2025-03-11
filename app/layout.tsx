import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LushGleam - Glow Naturally, Shine Sustainably',
  description: 'Luxury eco-friendly beauty brand specializing in organic, cruelty-free, and vegan skincare and cosmetics.',
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/skin-quiz', label: 'Skin Quiz' },
  { href: '/virtual-try-on', label: 'Virtual Try-On' },
  { href: '/blog', label: 'Blog' },
  { href: '/sustainability', label: 'Sustainability' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-light">
                Lush<span className="font-medium">Gleam</span>
              </Link>
              <NavigationMenu>
                <NavigationMenuList className="hidden md:flex gap-6">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="text-sm font-medium hover:text-primary transition-colors">
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}