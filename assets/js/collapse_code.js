// wrap code blocks in collapsible containers
var COLLAPSE_THRESHOLD = 10; // lines of code before a block starts collapsed
var SKIP_LANGUAGES = ["chartjs", "diff2html", "echarts", "geojson", "mermaid", "plotly", "vega_lite"];
var collapseCounter = 0;

document.addEventListener("DOMContentLoaded", function () {
  var blocks = document.querySelectorAll('figure.highlight, div[class*="highlighter-rouge"]');
  blocks.forEach(function (block) {
    // skip containers nested inside another highlight container
    if (block.parentElement && block.parentElement.closest('figure.highlight, div[class*="highlighter-rouge"]')) {
      return;
    }

    var codeEl = block.querySelector("code");
    if (!codeEl) {
      return;
    }

    var langClass = Array.from(codeEl.classList).find(function (cls) {
      return cls.indexOf("language-") === 0;
    });
    var lang = langClass ? langClass.replace("language-", "") : "code";
    if (SKIP_LANGUAGES.indexOf(lang) !== -1) {
      return;
    }

    var lineCount = codeEl.textContent.replace(/\n$/, "").split("\n").length;

    // build collapsible wrapper
    var wrapper = document.createElement("div");
    wrapper.className = "code-collapse";

    var bodyId = "code-collapse-body-" + collapseCounter++;

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "code-collapse-toggle";
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-controls", bodyId);
    toggle.innerHTML = '<span class="code-collapse-lang">' + lang + '</span><i class="fa-solid fa-chevron-down chevron"></i>';

    var body = document.createElement("div");
    body.className = "code-collapse-body";
    body.id = bodyId;

    var inner = document.createElement("div");
    inner.className = "code-collapse-inner";

    block.parentNode.insertBefore(wrapper, block);
    inner.appendChild(block);
    body.appendChild(inner);
    wrapper.appendChild(toggle);
    wrapper.appendChild(body);

    // long blocks start collapsed
    if (lineCount > COLLAPSE_THRESHOLD) {
      wrapper.classList.add("collapsed");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var collapsed = wrapper.classList.toggle("collapsed");
      toggle.setAttribute("aria-expanded", String(!collapsed));
    });
  });
});
