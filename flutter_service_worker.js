'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b0fd74b1fe79314d023509cc593352ae",
"assets/assets/audio/break.wav": "ad30dde3023da6345de74cffa70390fb",
"assets/assets/audio/countdown.wav": "a750d311ab670831ea50f4e145a46ce7",
"assets/FontManifest.json": "f361723d1c2acc23d2dab76002257da9",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/fonts/nunito/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/fonts/nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/fonts/nunito/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/fonts/nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/fonts/nunito/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/fonts/nunito/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/fonts/nunito/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/fonts/nunito/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/fonts/nunito/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/fonts/nunito/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/fonts/nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/fonts/nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/fonts/nunito/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/fonts/poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/fonts/poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/NOTICES": "17664fd7eba7edffed21d8003e745f71",
"assets/packages/auth_buttons/images/default/apple.svg": "55dba81be7ba24dd88dbf9cc81de95e8",
"assets/packages/auth_buttons/images/default/email.svg": "3082146f3f124a005b10db6fe3109fe7",
"assets/packages/auth_buttons/images/default/facebook.svg": "042d64dc3864e72dee8ed5a25b514b11",
"assets/packages/auth_buttons/images/default/github_black.svg": "8dd7ed5ef65c02f30b4121eee588af6a",
"assets/packages/auth_buttons/images/default/google.svg": "1b57b430c55cb377ac0a88930bcdbd20",
"assets/packages/auth_buttons/images/default/huawei.svg": "82181eb0cd9622dfd588444a4dfe42a5",
"assets/packages/auth_buttons/images/default/microsoft.svg": "4f6ca3fa4b69eb5fca87e32ff32a044b",
"assets/packages/auth_buttons/images/default/twitter.svg": "4250a2b8958bcbef1a0fdb25d7fcce7b",
"assets/packages/auth_buttons/images/outlined/apple.svg": "db47e542919fcaf7d34748536b1deb49",
"assets/packages/auth_buttons/images/outlined/email.svg": "baff162b99d4cb10734919644984b8c7",
"assets/packages/auth_buttons/images/outlined/facebook.svg": "f251b931be2bae01fb489fe3a673ebb3",
"assets/packages/auth_buttons/images/outlined/github.svg": "7f95e5f428d5e503704489ae9059d680",
"assets/packages/auth_buttons/images/outlined/google.svg": "db08beb87c3bf1cffb0eab33ba45e21d",
"assets/packages/auth_buttons/images/outlined/huawei.svg": "9808b2adfd6d50759ac212f2524d89aa",
"assets/packages/auth_buttons/images/outlined/microsoft.svg": "da1f5b1904d6db32f0a328843ef6c194",
"assets/packages/auth_buttons/images/outlined/twitter.svg": "17f1f53b9a9a48f7eb9bef23297adc13",
"assets/packages/auth_buttons/images/secondary/apple.svg": "ada971dac266ff0002cbe1242969fac4",
"assets/packages/auth_buttons/images/secondary/email.svg": "9a8b80e244ab3faef8f215ec9042d826",
"assets/packages/auth_buttons/images/secondary/facebook.svg": "d716044a24525120c68a8aecd0f3ad20",
"assets/packages/auth_buttons/images/secondary/github.svg": "aa9249981ef0010785ac08f5ad311fd9",
"assets/packages/auth_buttons/images/secondary/google.svg": "3d9f5981ce3d70492c4f2669eda64ce8",
"assets/packages/auth_buttons/images/secondary/huawei.svg": "873b380209f2ece370272067b97cc9a9",
"assets/packages/auth_buttons/images/secondary/microsoft.svg": "363865e791ab614f76714d47f31cfe5b",
"assets/packages/auth_buttons/images/secondary/twitter.svg": "7e2e9892b0a7f923f55720429f42f4f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/empty_widget/assets/images/emptyImage.png": "6bb2d2c61bb39c0c571b95ae009acc4b",
"assets/packages/empty_widget/assets/images/im_emptyIcon_1.png": "545e13e1cabb2faf7eac9801f64f7f89",
"assets/packages/empty_widget/assets/images/im_emptyIcon_2.png": "bcff5e23332d92e74562eaf8f47c7bd1",
"assets/packages/empty_widget/assets/images/im_emptyIcon_3.png": "2698f6c94cec9450ced97499b70a34d6",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2cf3b4136cbb7724f8c88e2e86f4ff8a",
"/": "2cf3b4136cbb7724f8c88e2e86f4ff8a",
"main.dart.js": "a6ae7c711f55a3a09494ac6b4bb1ec6f",
"manifest.json": "a367b13345d1ff6b409100b1620d6517",
"version.json": "993667d034108634223d3d3022be67f2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
