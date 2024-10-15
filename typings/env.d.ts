/// <reference types="vite/client" />
interface ImportMeta {
  readonly glob: ImportMetaEnv
  readonly env: ImportMetaEnv
}

interface Document {
  startViewTransition: (callback: () => Promise<void>) => {
    ready: Promise<void>
  }
}
