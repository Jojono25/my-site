import { getPages } from '@/sanity/sanity.utils';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu site! Bem vindo!',
  description: 'Gerado em Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // pegar todas as páginas
  const pages = await getPages();

  return (
    <html lang='pt-br'>
      <body className='max-w-3xl mx-auto py-10'>
        <header className='flex items-center justify-between'>
          <Link href="/" className='bg-gradient-to-r from-orange-500 via-red-500 to-purple-600
          bg-clip-text text-transparent text-lg font-bold'>RafaMS</Link>
          <div className='flex items-center gap-5 text-sm text-gray-600'>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>
                {page.title}</Link>
            ))}
          </div>
        </header>
      <main className='py-10'>{children}</main>
      </body>
    </html>
  )
}
