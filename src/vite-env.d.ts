/// <reference types="vite/client" />

interface MetaImportEnv {
  readonly VITE_BACKEND_PUBLIC_URL: string;
}

interface MetaImport {
    readonly env: MetaImportEnv
}