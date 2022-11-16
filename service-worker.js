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
    "revision": "efc92377580d587c9cdd658c8ee4e692"
  },
  {
    "url": "2020/06/02/peer-pressure/index.html",
    "revision": "541bdff6572c202e307d5d59930833af"
  },
  {
    "url": "2020/06/09/latex/index.html",
    "revision": "f188eacf8bde86b688331bb52feece22"
  },
  {
    "url": "2020/06/17/linked-notes/index.html",
    "revision": "0be71b82da6eaec20bfd52fc2effb0ab"
  },
  {
    "url": "2020/07/06/anxiety/index.html",
    "revision": "7460c2a6fc606e2c2ed205b82059d83f"
  },
  {
    "url": "2020/07/09/rejection/index.html",
    "revision": "3b95d9cee1963967db7c7514cb7f933e"
  },
  {
    "url": "2020/07/18/build-linked-notes/index.html",
    "revision": "d8f2c794e366c406384ba0a28ce5bc69"
  },
  {
    "url": "2020/08/06/keep-going/index.html",
    "revision": "9040c77fd561f45883645196373788be"
  },
  {
    "url": "2020/08/13/change/index.html",
    "revision": "bb48a76b34d3c937a5631d3718befb12"
  },
  {
    "url": "2020/08/13/hololens/index.html",
    "revision": "487a4a8ad8d8bb89b7825e7ab1f1e4e7"
  },
  {
    "url": "2020/09/02/suffer-from-fear/index.html",
    "revision": "e48f2076770c1364a88a0fa393154ed5"
  },
  {
    "url": "2020/09/13/hackintosh/index.html",
    "revision": "e3096dbd6639bd0e44de63048512c4e8"
  },
  {
    "url": "2020/09/19/simple-life/index.html",
    "revision": "bf22ae34481fcf1a1e4455c495633739"
  },
  {
    "url": "2020/10/04/tricky-mars/index.html",
    "revision": "38d6204576b71a38cef67f1cdc109494"
  },
  {
    "url": "2020/11/16/try-the-best/index.html",
    "revision": "cbd8863a54b61129fdfe55fc81308367"
  },
  {
    "url": "2020/12/10/prepare/index.html",
    "revision": "e70b244c2680aa55778f46dfda9f6a0a"
  },
  {
    "url": "2021/01/23/end-of-the-semester/index.html",
    "revision": "beaf6a80b178c9b262f52848c7a78b6e"
  },
  {
    "url": "2021/03/13/pytorch-source-1/index.html",
    "revision": "eed4ac083642371be7fe1dd1c19595ca"
  },
  {
    "url": "2021/03/30/pytorch-lightning/index.html",
    "revision": "00e7bfbbea11f8c0999ff155b3112294"
  },
  {
    "url": "2021/04/02/pytorch-source-2/index.html",
    "revision": "7a46dbaa39c0823712c66e7995d2ce1b"
  },
  {
    "url": "2021/04/18/pytorch-source-3/index.html",
    "revision": "ac49b401ba49f12f7bab6d65fb25906c"
  },
  {
    "url": "2021/05/21/webassembly/index.html",
    "revision": "08e7a45a30143820251ec35f2589de58"
  },
  {
    "url": "2021/06/14/wasm-memory-management/index.html",
    "revision": "deeb5c9204304531473cf1b811645bd3"
  },
  {
    "url": "2021/08/30/best-editor/index.html",
    "revision": "40fb989fc109e5dea38b84d0bc304ea2"
  },
  {
    "url": "2021/11/29/tiling-windows-manager/index.html",
    "revision": "629f1c87d4187b333e0e8eee9aef7ce4"
  },
  {
    "url": "2021/11/30/dl-on-web/index.html",
    "revision": "261d71f4834420d91d77fd9c9cc8ddc6"
  },
  {
    "url": "2021/12/06/topography/index.html",
    "revision": "cd11f6a82d94bfba632390b0af746ffc"
  },
  {
    "url": "2022/01/08/the-editor/index.html",
    "revision": "2f635e197f5289aad463312e71020089"
  },
  {
    "url": "404.html",
    "revision": "5893015e8260e7a0a8730f213d67c808"
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
    "url": "assets/js/app.15c442c3.js",
    "revision": "77d3392016815ba8861f7e06dc6e6b26"
  },
  {
    "url": "assets/js/vuejs-paginate.17238d84.js",
    "revision": "fb18a1e27272d1b59c5ab5cc28025228"
  },
  {
    "url": "en/2021/11/29/tiling-windows-manager/index.html",
    "revision": "74ef5404fa2ba2cf629f278e94fba4e9"
  },
  {
    "url": "en/index.html",
    "revision": "6771a135f867128d7fa7fc3b5529c426"
  },
  {
    "url": "index.html",
    "revision": "b46391a39cda7268ec04db430985cb60"
  },
  {
    "url": "page/2/index.html",
    "revision": "8411524f04297b626877290695a25130"
  },
  {
    "url": "page/3/index.html",
    "revision": "8f6c05b3ef286e9cb86ffa5ca560aea4"
  },
  {
    "url": "page/4/index.html",
    "revision": "744b681f5edd04f381c953c786cb9d1b"
  },
  {
    "url": "page/5/index.html",
    "revision": "ae7258f8169df46c18148ffa3336b336"
  },
  {
    "url": "page/6/index.html",
    "revision": "f4da47bc25f70a34fe078c067e8d05a0"
  },
  {
    "url": "tag/index.html",
    "revision": "1e5684ee013101272103d2f3dda8827a"
  },
  {
    "url": "tag/prototype/index.html",
    "revision": "c195f2f014f912338df58caae81c3f19"
  },
  {
    "url": "tag/tech/index.html",
    "revision": "e2ab72799995ed4b3f5109357b41f0c5"
  },
  {
    "url": "tag/tech/page/2/index.html",
    "revision": "bb62c6fbd60d386c98e264e7387c736e"
  },
  {
    "url": "tag/thought/index.html",
    "revision": "c97934a8aff5ae6b281f523ef12bfad7"
  },
  {
    "url": "tag/thought/page/2/index.html",
    "revision": "ecd90b61ff2c76d6be7a679e218c540e"
  },
  {
    "url": "tag/thought/page/3/index.html",
    "revision": "e284d969e219b636b0f7bb2eeabe2cc5"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "4113702d285783a1b4f531f0c67ed257"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "9b4bfb3dd7cd648d5fbef1fd95dd5c63"
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
