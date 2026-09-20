/* VIVISPA 幸福家族 DEMO — 存取鎖（與既有 vivispa-demo 同一組密碼） */
(function () {
  var KEY = 'vivispa2027';
  var SESS = 'vf_family_ok';

  try { if (sessionStorage.getItem(SESS) === '1') return; } catch (e) {}

  var css = document.createElement('style');
  css.textContent = [
    '#vf-gate{position:fixed;inset:0;z-index:99999;background:#FBF9F6;display:flex;align-items:center;justify-content:center;padding:24px;font-family:"Microsoft JhengHei","Noto Sans TC",sans-serif}',
    '#vf-gate .bx{max-width:400px;width:100%;background:#fff;border:1px solid #E9E3DB;border-radius:14px;padding:30px 26px;box-shadow:0 10px 34px rgba(31,58,95,.1)}',
    '#vf-gate .kk{font-size:11px;letter-spacing:.16em;color:#A84A6B;font-weight:700}',
    '#vf-gate h2{margin:10px 0 6px;font-size:20px;color:#1F3A5F;line-height:1.4}',
    '#vf-gate p{margin:0 0 18px;font-size:13px;color:#6B7280;line-height:1.75}',
    '#vf-gate input{width:100%;box-sizing:border-box;padding:12px 14px;font-size:15px;border:1.5px solid #E9E3DB;border-radius:10px;font-family:inherit;color:#1F3A5F}',
    '#vf-gate input:focus{outline:none;border-color:#A84A6B;box-shadow:0 0 0 3px rgba(168,74,107,.1)}',
    '#vf-gate button{width:100%;margin-top:10px;padding:13px;font-size:15px;font-weight:700;font-family:inherit;color:#fff;background:#A84A6B;border:0;border-radius:999px;cursor:pointer}',
    '#vf-gate button:hover{opacity:.92}',
    '#vf-gate .err{color:#B4552F;font-size:13px;margin-top:9px;display:none}',
    '#vf-gate .ft{margin-top:18px;padding-top:14px;border-top:1px solid #E9E3DB;font-size:11.5px;color:#9AA1AC;line-height:1.7}',
    'html.vf-locked body > *:not(#vf-gate){display:none!important}'
  ].join('');
  document.head.appendChild(css);
  document.documentElement.classList.add('vf-locked');

  function open_() {
    var g = document.getElementById('vf-gate');
    if (g) g.remove();
    document.documentElement.classList.remove('vf-locked');
    try { sessionStorage.setItem(SESS, '1'); } catch (e) {}
  }

  function mount() {
    var el = document.createElement('div');
    el.id = 'vf-gate';
    el.innerHTML =
      '<div class="bx">' +
      '<div class="kk">VIVISPA 2027 ｜ 幸福家族</div>' +
      '<h2>此頁為內部提案示意</h2>' +
      '<p>內容為設計原型，非正式上線系統。請輸入通行碼後檢視。</p>' +
      '<input id="vf-i" type="password" placeholder="通行碼" autocomplete="off" autocapitalize="off" spellcheck="false">' +
      '<button id="vf-b">進入</button>' +
      '<div class="err" id="vf-e">通行碼不正確，請再試一次。</div>' +
      '<div class="ft">頁面中所有姓名、數字、店名皆為示意，非真實資料。<br>僅供內部討論，請勿對外散布。</div>' +
      '</div>';
    document.body.appendChild(el);

    var i = document.getElementById('vf-i'),
        b = document.getElementById('vf-b'),
        er = document.getElementById('vf-e');

    function go() {
      if (i.value.trim().toLowerCase() === KEY) { open_(); }
      else { er.style.display = 'block'; i.value = ''; i.focus(); }
    }
    b.addEventListener('click', go);
    i.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    setTimeout(function () { i.focus(); }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
