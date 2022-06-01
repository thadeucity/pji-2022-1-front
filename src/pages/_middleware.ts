import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');

  const safeHostname = encodeURIComponent(hostname || '').replace(/\./g, '%2E');

  const another = encodeURIComponent('https://www.google.com').replace(/\./g, '%2E');

  const url = request.nextUrl.clone()

  if (
    !url.pathname.includes('.') && // exclude all files in the public folder
    !url.pathname.startsWith('/api') // exclude all API routes
  ) {
    // rewrite to the current hostname under the pages/sites folder
    // the main logic component will happen in pages/sites/[site]/index.tsx
    url.pathname = `${hostname}${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}