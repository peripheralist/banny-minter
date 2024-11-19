import { InMemoryCache } from "@apollo/client";

// ensure the cache is created only once.
export const apolloCache = new InMemoryCache();