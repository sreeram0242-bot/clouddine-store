import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.clouddine.store/#website",
      "url": "https://www.clouddine.store/",
      "name": "CloudDine",
      "alternateName": ["Cloud Dine", "CloudDine Store", "CloudDine POS"],
      "description": "All-in-one restaurant management platform and QR ordering system.",
      "publisher": {
        "@id": "https://www.clouddine.store/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.clouddine.store/#organization",
      "name": "CloudDine",
      "alternateName": ["Cloud Dine", "CloudDine Store"],
      "url": "https://www.clouddine.store/",
      "logo": "https://www.clouddine.store/logo.png",
      "image": "https://www.clouddine.store/logo.png",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.clouddine.store/#software",
      "name": "CloudDine",
      "alternateName": ["Cloud Dine", "CloudDine POS"],
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All modern web browsers, Android, iOS, Windows, macOS",
      "url": "https://www.clouddine.store/",
      "image": "https://www.clouddine.store/logo.png",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
      },
      "description":
        "CloudDine (Cloud Dine) gives modern restaurants and hotels a complete cloud POS: QR-code ordering, live kitchen orders (KOT), waiter app and multi-outlet admin dashboard.",
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CloudDine — Cloud Dine Restaurant Management & QR Ordering POS" },
      {
        name: "description",
        content:
          "CloudDine (Cloud Dine) is an all-in-one restaurant management platform and cloud POS: QR-code ordering, live kitchen orders, waiter app and multi-outlet admin dashboard.",
      },
      {
        name: "keywords",
        content:
          "CloudDine, Cloud Dine, clouddine.store, restaurant management system, QR ordering system, restaurant POS, kitchen order ticket, KOT printer, waiter app",
      },
      { name: "author", content: "CloudDine" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "CloudDine — Cloud Dine Restaurant Management & QR Ordering" },
      {
        property: "og:description",
        content:
          "CloudDine gives modern restaurants and hotels a complete cloud POS: QR-code ordering, live kitchen orders, waiter app and multi-outlet admin dashboard.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.clouddine.store/" },
      { property: "og:site_name", content: "CloudDine" },
      { property: "og:image", content: "https://www.clouddine.store/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CloudDine — Cloud Dine Restaurant Management & QR Ordering" },
      {
        name: "twitter:description",
        content:
          "CloudDine gives modern restaurants and hotels a complete cloud POS: QR-code ordering, live kitchen orders, waiter app and multi-outlet admin dashboard.",
      },
      { name: "twitter:image", content: "https://www.clouddine.store/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.clouddine.store/" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
