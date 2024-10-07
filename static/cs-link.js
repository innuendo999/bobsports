//
var code_ma = {

  //å¼€äº‘ä½“è‚²   43946837
  kyApp: "https://bobsports.net/22bb?" , // å¼€äº‘å…¨ç«™app
  kyPc: "https://bobsports.net/22bb?", //å¼€äº‘ç”µè„‘ç«¯
  kyH5: "https://bobsports.net/22bb?", //å¼€äº‘ç§»åŠ¨ç«¯

  //ç±³å…°ä½“è‚²   79966772
  mlApp:"https://bobsports.net/22bb?" ,//ç±³å…°äº‘å…¨ç«™app
  mlPc:"https://bobsports.net/22bb?",//ç±³å…°ç”µè„‘ç«¯
  mlH5:"https://bobsports.net/22bb?",//ç±³å…°ç§»åŠ¨ç«¯
  
  //ä¹æ¸¸å¨±ä¹    80099944
  jiuyouApp: "https://bobsports.net/22bb?" , // ä¹æ¸¸å…¨ç«™app
  jiuyouPc: "https://bobsports.net/22bb?", //ä¹æ¸¸ç”µè„‘ç«¯
  jiuyouH5: "https://bobsports.net/22bb?", //ä¹æ¸¸ç§»åŠ¨ç«¯

  //åŽä½“ä¼šä½“è‚²  3395339
  hthApp: "https://bobsports.net/22bb?" , // åŽä½“ä¼šå…¨ç«™app
  hthPc: "https://bobsports.net/22bb?", //åŽä½“ä¼šç”µè„‘ç«¯
  hthH5: "https://bobsports.net/22bb?", //åŽä½“ä¼šç§»åŠ¨ç«¯
  
  //ä¹åŠ¨ä½“è‚²  pq5k5s
  ldApp:     "https://bobsports.net/22bb?",//ä¹åŠ¨ä½“è‚²
  ldPc:      "https://bobsports.net/22bb?",
  ldH5:      "https://bobsports.net/22bb?",

  //æ˜Ÿç©ºä½“è‚²   52536224
  xingkongApp:"https://bobsports.net/22bb?",// æ˜Ÿç©ºå…¨ç«™app
  xingkongPc:"https://bobsports.net/22bb?", //æ˜Ÿç©ºç”µè„‘ç«¯
  xingkongH5:"https://bobsports.net/22bb?",//æ˜Ÿç©ºç§»åŠ¨ç«¯

  //å®‰åšä½“è‚²   2654890
  anboApp:"https://bobsports.net/22bb?",// å®‰åšå…¨ç«™app
  anboPc:"https://bobsports.net/22bb?",//å®‰åšç”µè„‘ç«¯
  anboH5:"https://bobsports.net/22bb?",//å®‰åšç§»åŠ¨ç«¯

};

function ky_code(key, code) {
  window.open(code_ma[key] + code);
}



function kaiyun_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["kyH5"] + code);
  } else {
    window.open(code_ma["kyPc"] + code);
  }
}
function milan_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["mlH5"] + code);
  } else {
    window.open(code_ma["mlPc"] + code);
  }
}
function jiuyou_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["jiuyouH5"] + code);
  } else {
    window.open(code_ma["jiuyouPc"] + code);
  }
}
function hth_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["hthH5"] + code);
  } else {
    window.open(code_ma["hthPc"] + code);
  }
}
function ledong_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["ldH5"] + code);
  } else {
    window.open(code_ma["ldPc"] + code);
  }
}
function xingkong_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["xingkongH5"] + code);
  } else {
    window.open(code_ma["xingkongPc"] + code);
  }
}
function anbo_code(code) {
  if (window.innerWidth < 768) {
    window.open(code_ma["anboH5"] + code);
  } else {
    window.open(code_ma["anboPc"] + code);
  }
}

function kyApp_code(key, code) {
  window.open(code_ma[key] + code);
}
function mlApp_code(key, code) {
  window.open(code_ma[key] + code);
}
function jiuyouApp_code(key, code) {
  window.open(code_ma[key] + code);
}

function hthApp_code(key, code) {
  window.open(code_ma[key] + code);
}
function ldApp_code(key, code) {
  window.open(code_ma[key] + code);
}
function xingkongApp_code(key, code) {
  window.open(code_ma[key] + code);
}
function anboApp_code(key, code) {
  window.open(code_ma[key] + code);
}