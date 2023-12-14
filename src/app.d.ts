// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
        interface Platform {
          env: {
            COUNTER: DurableObjectNamespace;
            cf_pages_d1: D1Database; 
          };
          context: {
            waitUntil(promise: Promise<any>): void;
          };
          caches: CacheStorage & { default: Cache }
        }
    }
}

export {};
