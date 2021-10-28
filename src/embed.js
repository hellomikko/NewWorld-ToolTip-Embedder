! function() {
  function e() {
      const e = {
          scale: .85,
          delay: 150,
          anchorOnly: !0,
          alignLeft: !1
      };
      window.nwdbConfig && (window.nwdbConfig.hasOwnProperty("scale") && (e.scale = window.nwdbConfig.scale), window.nwdbConfig.hasOwnProperty("delay") && (e.delay = window.nwdbConfig.delay), window.nwdbConfig.hasOwnProperty("anchorOnly") && (e.anchorOnly = window.nwdbConfig.anchorOnly), window.nwdbConfig.hasOwnProperty("alignLeft") && (e.alignLeft = window.nwdbConfig.alignLeft));
      const n = "https://nwdb.info",
          t = document.createElement("iframe");
      t.scrolling = "no", t.sandbox = "allow-scripts allow-popups allow-same-origin", t.style.opacity = 0, t.style.position = "fixed", t.style.height = "500px", t.style.width = "416px", t.style.zIndex = -100, t.style.pointerEvents = "none", t.style.transform = "scale(" + e.scale + ")", t.style.transformOrigin = "top left", t.style.marginLeft = "15px", t.style.boxShadow = "0px 0px 0px 1px rgba(0,0,0,0.75)", t.style.webkitBoxShadow = "0px 0px 0px 1px rgba(0,0,0,0.75)", t.style.border = "none", document.body.appendChild(t);
      let i, o, d, s, a, l = !1;

      function r(e) {
          e ? async function(e) {
              l = !0;
              let n = new URL(e);
              n.searchParams.set("embed", "true"), "blissful-bell-d04f3c.netlify.app" === window.location.host && n.searchParams.set("mode", "minimal"), t.src = n.toString(), setTimeout(f, 0)
          }(new URL(e)): w()
      }
      window.addEventListener("message", function(e) {
          let n = e.data;
          n && "nwdb-embed-resize" === n.type && (t.style.height = n.height + 0 + "px", l && (f(), t.style.opacity = 1, t.style.zIndex = 9e4))
      }, !1);
      const c = "ontouchstart" in document.documentElement && /mobi/i.test(navigator.userAgent);

      function w() {
          l && t.removeAttribute("src"), l = !1, t.style.opacity = 0, t.style.zIndex = -100
      }

      function f() {
          if (!t) return;
          s = o, a = d;
          const n = t.offsetHeight * e.scale,
              i = t.offsetWidth * e.scale + 15;
          e.alignLeft && (s -= i), a + n > window.innerHeight && (a = window.innerHeight - n), e.alignLeft ? s < 0 && (s = -15) : s + i > window.innerWidth && (s = window.innerWidth - i), t.style.top = a + "px", t.style.left = s + "px"
      }
      window.addEventListener("mousemove", function(t) {
          if (c) return;
          o = t.clientX, d = t.clientY;
          const s = function(e) {
              for (; e && "A" !== e.nodeName.toUpperCase() && "AREA" !== e.nodeName.toUpperCase();) e = e.parentNode;
              if (e) {
                  const t = e.href;
                  if (t && (t.includes(n + "/db/item/") || t.includes(n + "/db/perk/") || t.includes(n + "/db/ability/") || t.includes(n + "/db/quest/") || t.includes(n + "/db/recipe/") || t.includes(n + "/db/gatherable/") || t.includes(n + "/db/npc/") || t.includes(n + "/db/creature/"))) return t
              }
              return !1
          }(t.target);
          s ? (clearTimeout(i), i = setTimeout(() => {
              l || r(s)
          }, e.delay), f()) : (clearTimeout(i), w())
      })
  }
  "interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", function(n) {
      e()
  })
}();