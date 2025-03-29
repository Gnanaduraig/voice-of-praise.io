'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "24f988a089269216783b7b149e8a4584",
"assets/AssetManifest.bin.json": "f0df03a14500701149b60ae2c7cd5e10",
"assets/AssetManifest.json": "49d3201665e042d887e820b0cf909c3c",
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
"assets/assets/images/Livingston.png": "adaadf2e09e6659bf65ae5ced2e8aeb9",
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
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "556a7d15bc601f2f73baaac41514371e",
"assets/NOTICES": "d7c4c983db1ce4c35a7cf7a5e2b8eb75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0b4600c9793b826eb39f5c746ff6a60c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "9abebd26150a66b20c78317875820a5f",
"canvaskit/canvaskit.wasm": "a46b90002d1d325d871ae2d38e2de552",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "800282f058c0004dcb366470c173ce2c",
"canvaskit/chromium/canvaskit.wasm": "28ec52340b6b9c0e480da778f94bd176",
"canvaskit/skwasm.js": "9c817487f9f24229450747c66b9374a6",
"canvaskit/skwasm.js.symbols": "8b25a16c0682bbeaca8276b82f5fb2d3",
"canvaskit/skwasm.wasm": "dc514d4b56ab1539a5d39b4ce7935d8c",
"canvaskit/skwasm_st.js": "7df9d8484fef4ca8fff6eb4f419a89f8",
"canvaskit/skwasm_st.js.symbols": "019e399239bf98e101cc3dbba8e8c63c",
"canvaskit/skwasm_st.wasm": "654e23ae2a4b10b7f7f49ecb4f59348c",
"favicon.png": "bed64ae4fc238e3d0d9f914204a3ef60",
"flutter.js": "1e28bc80be052b70b1e92d55bea86b2a",
"flutter_bootstrap.js": "71c616bef4eee20caf949478024a5481",
"icons/Icon-192.png": "a6e0b335b99ed4d7183957086a56fac2",
"icons/Icon-512.png": "675a23232e5242ef8e807d1f218fcf0e",
"icons/Icon-maskable-192.png": "5d1158a3fbc3dc33ace158c0a344a6f5",
"icons/Icon-maskable-512.png": "0ff2835848641a20a3c5e92da87be49f",
"index.html": "5e458776d877602df5fa6610b0b3edc7",
"/": "5e458776d877602df5fa6610b0b3edc7",
"main.dart.js": "fd75128c2ea84e419418a5326c2a235a",
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
