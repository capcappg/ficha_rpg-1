'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "964a6e701a0e9ec3424e51fa00f9dab9",
".git/config": "54399288ff833500f7d942f974322802",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "209aa3dc99e31abf114852541e574210",
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
".git/index": "15c0fdc63f7dcf1f820430c9132a5fc6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "956df88315ea1925c350a154f1f9c326",
".git/logs/refs/heads/master": "b56f9e3cf2809b3b705aaaf4b82e7f9b",
".git/logs/refs/heads/test": "307d376732ce16e496fec82b2e84dc23",
".git/logs/refs/remotes/origin/master": "fd522795232d400f6f81fb91035c3031",
".git/logs/refs/remotes/origin/test": "4171a52011289b24c56a8b27f30b68b0",
".git/objects/02/08da38bd49ddde1266284490d39e1f82154896": "8cafdcf7febcad4364dd30131a7629e3",
".git/objects/04/449fd3db309a007c2965a06a106eb3174b5c77": "e0b23ea02c9eade90c35b4b9d52c2260",
".git/objects/05/36d8a282adb6f97ee895152a6f6e71d08e178f": "71610bea39e519ec3eeab663d89b5d08",
".git/objects/05/b214dfa507ca787b261b393957fcd90c612794": "4ae1032f5923e322248ec1213c096b76",
".git/objects/06/e3b1c16d1ede913c66cbbbf3b686f3df68854c": "c11eb0152124e0c89b3029268ddcf5d9",
".git/objects/08/9a535fadc0351b940bf2419e107e53abbb93d2": "80716f3043f1da871a183685ce06c784",
".git/objects/0b/49baf27fad583a42ff14299abe259a9b3c661b": "bd28d12ea4914fdc1a1c5ddcdcb2816e",
".git/objects/0c/2d0a76cb683a9b2f47451223637de25d81292e": "3e91269c463bb8dbd2f657f92af60549",
".git/objects/0e/cc5613e896437002481534a7af9470a28941dc": "5f10a6cd38e087b2e2aab697e56d4ebc",
".git/objects/0f/6b162d39b4b62b54f27ab26b5765ab86c7d21f": "aef645255372dfd340fcbe9a2748f7da",
".git/objects/10/fc5637aacda13d4ec110658536868809887d06": "28e773ec6855a5c4aa6e8af5cf0f05b6",
".git/objects/14/6c2782a59995bbb0844d5d3b6eb5a2ac92e5a2": "fd8602dbbd430a520447abb7343a8316",
".git/objects/15/0a79d16f49d4ae829c3af48d96c99084374e88": "e1d01da3eb56eb7207f5ab98c5b0333f",
".git/objects/15/126753c214ebbb9796f6960ac7d8e84b47471a": "00fdcc338d54994a37b64550ce7f2db3",
".git/objects/15/be452a6c7dcc0a9beb370b4c7148aad4c12c69": "a5de8a368a4ea6a214ad01a05607ccfb",
".git/objects/16/3e5a4eb098da8347c4947b9c29987732e1ad48": "8e1f8e0a6dec8ee3ff7fe574776f4cb9",
".git/objects/17/023d86cf9e9fa687ee7f19f376d7b07025baf5": "ab76131ce80aa16224f7aa0445a70ba2",
".git/objects/17/cbd9926896f38f26076297a0619973c81c6895": "83d776295bb17a2c60c39a966f3ff435",
".git/objects/1d/f36698661506bea798b6bb2cdbe80f2969ad54": "8c92288641ec7a1c33e15c0027ee7018",
".git/objects/1f/a68493f71be182b68a03f0ff911eef12beb961": "50a329327a3890310d820ae409e3843b",
".git/objects/1f/a8c61221535b5e865ea9b5a748997798a0582f": "bf9a7c9e6a209a35ef316bb206fa0953",
".git/objects/20/5884bbd2031c00aa4841b351b875eb4498d747": "50bb6472c72f287dbd5f34c2409cfa45",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/d6ada70c984bcdb3b442b4d54853a74b007768": "f26e03c591ce66ea0c3cc4232202b354",
".git/objects/25/c25ceb3620968586fb64486b0259c45c8811da": "0591ef50701b31d2c2258c58140f92cc",
".git/objects/2a/8c8439947688a80f359f01db0dab97bc2ce389": "91cd9934582201814ff2e9e5f4e0bdeb",
".git/objects/2b/93dc014c9969af65b3c09c212315af43f40daa": "1c56dd3cc77bc70a1f887ba24f766550",
".git/objects/2d/f35787d0e2b806119272270a624475abb17db0": "0c9e85d72d4060eb5cf12f6c2adc4b1c",
".git/objects/2e/74179fdfb6de6be877fbfd61d4da97554e0d3c": "2f5e352f1e0e63a281d97363fa9e27a9",
".git/objects/2f/0cfab91401f5f6c08558dbe548b785f656a8e9": "087e49d453904828ca0b444dd0f4df92",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/5a6b2d6d54caab32dfb495063c041bf5b68058": "71c4889f934f2b5bff5c1575719d2a8c",
".git/objects/33/b22e1b2be91fe211669488623e7b422c34d117": "19f7fedf00ef0ccbbe20a3e09f771233",
".git/objects/37/5b1134fd555ad0c9608448b7feb521778439ad": "3f573883cdfbbe9b90fa2bac0681c664",
".git/objects/39/26e19ed9d924dc9fb1c759f1cbe4d4882fc265": "73ac6c2913afa0ce3a8747290bb4ff5f",
".git/objects/3c/2ddd233f3bba2f1671d49268b4f51fc280af48": "41650f77b81b285bee226d7efd029d99",
".git/objects/3f/35b13b2dc10ef0f4ccf5e6c8b8279e1b0973a3": "11b25b271aa8bf3b60d7f690f5599557",
".git/objects/4a/5f032e2e2e6ed7a9b06cd372e6e21d91fc54f5": "21a365366687e733964b080a13dc378e",
".git/objects/4c/efd50e9c802fcca794e054599b805f92008736": "fd10e418ae7a290b48dc03fcf0d7a318",
".git/objects/53/8d36a8dd7f8b175f389b64fc709bed63c82c27": "1e804f45a5514d472f964df78081493b",
".git/objects/58/c147ef558e8354b4c730233889b8a66af52af9": "c8411c0359fc7b6cbecda54cd591ce4f",
".git/objects/5a/a1feb6440bd9c0005ac33598c25135f2fb59b9": "01e5bc7565b19f5910cfd3df5f35a283",
".git/objects/5a/f2c34300596197595aa45865a5e5a55fabde51": "8aaca9d2c324242d28b9cccdae83c5a2",
".git/objects/5c/7b25ecc122adf7ae76286c9e3fc972a92aab13": "5a83f17dc0ae6a40032cfeda7dcb6ab9",
".git/objects/5e/8bc2f37c55e42bc2f8bc6f3c9d45e0024dc1db": "6a5264497c5999661c95238e4e41280f",
".git/objects/5f/020d34049b6da6fcadf95cd3a72e34f1ef8dbd": "99bd1b0a00ea76ff27df4a14920667ea",
".git/objects/5f/e59de549de0f9ab1cd9e596e0d54ad6c0fe83b": "ee7c78423d115e482bdda1f8fce11272",
".git/objects/65/bfb13e4a7d5ce7e37e0701857214ec1176d9d2": "430f279631155221c379e39b65ff5bf9",
".git/objects/67/dd4c1df97e34124ac1c16b0d47387e4e6f92b9": "fb5d0ae73609af68c9cb75f9c6888404",
".git/objects/68/e0176c9ebd621cbc59fb0147ec67684c4ab114": "42e1af26dd3afe9d143f36022c2f681f",
".git/objects/69/5fbc08ab54cd123cbab378f85aedb1442f8c2e": "6e93f43be4690f3b216d3f15cb6b2723",
".git/objects/6a/9f6bab020ba1538a527dcb2411b412e54a98fb": "5c4f080eade940c8b644f704b6f4fc4f",
".git/objects/6f/2be033a730eea68d389e93f929fb2beb4c84d2": "3b52d44999d560ffeee4c0ed506c9d15",
".git/objects/6f/b99bc88185c7783d184d47e7849b2228c12c2c": "80171a3cde42f8d3c248392fa453a7b1",
".git/objects/71/90b5385ff0bb3ae6869e01f1ad1c5fca78a449": "3e52ecb776ddcd2fc2002178cbdd336c",
".git/objects/75/9f4004fd0d9f6507354c4fdf6af6284677f937": "89fb30abd6ade3ecd9ef3996362a1971",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9aab6db811b9bae81789dcd55de3147dde4362": "1230ceb2dad0d36117b6d834bac2bc8e",
".git/objects/7b/9d899b67bb953e0773cd7595c8080adfea5b0b": "351bdc8ebe016855d1c9449afc04b2df",
".git/objects/7e/504181bcf7409c7bbf53f90a55fc687b408dbc": "ce398090e10f18f6daf92766a1c46063",
".git/objects/7e/c86e06cf9d2219a3c0c15279f87a84f1d1b2d5": "2c51762895b289d60bd23914b8eeef9d",
".git/objects/7f/8a4d80a8f3181499475c489eae0aae4b8c2e61": "9ea625f48f3959bb501ad5c724cc985c",
".git/objects/81/4014efabb4bf9b9253b2e262965dd2be4d86f6": "75590e49426a8c06301425fb1dc962fa",
".git/objects/82/ac8ef2714530ae781a7ffdc174c1ae86e32f8e": "abe6cb356b5d06adbcd123da174e51b9",
".git/objects/85/335c7721b5fb034ea5152bba45cfa62c76b5ac": "f8109a8b3d6d1fa9f22a038255eb1f3b",
".git/objects/88/160595a19d30db7c1f9b6acbd69314e262e04a": "a3b2db8296d702284b01fcaf4cefed76",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/8d/8e52573b170e7e9d7d48f1e42eda5b9d88ddf2": "5e8523aef50dae5848395c2614745606",
".git/objects/8e/9c97eca487c23773200a8b39f0733370157668": "d418de5f710ff0e5e9392b7042ee4cd8",
".git/objects/8e/d48c7456692875f07b8c63814e55733f8c85c4": "806021036664f68035b652dd10b0b51f",
".git/objects/8f/941ed3403d2233e23261d046f5b7140dd2a595": "1562a03c55bf35f441e8d2410c09377a",
".git/objects/93/9be04898e0f646e920372b51ff83e1a0fd792f": "02d29fdde7a207bbb6ce5eaec3368ebf",
".git/objects/93/fb9eb907611194c05123d4e210d7f4fc673e71": "2797ffe53665b59605beebe03eb85c9d",
".git/objects/95/6e8e998d405b9ffb635e6484089418942d64a9": "cbe67be8ab55e326f2a638a24f86797e",
".git/objects/98/627c7d2237a8dee57044e3401d6cbaddaf1abe": "6924ed841c1fcab650bb080516c0e5d1",
".git/objects/9b/c321f5b8e149e1c95ece08f024d55d45d30f3d": "367675fc4e3a49b8507c4176560c36d6",
".git/objects/9d/4410789c8c90410878b5628344a81f9229c00a": "573a8ef1189d65771234495ee1e943c2",
".git/objects/9e/230da03e4ec14c5f3347cc7d5a0b9459ad1efb": "370644618fe37c9d16fb3dcd20568a2e",
".git/objects/9f/8aeac9e1228af460e34f0c1283b93bb95e7868": "027bc7e8cdfdf3fabb7f86d80c2458f0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/d353b7871f755095a26d52d7f1b2c2cc0cbde4": "7c17b131f9830c81b24ab8d59e112016",
".git/objects/a4/8c4881f8c9242697c67890dc2cfa0bb8f96bc8": "15a1dda8c2833acbbe13165784ebbbfd",
".git/objects/a5/6089189de00894384ed4075828f0e901e9df10": "e66b6c23e66f2ad1bd5dfc9b15c7d6e7",
".git/objects/a8/4029ecf728a391db7a63be5bd23621d50f8b06": "5e7a8dcdc0ef99117cf7685839d62cd0",
".git/objects/a8/96fdae5f23a40fa5be9c8635388e86a9bf59e8": "3bc4fff5888f858755c1d89c22c21aec",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/8deb8d58319cebc64d2188a0d02e76f243e3f1": "135f215de8f77d1c8412c88bb073aba2",
".git/objects/ae/b1892f3ab543dcbe230dbf831b5c2742d67f37": "0fe9bd5918117ae2b1b54a5db1a04b4e",
".git/objects/b0/22ba475224954b76082a0d1b308689cf902f6e": "f9a2eafa82233c41ba366b48ad7f02f6",
".git/objects/b2/50a32db3f714b1e92500f1b5e1f150cf3cd8bf": "9f7fa913c9707dac85ad1b419350e9c2",
".git/objects/b3/e3361f30610773d8307568e6814a2a268865da": "6139733c12e62ba19dd6de964a402bbc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/b75230c03139f4b0c9d744b0e5baebecff0ef2": "d1e07ad4b5a89955abf4b076b3a7f36f",
".git/objects/bd/d8ed389f9adcd2ffb0a1c5074a1178466c49ec": "56d26fb57b6ee1c60524b0044c49b632",
".git/objects/bf/fafb02404b1160fa309c187cb9909bb5b622af": "f5559e376430df0aa604155ec372a466",
".git/objects/c3/d504626ef9c8a2a3067a1092e36790e71b8c6a": "bd25d75b208f5e47384297a2137f2852",
".git/objects/c4/01b0b54d060a11246bb1864b6dd87b16a77603": "db2e14381f9388dbea12524457d419e1",
".git/objects/c5/84903e3a85b768026d26c730ddd6889f0a0b8a": "b19cb96b32cfbc71e6ac01a52ac489ef",
".git/objects/c7/8eca39ed93544bfb848eba8bf8c6f74da82f9d": "ca74e864e2481ad90f4a2b3d591fc986",
".git/objects/c8/0f9ab688d26d62af51a8bc87a0abda88dcd2ff": "06545b1179c275ebbfceee3c92fc2aff",
".git/objects/c9/24bad17a832e70d9f7fe40eb773ad0bd7fba2a": "f0bc82b68adb4103d8f3dfe25f9c3d57",
".git/objects/ca/b0e06a104e936da55dea0c5d038244e0409c8e": "92a4cc74498d83ab26a4b90542d69d24",
".git/objects/cb/0075f465d9e655de79a21b280497621b9ba1bd": "fd46b38b83d8069fc9568bedaa9ad619",
".git/objects/d4/d34e2b85e09277c31d339906d9e934fd21e558": "dade74367d3ca092c7af6ee21b9de514",
".git/objects/d7/ba23c591544f87520e8255d058f216317f51fe": "4b7e5aac0f63b4df29b60cffdca85283",
".git/objects/d7/d017823ded8a9b41f324079f80a1d9d5327dad": "81c6d6fd83e1c04e60b972ff51097294",
".git/objects/d9/ef0a63107a73c8a5bc5fb0e8fbe29a2392354c": "5c19a905a7fc70eb16b804bf53fa8096",
".git/objects/db/44619d12fe136a5af11375bf4d6d57c58edbe7": "a264c571d45f9aa45681af4c43f272ae",
".git/objects/dc/5f44d5f8200a095f127cc49060ad7f7573bcb9": "a38e1ff4311bde67d78aadb87d748294",
".git/objects/dc/da9198a8211704a97bc6e27e393665630e898f": "ae57d52aab57fb7aaaba34aeb29f65e0",
".git/objects/dd/b724d21bcb701237ed7e51bbd2fa1b7df69907": "a6301cb999465c55e76c9605863c7b58",
".git/objects/e1/ee54b9f7911afdbe8c1bdcf87672e048e5f8f7": "b76cdedfa8efb88453f8a70705533686",
".git/objects/e2/8b762f061ac87d7e75fcf60e5b76751ee4ee30": "ab533317206440e874b597af965c3ab0",
".git/objects/e4/5f95564683b621eed20571c5db2a8ecb161157": "442cffca51b1071f82b27ed533189b4e",
".git/objects/e4/a41723ffebe48c081a28bbeed2515b0377ccbe": "7aa749680feddeef4cf72f1731dd19a4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/e4d2e60aaf9f2a3f96103f56f4c9b09efd56c9": "e515f1b60df1ae63a5e99c08148e3926",
".git/objects/eb/f751f3dd770f6d85b920c36741f2612fe59702": "b10d84c604def7be416a66cfcc3e9ca6",
".git/objects/ef/d97e3f72f866381942f73cc599fc0328c2745c": "830973cb0f6e69813c4b3f0f6b0d8677",
".git/objects/f7/052c92e35aa129f8cace0b54a38041508d60b0": "638e4bc4b49fa5067f136c50612d7010",
".git/objects/f7/66eb9b39a0c01213bdd3ae8100ed185b6c1199": "0a3065d7fdbccaa916c97fca2b6f867c",
".git/objects/f9/1c9af20f1a48fae279e6a74c187db93efb3cf4": "ee032b7b6081d2c70653180b14952a6a",
".git/objects/f9/41c9f1210ff6783208318d104707848a3d4b53": "b16b9cdee30c0095884d5b83dabafbd0",
".git/ORIG_HEAD": "f5ebb4cc4ef434a9090c98885dbb898b",
".git/refs/heads/master": "5053d01c02d874a5da6f0d16bfb40597",
".git/refs/heads/test": "e0ceaeae8a862df8304cebb0732785b5",
".git/refs/remotes/origin/master": "5053d01c02d874a5da6f0d16bfb40597",
".git/refs/remotes/origin/test": "e0ceaeae8a862df8304cebb0732785b5",
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
"index.html": "b4345137015445f48fe923329d3bd6c8",
"/": "b4345137015445f48fe923329d3bd6c8",
"main.dart.js": "ac0cf73776e59369aeadf1a4434bbd99",
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
