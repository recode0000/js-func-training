function checkRegExpObject() {
  const pattern = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
  let str = "テストURLはhttps://www.wings.msn.to/です。";
  str += "その次はHTTP://www.web-deli.com/もよろしく！";
  console.log(str);
  //matchメソッドは正規表現パターンにマッチした文字列を配列として返す。マッチしない場合はnullを返す
  const result = str.match(pattern);
  console.log(result);
  console.log(pattern.test(str)); // マッチングの有無を返すテストメソッド
}

checkRegExpObject();
