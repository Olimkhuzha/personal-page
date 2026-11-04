(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  var LANGS = ["en", "ru", "ky"];
  var current = "en";

  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }
  function t(path) {
    var v = get(C.strings[current], path);
    if (v === undefined) v = get(C.strings.en, path);
    return v;
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function pendingSpan() {
    return el("span", "pending", t("ui.pending"));
  }
  function localized(v) {
    if (v == null) return null;
    if (typeof v === "string") return v;
    return v[current] || v.en;
  }

  /* ---------- simple text and lists ---------- */
  function renderText() {
    document.querySelectorAll("[data-t]").forEach(function (node) {
      var v = t(node.getAttribute("data-t"));
      node.textContent = v == null ? "" : v;
      node.hidden = v === "";
    });
    document.querySelectorAll("[data-t-aria]").forEach(function (node) {
      node.setAttribute("aria-label", t(node.getAttribute("data-t-aria")));
    });
    document.querySelectorAll("[data-list]").forEach(function (node) {
      var items = t(node.getAttribute("data-list")) || [];
      var join = node.getAttribute("data-join");
      if (join) { node.textContent = items.join(join); return; }
      node.replaceChildren.apply(node, items.map(function (s) { return el("li", null, s); }));
    });
    document.querySelectorAll("[data-setting]").forEach(function (node) {
      var v = localized(C.settings[node.getAttribute("data-setting")]);
      if (v == null || v === "") { node.replaceChildren(pendingSpan()); return; }
      if (node.hasAttribute("data-link")) {
        var a = el("a", null, v.replace(/^https?:\/\//, ""));
        a.href = v; a.target = "_blank"; a.rel = "noopener";
        node.replaceChildren(a);
      } else {
        node.textContent = v;
      }
    });
    document.querySelectorAll("[data-if-setting]").forEach(function (node) {
      node.hidden = !C.settings[node.getAttribute("data-if-setting")];
    });
  }

  /* ---------- repeated blocks ---------- */
  var renderers = {
    highlights: function (node) {
      return t("highlights").map(function (h) {
        var li = el("li", "highlight");
        li.append(el("h3", null, h.title), el("p", null, h.text));
        return li;
      });
    },
    serviceGroups: function () {
      return t("services.groups").map(function (g) {
        var card = el("article", "card");
        var ul = el("ul", "checklist");
        g.items.forEach(function (s) { ul.append(el("li", null, s)); });
        card.append(el("h3", null, g.title), ul);
        return card;
      });
    },
    mobileSteps: function () {
      return t("mobile.steps").map(function (s) {
        var li = el("li", "step");
        li.append(el("h3", null, s.title), el("p", null, s.text));
        return li;
      });
    },
    team: function () {
      return C.team.map(function (m) {
        var li = el("li", "member");
        var fig = el("div", "member-photo");
        if (m.photo) {
          var img = el("img");
          img.src = m.photo;
          img.alt = m.name + " — " + localized(m.role);
          img.loading = "lazy";
          if (m.photoFocus) img.style.objectPosition = m.photoFocus;
          fig.append(img);
        } else {
          fig.classList.add("no-photo");
          var ph = el("span", null, t("team.noPhoto") + ": ");
          ph.append(pendingSpan());
          fig.append(ph);
        }
        var body = el("div", "member-body");
        body.append(el("h3", null, m.name), el("p", "role", localized(m.role)));

        var exp = el("p", "meta", t("team.experience") + ": ");
        exp.append(localized(m.experience) ? document.createTextNode(localized(m.experience)) : pendingSpan());
        body.append(exp);

        var bio = localized(m.bio);
        if (bio) {
          body.append(el("p", "bio", bio));
        } else {
          var b = el("p", "meta", t("team.bioLabel") + ": ");
          b.append(pendingSpan());
          body.append(b);
        }
        li.append(fig, body);
        return li;
      });
    }
  };

  function renderBlocks() {
    document.querySelectorAll("[data-render]").forEach(function (node) {
      var fn = renderers[node.getAttribute("data-render")];
      if (fn) node.replaceChildren.apply(node, fn(node));
    });
  }

  /* ---------- language ---------- */
  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "en";
    current = lang;
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.description"));
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    renderText();
    renderBlocks();
    clearErrors();
    try { localStorage.setItem("mercymed-lang", lang); } catch (e) { /* storage unavailable */ }
  }

  function initialLang() {
    var stored = null;
    try { stored = localStorage.getItem("mercymed-lang"); } catch (e) { /* ignore */ }
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : "en";
  }

  /* ---------- mobile menu ---------- */
  function initMenu() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.getElementById("main-nav");
    function close() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    }
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- highlight current section in menu ---------- */
  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var links = {};
    document.querySelectorAll(".main-nav a").forEach(function (a) { links[a.hash.slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting || !links[en.target.id]) return;
        Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
        links[en.target.id].setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) obs.observe(s);
    });
  }

  /* ---------- appointment form -> WhatsApp ---------- */
  var form, fields;

  function clearErrors() {
    if (!fields) return;
    Object.keys(fields).forEach(function (k) {
      fields[k].input.removeAttribute("aria-invalid");
      fields[k].error.textContent = "";
    });
  }

  function validate() {
    var ok = true;
    var first = null;
    function fail(k, msg) {
      fields[k].input.setAttribute("aria-invalid", "true");
      fields[k].error.textContent = msg;
      if (!first) first = fields[k].input;
      ok = false;
    }
    clearErrors();
    ["firstName", "lastName", "dob", "phone"].forEach(function (k) {
      if (!fields[k].input.value.trim()) fail(k, t("appointment.errRequired"));
    });
    var dob = fields.dob.input.value;
    if (dob) {
      var d = new Date(dob + "T00:00:00");
      var now = new Date();
      if (isNaN(d) || d > now || d.getFullYear() < 1900) fail("dob", t("appointment.errDob"));
    }
    var phone = fields.phone.input.value.trim();
    if (phone && !/^\+?[\d\s()\-]{7,20}$/.test(phone)) fail("phone", t("appointment.errPhone"));
    if (first) first.focus();
    return ok;
  }

  function formatDob(iso) {
    var p = iso.split("-");
    return p.length === 3 ? p[2] + "." + p[1] + "." + p[0] : iso;
  }

  function initForm() {
    form = document.getElementById("appointment-form");
    fields = {};
    [["firstName", "f-first", "e-first"], ["lastName", "f-last", "e-last"], ["dob", "f-dob", "e-dob"], ["phone", "f-phone", "e-phone"]]
      .forEach(function (f) {
        fields[f[0]] = { input: document.getElementById(f[1]), error: document.getElementById(f[2]) };
      });
    fields.dob.input.max = new Date().toISOString().slice(0, 10);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;
      var v = function (k) { return fields[k].input.value.trim(); };
      var msg = [
        t("appointment.msgIntro"),
        t("appointment.msgName") + ": " + v("firstName"),
        t("appointment.msgSurname") + ": " + v("lastName"),
        t("appointment.msgDob") + ": " + formatDob(v("dob")),
        t("appointment.msgPhone") + ": " + v("phone")
      ].join("\n");
      var number = String(C.settings.whatsappNumber).replace(/\D/g, "");
      // Nothing is sent to or stored on our server: the browser opens WhatsApp directly.
      window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    });
  }

  /* ---------- start ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    initMenu();
    initForm();
    setLang(initialLang());
    initScrollSpy();
  });
})();
