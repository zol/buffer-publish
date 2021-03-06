/**
 * Shorten urls.
 *
 * Returns a Promise that resolves with the short url as a string.
 *
 * Results are cached, and a same request done simultaneously will be
 * queued to return the same info as the already-running request.
 */

import Request from '@bufferapp/buffer-js-request';
import AppStore from '../stores/AppStore';

class Shortener {
  static url = '/update/shorten';

  static pendingRequests = new Map(); // Stores pending shortener promises
  static cache = new Map(); // Stores results

  static shorten(profileId, url) {
    const params = {
      profile_id: profileId,
      url,
      csrf_token: AppStore.getCsrfToken(),
    };

    const cacheKey = hashCacheKey(profileId, url);
    const reqSettings = { credentials: 'same-origin' }; // Send cookies

    // If the result is cached, return it right away
    if (this.cache.has(cacheKey)) return Promise.resolve(this.cache.get(cacheKey));

    // If a request with the same params is already running, return a
    // Promise that'll resolve with that request's data
    if (this.pendingRequests.has(cacheKey)) {
      return Promise.resolve(this.pendingRequests.get(cacheKey));
    }

    const request = Request.get(Shortener.url, params, reqSettings)
      .then((response) => response.json())
      .then((result) => {
        const shortLink = result.url;

        this.cache.set(cacheKey, shortLink);
        if (shortLink !== url) this.cache.set(hashCacheKey(profileId, shortLink), shortLink);

        this.pendingRequests.delete(cacheKey);

        return shortLink;
      });

    this.pendingRequests.set(cacheKey, request);

    return request;
  }
}

// Map uses === semantics, so in order to compare by value, we're
// using a string hash rather than an object as the key
function hashCacheKey(profileId, url) {
  return `${profileId}-${url}`;
}

export default Shortener;
