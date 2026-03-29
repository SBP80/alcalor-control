(function(){

  window.ALLCALOR_config = function(){

    function get(){
      try{
        return JSON.parse(localStorage.getItem("configAllcalor")) || {};
      }catch(e){
        return {};
      }
    }

    function shade(hex, percent){
      let f=parseInt(hex.slice(1),16),
      t=percent<0?0:255,
      p=Math.abs(percent)/100,
      R=f>>16,
      G=f>>8&0x00FF,
      B=f&0x0000FF;
      return "#"+(
        0x1000000+
        (Math.round((t-R)*p)+R)*0x10000+
        (Math.round((t-G)*p)+G)*0x100+
        (Math.round((t-B)*p)+B)
      ).toString(16).slice(1);
    }

    function apply(){

      const cfg = get();
      const root = document.documentElement;

      root.style.setProperty("--bg", cfg.colorFondo || "#0b0b0b");
      root.style.setProperty("--panel", cfg.colorPanel || "#151515");
      root.style.setProperty("--panel2", shade(cfg.colorPanel || "#151515", -10));
      root.style.setProperty("--line", cfg.colorLinea || "#2b2b2b");
      root.style.setProperty("--text", cfg.colorTexto || "#ffffff");
      root.style.setProperty("--muted", shade(cfg.colorTexto || "#ffffff", -40));
      root.style.setProperty("--accent", cfg.color || "#f39b2f");
      root.style.setProperty("--btnText", cfg.colorBotonTexto || "#111111");
      root.style.setProperty("--fontMain", cfg.fuente || "Arial, sans-serif");

    }

    return {
      get,
      apply
    };

  }();

})();