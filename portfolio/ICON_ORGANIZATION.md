# Icon Organization Documentation

## Structure Overview

Your icons have been reorganized into a clean, maintainable structure with no duplicates.

### Directory Structure

```
src/components/
├── icons/
│   ├── social/           # Social media icons
│   │   ├── github.tsx
│   │   ├── instagram.tsx
│   │   ├── linkedin.tsx  (NEW)
│   │   ├── twitter.tsx
│   │   ├── whatsapp.tsx  (NEW)
│   │   ├── x.tsx         (NEW)
│   │   ├── youtube.tsx   (NEW)
│   │   └── index.ts
│   │
│   ├── tech/            # Technology & tool icons
│   │   ├── aws.tsx
│   │   ├── bash.tsx
│   │   ├── email.tsx    (NEW)
│   │   ├── framer-motion.tsx (NEW)
│   │   ├── globe.tsx    (NEW)
│   │   ├── google-drive.tsx (NEW)
│   │   ├── notion.tsx   (NEW)
│   │   ├── react.tsx
│   │   ├── typescript.tsx
│   │   ├── ... (and 40+ other tech icons)
│   │   └── index.ts
│   │
│   └── icons.tsx        # Main entry point (centralizes exports)
```

## Features

✅ **No Duplicates** - Each icon exists only once
✅ **Organized Categories** - Social and Tech icons separated
✅ **Easy Imports** - Central re-export from main icons.tsx
✅ **Scalable** - Easy to add new icons
✅ **Type Safe** - Full TypeScript support

## Usage Examples

### Import from main entry point:

```typescript
import {
  LinkedinIcon,
  GlobeIcon,
  FramerMotionIcon
} from '@/components/icons';

export function MyComponent() {
  return (
    <>
      <LinkedinIcon className="w-6 h-6" />
      <GlobeIcon className="w-6 h-6" />
      <FramerMotionIcon className="w-6 h-6" />
    </>
  );
}
```

### Direct import from category:

```typescript
// Social icons
import { LinkedinIcon } from "@/components/icons/social";
import { YoutubeIcon } from "@/components/icons/social";

// Tech icons
import { NotionIcon } from "@/components/icons/tech";
import { GoogleDriveIcon } from "@/components/icons/tech";
```

## New Icons Added

### Social Media (4 new):

- `linkedin.tsx` - LinkedIn
- `x.tsx` - X (formerly Twitter)
- `youtube.tsx` - YouTube
- `whatsapp.tsx` - WhatsApp

### Technology/Tools (5 new):

- `email.tsx` - Email/Mail icon
- `globe.tsx` - Globe/Website icon
- `framer-motion.tsx` - Framer Motion animation library
- `notion.tsx` - Notion workspace tool
- `google-drive.tsx` - Google Drive storage

## Total Icons: 57

- **Social:** 8 icons (GitHub, Instagram, LinkedIn, Twitter, WhatsApp, X, YouTube, + 1 more)
- **Tech:** 49 icons (AWS, React, TypeScript, Next.js, + 45 more)

## Naming Convention

- Files use **kebab-case**: `framer-motion.tsx`, `google-drive.tsx`
- Exports use **PascalCase**: `FramerMotionIcon`, `GoogleDriveIcon`
- All icons accept standard SVG props and support Tailwind sizing: `className="w-6 h-6"`

## Adding New Icons

1. Create a new file in the appropriate folder (`social/` or `tech/`)
2. Use the naming convention (kebab-case for files, PascalCase for exports)
3. Add the export to the folder's `index.ts`
4. The icon will automatically be available from `icons.tsx`

Example:

```typescript
// src/components/icons/tech/my-tool.tsx
import type { SVGProps } from "react";

const MyToolIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    {/* SVG content */}
  </svg>
);

export { MyToolIcon };
```

Then add to `src/components/icons/tech/index.ts`:

```typescript
export { MyToolIcon } from "./my-tool";
```
