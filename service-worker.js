/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/05/30/rethink-the-blog/index.html",
    "revision": "f56362466be9feb82aeee5199364d854"
  },
  {
    "url": "2020/06/02/peer-pressure/index.html",
    "revision": "1a68092b3adeed6bef5c68335410eb63"
  },
  {
    "url": "2020/06/09/latex/index.html",
    "revision": "25951c79065b8e3069883f3f10cbbc57"
  },
  {
    "url": "2020/06/17/linked-notes/index.html",
    "revision": "a7c8bcbf31951fc27d5c4179373edcc9"
  },
  {
    "url": "2020/07/06/anxiety/index.html",
    "revision": "6c2c6b31f06825c1fe1a349598dd0553"
  },
  {
    "url": "2020/07/09/rejection/index.html",
    "revision": "adb2c905935d0b91ece709adccd27861"
  },
  {
    "url": "2020/07/18/build-linked-notes/index.html",
    "revision": "ce32bac3134101cf73186931aa7ec504"
  },
  {
    "url": "2020/08/06/keep-going/index.html",
    "revision": "c85196b449fd02417d42dc145816042e"
  },
  {
    "url": "2020/08/13/change/index.html",
    "revision": "bef2bf45dca73ca7af24ff32fe0b291a"
  },
  {
    "url": "2020/08/13/hololens/index.html",
    "revision": "321075deaf6415e2959423e9c0562bdb"
  },
  {
    "url": "2020/09/02/suffer-from-fear/index.html",
    "revision": "5d58e123f469df8943f28ed5a8ba5b3a"
  },
  {
    "url": "2020/09/13/hackintosh/index.html",
    "revision": "c42c246abbebc0d67eb209b94a0810f2"
  },
  {
    "url": "2020/09/19/simple-life/index.html",
    "revision": "626e027d4623f065286fb9a467a63f0b"
  },
  {
    "url": "2020/10/04/tricky-mars/index.html",
    "revision": "9908093f8c8039686d1414dc944cba80"
  },
  {
    "url": "2020/11/16/try-the-best/index.html",
    "revision": "796804ec4e587bd6bb3274fbc72e9cea"
  },
  {
    "url": "2020/12/10/prepare/index.html",
    "revision": "4dda5fe39cca6eddc13995442a8a99d6"
  },
  {
    "url": "2021/01/23/end-of-the-semester/index.html",
    "revision": "f25dacba693348e2d754de31b6ce738e"
  },
  {
    "url": "2021/03/13/pytorch-source-1/index.html",
    "revision": "f94c43f3e6bd793c8107b8e379f6f2af"
  },
  {
    "url": "2021/03/30/pytorch-lightning/index.html",
    "revision": "6d85469d0ef87e27d9a556964866607d"
  },
  {
    "url": "2021/04/02/pytorch-source-2/index.html",
    "revision": "765242a4ae18754524b582ac3f32094e"
  },
  {
    "url": "2021/04/18/pytorch-source-3/index.html",
    "revision": "1fa49a90f729d5490d9727b1db542cee"
  },
  {
    "url": "2021/05/21/webassembly/index.html",
    "revision": "64bbe04127e03a136e95cb67d500d0de"
  },
  {
    "url": "2021/06/14/wasm-memory-management/index.html",
    "revision": "018d3e60fcd3c6d103698747e4ecb751"
  },
  {
    "url": "2021/08/30/best-editor/index.html",
    "revision": "e597acfc3dfb0579e170f40ae5b64484"
  },
  {
    "url": "2021/11/29/tiling-windows-manager/index.html",
    "revision": "c4889be41983fc012482c74996defb83"
  },
  {
    "url": "2021/11/30/dl-on-web/index.html",
    "revision": "99812e999475004940cdaa43b1561a59"
  },
  {
    "url": "2021/12/06/topography/index.html",
    "revision": "9affc3f4110760dacf0ffbd11322b84b"
  },
  {
    "url": "2022/01/08/the-editor/index.html",
    "revision": "a89d9f62348b1049a7e834318c7501c6"
  },
  {
    "url": "404.html",
    "revision": "e379c3113235ee9c25b9116eb90a2060"
  },
  {
    "url": "assets/css/0.styles.14fb6a50.css",
    "revision": "f0582715c436d234f2665233db3064eb"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/opencore_file_structure.7ea585ea.png",
    "revision": "7ea585ea84ec17812be0685218aeddc9"
  },
  {
    "url": "assets/img/pytorchLogo.6c14bf95.jpeg",
    "revision": "6c14bf9583285a18b225fef7dc1821c2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/structure.0eb99845.png",
    "revision": "0eb998458690747e3e1fbdd82638f6fe"
  },
  {
    "url": "assets/img/tensorboard.129fb2d7.png",
    "revision": "129fb2d77880defe14595c6bbac4bca4"
  },
  {
    "url": "assets/img/training_bar.f7e4463e.png",
    "revision": "f7e4463e3c4c69e1eee2d0f0cffa955d"
  },
  {
    "url": "assets/img/wenkai.361b4529.png",
    "revision": "361b4529ac7a1e5388e23627b0b6280a"
  },
  {
    "url": "assets/js/10.70f7a74d.js",
    "revision": "106b35fa81a82def79b1186cf0c83aee"
  },
  {
    "url": "assets/js/11.dd6dac4c.js",
    "revision": "c040a76c8ffbea7addf691aff8477be6"
  },
  {
    "url": "assets/js/12.2cde1e42.js",
    "revision": "28fa2f1a12d2e5fa0951edd7293cdc4a"
  },
  {
    "url": "assets/js/13.9bcf6dc7.js",
    "revision": "d6ea54ecc88efb040f81a5a2fecc7c64"
  },
  {
    "url": "assets/js/14.b5f285d2.js",
    "revision": "3cd991a63347a9e25735000b5323ca20"
  },
  {
    "url": "assets/js/15.dab0a3f7.js",
    "revision": "8f16f4dd4d60d9d958d60f50a6f114da"
  },
  {
    "url": "assets/js/16.882af9f6.js",
    "revision": "2826824e8e5b02a6d4ae22959c95359f"
  },
  {
    "url": "assets/js/17.3c6c9032.js",
    "revision": "a1a3f36f2f3c774c3bfe7520a7257de5"
  },
  {
    "url": "assets/js/18.3dc9eb95.js",
    "revision": "80e2a7d77a110d816bb86387fff9a2be"
  },
  {
    "url": "assets/js/19.03ff0086.js",
    "revision": "fbbb937430d16e717dfec92f46f0ae01"
  },
  {
    "url": "assets/js/20.52b478b9.js",
    "revision": "e546b44e2d8bdcf4a10327cda2bc11ad"
  },
  {
    "url": "assets/js/21.31eef441.js",
    "revision": "7df933b53c556e6660e2a16e17a83dd1"
  },
  {
    "url": "assets/js/22.de0c58e9.js",
    "revision": "bd899840f9b7122f1f10131c8de45280"
  },
  {
    "url": "assets/js/23.eb999a8b.js",
    "revision": "30feb2cac61790d9f41b0817a346b0bd"
  },
  {
    "url": "assets/js/24.ccdd51aa.js",
    "revision": "9580978ef13dd6c7fa78c4f6b949bdf8"
  },
  {
    "url": "assets/js/25.d46a83f2.js",
    "revision": "b5265e23c30e7177722fd2a9b6ad7fb8"
  },
  {
    "url": "assets/js/26.2e209b64.js",
    "revision": "33983dfac169be95e100ca63da6b5fb2"
  },
  {
    "url": "assets/js/27.095bf57b.js",
    "revision": "1cdaf0d8dfec9ae8bd02a3c406254eb5"
  },
  {
    "url": "assets/js/28.ca0de492.js",
    "revision": "2a782b4e00c544066fd9a40929c51c1c"
  },
  {
    "url": "assets/js/29.c6494259.js",
    "revision": "49693f0af600413a93eef5fb63024461"
  },
  {
    "url": "assets/js/3.78c3d3c8.js",
    "revision": "e1137877e1fc867c63506b7cb58e7880"
  },
  {
    "url": "assets/js/30.ec38b16b.js",
    "revision": "ac485b6a40a1d40a8ebb839e677915a5"
  },
  {
    "url": "assets/js/31.f57c5fbc.js",
    "revision": "f12129dd557b68ce4a77f3d09751d445"
  },
  {
    "url": "assets/js/32.c6a91f86.js",
    "revision": "d75b655596c11e1e5bb763d4f978dfc6"
  },
  {
    "url": "assets/js/33.34834785.js",
    "revision": "cadb9f15c5e4789e295abafd9fc79cc4"
  },
  {
    "url": "assets/js/34.987559e0.js",
    "revision": "57628c3200a28ab8502fb290197f63fa"
  },
  {
    "url": "assets/js/35.4e567c68.js",
    "revision": "3d971ded0ff8ea747833eec5816db2ec"
  },
  {
    "url": "assets/js/36.cf11feb6.js",
    "revision": "a7fc3f48bcdea3e46123bc6c88ea40a5"
  },
  {
    "url": "assets/js/37.316dd84c.js",
    "revision": "b4242531cb0a6b79aa3382e18840d093"
  },
  {
    "url": "assets/js/38.b7c1727f.js",
    "revision": "fa4e2e9239e6f3d7b04f03ba518b6a54"
  },
  {
    "url": "assets/js/39.59bfb827.js",
    "revision": "5503a3a69013be62c3fb4ac8320493a2"
  },
  {
    "url": "assets/js/4.4b1cad09.js",
    "revision": "3434ead0c7d220a459bd78ccae196db5"
  },
  {
    "url": "assets/js/40.3d9526e4.js",
    "revision": "a14223d26ebf4d6e3e88673f4daf3559"
  },
  {
    "url": "assets/js/41.ee103e02.js",
    "revision": "dbebbe262eaaf8a7188d8994a8a5b9cf"
  },
  {
    "url": "assets/js/42.dce26146.js",
    "revision": "6799bd55c85cef11b32c4e07746e245e"
  },
  {
    "url": "assets/js/5.7ade25e8.js",
    "revision": "46a4a66deb800f71cee66daf7d02aadb"
  },
  {
    "url": "assets/js/6.e456ea1d.js",
    "revision": "7f091563442db6197de1fb42ed5fda05"
  },
  {
    "url": "assets/js/7.66f7834c.js",
    "revision": "341ae7ead4062635afa9adeb3db4680f"
  },
  {
    "url": "assets/js/8.1e244325.js",
    "revision": "215af9f17bc331b3c68f8847c3e6c709"
  },
  {
    "url": "assets/js/9.7967ab28.js",
    "revision": "cfc02b31b5f29a90f1adabbfe54f56c9"
  },
  {
    "url": "assets/js/app.bdc094dc.js",
    "revision": "086e9b8e6ca70e35b883eabdf82bc34e"
  },
  {
    "url": "assets/js/vuejs-paginate.17238d84.js",
    "revision": "fb18a1e27272d1b59c5ab5cc28025228"
  },
  {
    "url": "en/2021/11/29/tiling-windows-manager/index.html",
    "revision": "5fb5e007637061ba38973326ee971e04"
  },
  {
    "url": "en/index.html",
    "revision": "6cfc369931013a5e6549322c5c630ed3"
  },
  {
    "url": "index.html",
    "revision": "78eb12576497d720689b496cf46faa0f"
  },
  {
    "url": "page/2/index.html",
    "revision": "45a282422bc2d4e76f2c5e6fc2ebd2e8"
  },
  {
    "url": "page/3/index.html",
    "revision": "70d1c5be27d89f63ef9c4f6ee0ceff2c"
  },
  {
    "url": "page/4/index.html",
    "revision": "c42b0900cee17b56f94e3bf41b57867f"
  },
  {
    "url": "page/5/index.html",
    "revision": "1767696ddb5b5caea37072da7eaf830c"
  },
  {
    "url": "page/6/index.html",
    "revision": "ce1a1487e78ec28e0988ff2b07a25bc4"
  },
  {
    "url": "tag/index.html",
    "revision": "19e2524240a3666a383d136fba644046"
  },
  {
    "url": "tag/prototype/index.html",
    "revision": "7d7c584ebb3cbc78a535314efd0b8cbb"
  },
  {
    "url": "tag/tech/index.html",
    "revision": "cab9308e50842f3f2ba1ebf3a88c0ffd"
  },
  {
    "url": "tag/tech/page/2/index.html",
    "revision": "4a347ed74b64d9af3479f57a627acaa4"
  },
  {
    "url": "tag/thought/index.html",
    "revision": "eac304b80464630aeb255197ea17a164"
  },
  {
    "url": "tag/thought/page/2/index.html",
    "revision": "567a3a44b6b473ac599da1700ab37032"
  },
  {
    "url": "tag/thought/page/3/index.html",
    "revision": "f2ea4fa4a2a4109aa810fd7ef8ed3135"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "4ecb415bbe73c79eda8095483c52f798"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "69d9d08c376a2ba1e92374f00f432b17"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
