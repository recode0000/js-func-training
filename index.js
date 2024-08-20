let data = [];
// jsonplaceholderのAPIを使ってデータを取得
data = fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
  reresponse.json()
);

// Arrayオブジェクトの主なメンバー
console.log("配列のサイズ", data.length);
// console.log("オブジェクトが配列かを真偽値で返すメソッド", Array.isArray(data));
// console.log("配列の要素を表す文字列を返すメソッド", fruits.toString());
// console.log(
//   "指定した要素に合致した最初のようのキーを取得するメソッド",
//   data.indexOf({ id: 3, name: "Charlie", age: 42 })
// );
// console.log(fruits.indexOf("banana"));
