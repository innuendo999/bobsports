//
var randomNumber = Math.floor(Math.random() * 90000) + 10000;
var code_ma = {

  //å¼€äº‘ä½“è‚²   43946837
  kyApp: "https://www.1w14dg.com:6001/" + randomNumber + "?i_code=", // å¼€äº‘å…¨ç«™app
  kyPc: "https://www.slogv7.com:6443/register" + randomNumber + "/?i_code=", //å¼€äº‘ç”µè„‘ç«¯
  kyH5: "https://www.wdsbcx.com:9143/entry/register" + randomNumber + "/?i_code=", //å¼€äº‘ç§»åŠ¨ç«¯

  //ç±³å…°ä½“è‚²   79966772
  mlApp:"https://www.ri4s6e.vip:8002/" + randomNumber + "?i_code=",//ç±³å…°äº‘å…¨ç«™app
  mlPc:"https://www.97q6o1.com:8002/register" + randomNumber + "/?i_code=",//ç±³å…°ç”µè„‘ç«¯
  mlH5:"https://www.vpsr4z.vip:8663/entry/register" + randomNumber + "/?i_code=",//ç±³å…°ç§»åŠ¨ç«¯
  
  //ä¹æ¸¸å¨±ä¹    80099944
  jiuyouApp: "https://www.tqck8q.vip:9013/" + randomNumber + "?i_code=", // ä¹æ¸¸å…¨ç«™app
  jiuyouPc: "https://www.sd92hj.vip:9193/register" + randomNumber + "/?i_code=", //ä¹æ¸¸ç”µè„‘ç«¯
  jiuyouH5: "https://www.a0zr0r.com:9443/entry/register" + randomNumber +"/?i_code=", //ä¹æ¸¸ç§»åŠ¨ç«¯

  //åŽä½“ä¼šä½“è‚²  3395339
  hthApp: "https://www.ga9t8n.com/" + randomNumber + "?i_code=", // åŽä½“ä¼šå…¨ç«™app
  hthPc: "https://www.g8cxmw.vip:8000/register" + randomNumber + "/?i_code=", //åŽä½“ä¼šç”µè„‘ç«¯
  hthH5: "https://www.rv94ry.vip:9969/entry/register" + randomNumber + "/?i_code=", //åŽä½“ä¼šç§»åŠ¨ç«¯
  
  //ä¹åŠ¨ä½“è‚²  pq5k5s
  ldApp:     "https://www.8bz4m.com:2087?proxy=",//ä¹åŠ¨ä½“è‚²
  ldPc:      "https://www.8bz4m.com:2087?proxy=",
  ldH5:      "https://www.8bz4m.com:2087?proxy=",

  //æ˜Ÿç©ºä½“è‚²   52536224
  xingkongApp:"https://www.vy2qz2.vip:6600/?agent_code=",// æ˜Ÿç©ºå…¨ç«™app
  xingkongPc:"https://www.4kf26m.vip:9024/user/register?agent_code=", //æ˜Ÿç©ºç”µè„‘ç«¯
  xingkongH5:"https://www.dehewg.vip:9979/register/?agent_code=",//æ˜Ÿç©ºç§»åŠ¨ç«¯

  //å®‰åšä½“è‚²   2654890
  anboApp:"https://www.anbovip621.com:30106/?i_code=",// å®‰åšå…¨ç«™app
  anboPc:"https://www.anbovip707.com:30112/register/?i_code=",//å®‰åšç”µè„‘ç«¯
  anboH5:"https://www.anbo189.com:35560/entry/register/?i_code=",//å®‰åšç§»åŠ¨ç«¯

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