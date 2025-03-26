'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c9cc5afe55530285a1397eccfc2bed42",
"assets/AssetManifest.bin.json": "a6e16cae1ab3a4e6ace08e4df776bd7c",
"assets/AssetManifest.json": "f4194cfc15d542fbfd3eaa8e2a2fe395",
"assets/assets/images/announcementbar.jpg": "bccd5da00151c111287d70b4f3eb88f1",
"assets/assets/images/announcementbar_desktop1.jpg": "09eb1d3692cfb257d3c96282d928a8e7",
"assets/assets/images/announcementbar_desktop2.jpg": "0f2820b42dfbcb02e1176f9058c75cd8",
"assets/assets/images/announcementbar_mobile1.jpg": "637fcb0a50514fc90024970ec5ccf7b9",
"assets/assets/images/announcementbar_mobile2.jpg": "cb92e4fe77f00ca1f31f52e8eccc7c21",
"assets/assets/images/asasa.jpg": "1c7538ac295efc68728cb7dce17bf32e",
"assets/assets/images/belfield%2520sir.jpg": "a9f8948aaa32e06d8154302f5f49d8d8",
"assets/assets/images/churchele.jpg": "cd4bf7dc66bd9ff8184e029ad55511d7",
"assets/assets/images/cristoganna.jpg": "36ed04d23822020e8b507b7961d92224",
"assets/assets/images/family.jpg": "58bf501dc040ea9fbf32d8d50ece1d8f",
"assets/assets/images/furst%2520prize.jpg": "7d14a18e3f07ea2a17c2392e52c5f7b9",
"assets/assets/images/Gracia%2520CAM%25201%252001.00_03_45_18.Still001.jpg": "e549476deddacd8247107185e360e091",
"assets/assets/images/Gracia%2520CAM%25201%252001.00_03_57_03.Still001.jpg": "5356ebfe16ee270ae0adf2a9a01a8f77",
"assets/assets/images/Livingston.jpg": "faa2cba8610de3d171b71afbfd90893a",
"assets/assets/images/Livingston.png": "6763e5aa27992896563f262243324851",
"assets/assets/images/pastor.png": "6e9de939bdc3bb6d25297fc2b2a4be37",
"assets/assets/images/PRAISETV%2520LOGO.png": "3b65b0b8b428075ad306ebbea7e84044",
"assets/assets/images/Praise_TV_Compatition.jpg": "2368e70cde9922dabdee2a210af95301",
"assets/assets/images/thopur%2520kottum%2520paniinil.jpg": "f702585bb04945109179010ca28fc3cb",
"assets/assets/images/THUMBNAIL%2520SACRED%2520HEART.jpg": "e086db4597148b93dd986966f98a5cd4",
"assets/assets/images/Untitled-2.psd": "63d9c6a668be49dd2316cf62e90d3b1a",
"assets/assets/images/voiceofpraisename.png": "69e9594ad0674aa96a78726d009ee57b",
"assets/assets/images/voiceofpraise_logo.png": "3ab82e1d3391d0f326ba73242cf1b756",
"assets/assets/images/YESUDASAN.jpg": "2812d2663751305e072641f7b3f169ff",
"assets/assets/images/YESUDASAN.png": "759c22470adc3378f53a6d7e1f12ae25",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cba8f2f5c890964ca5c0fefc8afb032a",
"assets/NOTICES": "88057e2ca814d48425e14d9f0f89258f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "bed64ae4fc238e3d0d9f914204a3ef60",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "239bdca67e371b35351b81b465a49be4",
"icons/Icon-192.png": "a6e0b335b99ed4d7183957086a56fac2",
"icons/Icon-512.png": "675a23232e5242ef8e807d1f218fcf0e",
"icons/Icon-maskable-192.png": "5d1158a3fbc3dc33ace158c0a344a6f5",
"icons/Icon-maskable-512.png": "0ff2835848641a20a3c5e92da87be49f",
"index.html": "11bc83224b94609156926282dc5f9bb5",
"/": "11bc83224b94609156926282dc5f9bb5",
"main.dart.js": "391dc81c7a348732596e79d026153de3",
"manifest.json": "24344508b1a4eafe941afb4c769ad11f",
"version.json": "ce4ec47fabb360405177cb36b2faba7e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
