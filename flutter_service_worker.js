'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "831286066f7c2c2ad7188502b05a3cce",
".git/config": "54399288ff833500f7d942f974322802",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f99f3e83fd9c6cf0a6c690818474822e",
".git/HEAD": "0ce6403a6ce600a65449f58beb160a0c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c5e50250727ddca30351a80259928dc1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a60ffaa978e8946896e4515057d9285",
".git/logs/refs/heads/master": "b56f9e3cf2809b3b705aaaf4b82e7f9b",
".git/logs/refs/heads/test": "f329493911e2659bfa93ff733080c183",
".git/logs/refs/remotes/origin/master": "fd522795232d400f6f81fb91035c3031",
".git/logs/refs/remotes/origin/test": "a854c68f1b5c4a6a586a51fca0f60f25",
".git/objects/0f/6b162d39b4b62b54f27ab26b5765ab86c7d21f": "aef645255372dfd340fcbe9a2748f7da",
".git/objects/14/6c2782a59995bbb0844d5d3b6eb5a2ac92e5a2": "fd8602dbbd430a520447abb7343a8316",
".git/objects/15/be452a6c7dcc0a9beb370b4c7148aad4c12c69": "a5de8a368a4ea6a214ad01a05607ccfb",
".git/objects/16/3e5a4eb098da8347c4947b9c29987732e1ad48": "8e1f8e0a6dec8ee3ff7fe574776f4cb9",
".git/objects/17/cbd9926896f38f26076297a0619973c81c6895": "83d776295bb17a2c60c39a966f3ff435",
".git/objects/1f/a68493f71be182b68a03f0ff911eef12beb961": "50a329327a3890310d820ae409e3843b",
".git/objects/1f/a8c61221535b5e865ea9b5a748997798a0582f": "bf9a7c9e6a209a35ef316bb206fa0953",
".git/objects/20/5884bbd2031c00aa4841b351b875eb4498d747": "50bb6472c72f287dbd5f34c2409cfa45",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2a/8c8439947688a80f359f01db0dab97bc2ce389": "91cd9934582201814ff2e9e5f4e0bdeb",
".git/objects/2d/f35787d0e2b806119272270a624475abb17db0": "0c9e85d72d4060eb5cf12f6c2adc4b1c",
".git/objects/2e/74179fdfb6de6be877fbfd61d4da97554e0d3c": "2f5e352f1e0e63a281d97363fa9e27a9",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/5b1134fd555ad0c9608448b7feb521778439ad": "3f573883cdfbbe9b90fa2bac0681c664",
".git/objects/3f/35b13b2dc10ef0f4ccf5e6c8b8279e1b0973a3": "11b25b271aa8bf3b60d7f690f5599557",
".git/objects/4a/5f032e2e2e6ed7a9b06cd372e6e21d91fc54f5": "21a365366687e733964b080a13dc378e",
".git/objects/53/8d36a8dd7f8b175f389b64fc709bed63c82c27": "1e804f45a5514d472f964df78081493b",
".git/objects/58/c147ef558e8354b4c730233889b8a66af52af9": "c8411c0359fc7b6cbecda54cd591ce4f",
".git/objects/5a/a1feb6440bd9c0005ac33598c25135f2fb59b9": "01e5bc7565b19f5910cfd3df5f35a283",
".git/objects/5e/8bc2f37c55e42bc2f8bc6f3c9d45e0024dc1db": "6a5264497c5999661c95238e4e41280f",
".git/objects/65/bfb13e4a7d5ce7e37e0701857214ec1176d9d2": "430f279631155221c379e39b65ff5bf9",
".git/objects/71/90b5385ff0bb3ae6869e01f1ad1c5fca78a449": "3e52ecb776ddcd2fc2002178cbdd336c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9aab6db811b9bae81789dcd55de3147dde4362": "1230ceb2dad0d36117b6d834bac2bc8e",
".git/objects/7b/9d899b67bb953e0773cd7595c8080adfea5b0b": "351bdc8ebe016855d1c9449afc04b2df",
".git/objects/7e/504181bcf7409c7bbf53f90a55fc687b408dbc": "ce398090e10f18f6daf92766a1c46063",
".git/objects/7e/c86e06cf9d2219a3c0c15279f87a84f1d1b2d5": "2c51762895b289d60bd23914b8eeef9d",
".git/objects/82/ac8ef2714530ae781a7ffdc174c1ae86e32f8e": "abe6cb356b5d06adbcd123da174e51b9",
".git/objects/88/160595a19d30db7c1f9b6acbd69314e262e04a": "a3b2db8296d702284b01fcaf4cefed76",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/8e52573b170e7e9d7d48f1e42eda5b9d88ddf2": "5e8523aef50dae5848395c2614745606",
".git/objects/8e/9c97eca487c23773200a8b39f0733370157668": "d418de5f710ff0e5e9392b7042ee4cd8",
".git/objects/95/6e8e998d405b9ffb635e6484089418942d64a9": "cbe67be8ab55e326f2a638a24f86797e",
".git/objects/9b/c321f5b8e149e1c95ece08f024d55d45d30f3d": "367675fc4e3a49b8507c4176560c36d6",
".git/objects/9d/4410789c8c90410878b5628344a81f9229c00a": "573a8ef1189d65771234495ee1e943c2",
".git/objects/9f/8aeac9e1228af460e34f0c1283b93bb95e7868": "027bc7e8cdfdf3fabb7f86d80c2458f0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/6089189de00894384ed4075828f0e901e9df10": "e66b6c23e66f2ad1bd5dfc9b15c7d6e7",
".git/objects/a8/4029ecf728a391db7a63be5bd23621d50f8b06": "5e7a8dcdc0ef99117cf7685839d62cd0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/8deb8d58319cebc64d2188a0d02e76f243e3f1": "135f215de8f77d1c8412c88bb073aba2",
".git/objects/b3/e3361f30610773d8307568e6814a2a268865da": "6139733c12e62ba19dd6de964a402bbc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c3/d504626ef9c8a2a3067a1092e36790e71b8c6a": "bd25d75b208f5e47384297a2137f2852",
".git/objects/c4/01b0b54d060a11246bb1864b6dd87b16a77603": "db2e14381f9388dbea12524457d419e1",
".git/objects/c5/84903e3a85b768026d26c730ddd6889f0a0b8a": "b19cb96b32cfbc71e6ac01a52ac489ef",
".git/objects/c7/8eca39ed93544bfb848eba8bf8c6f74da82f9d": "ca74e864e2481ad90f4a2b3d591fc986",
".git/objects/d7/ba23c591544f87520e8255d058f216317f51fe": "4b7e5aac0f63b4df29b60cffdca85283",
".git/objects/d7/d017823ded8a9b41f324079f80a1d9d5327dad": "81c6d6fd83e1c04e60b972ff51097294",
".git/objects/dd/b724d21bcb701237ed7e51bbd2fa1b7df69907": "a6301cb999465c55e76c9605863c7b58",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/e4d2e60aaf9f2a3f96103f56f4c9b09efd56c9": "e515f1b60df1ae63a5e99c08148e3926",
".git/objects/eb/f751f3dd770f6d85b920c36741f2612fe59702": "b10d84c604def7be416a66cfcc3e9ca6",
".git/objects/f7/052c92e35aa129f8cace0b54a38041508d60b0": "638e4bc4b49fa5067f136c50612d7010",
".git/ORIG_HEAD": "5053d01c02d874a5da6f0d16bfb40597",
".git/refs/heads/master": "5053d01c02d874a5da6f0d16bfb40597",
".git/refs/heads/test": "4cdd37b0845a6c85bb1169edb2383224",
".git/refs/remotes/origin/master": "5053d01c02d874a5da6f0d16bfb40597",
".git/refs/remotes/origin/test": "1b6bd2f1cc235dfc6417b02f96d5a075",
"assets/AssetManifest.json": "4c8338c941e64b998a6f4c26c9d17fa9",
"assets/FontManifest.json": "82af777e9a0cff8bdeed296e11c5a097",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/images/Alexander.png": "23b7ca45473ef82fe468b2641740931e",
"assets/lib/assets/images/Noah%2520Lasley.png": "0a5f654d1095bf05fcc492592a95ba04",
"assets/lib/assets/Roman_New_Times.ttf": "1c5809be16126a43040d35dcb3ee109b",
"assets/NOTICES": "57bbbaefff95d3742fd4f9caa43f571e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "49db5c578a6dc5efc661a759a9456d33",
"/": "49db5c578a6dc5efc661a759a9456d33",
"main.dart.js": "47263ae8ada1a79543512a8cc81e461f",
"manifest.json": "e35ccb9235249a550e6617e44bc22e8a",
"version.json": "38f3127cc0615207488186ffa8d832d5"
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
