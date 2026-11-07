interface ImportMetaEnv {
  /** 'true' on an own domain (base /): Russian page at /ru/ and / redirects there. */
  readonly PREFIX_DEFAULT_LANG?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
