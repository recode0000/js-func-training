const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 35 },
  { id: 3, name: "Charlie", age: 42 },
  { id: 4, name: "David", age: 31 },
  { id: 5, name: "Eve", age: 39 },
];

const fruits = ["apple", "banana", "cherry", "date", "fig", "grape"];

// 配列を操作する　Arrayオブジェクト

// Arrayオブジェクトの主なメンバー
console.log("配列のサイズ", users.length);
console.log("オブジェクトが配列かを真偽値で返すメソッド", Array.isArray(users));
console.log("配列の要素を表す文字列を返すメソッド", fruits.toString());
console.log(
  "指定した要素に合致した最初のようのキーを取得するメソッド",
  users.indexOf({ id: 3, name: "Charlie", age: 42 })
);
console.log(fruits.indexOf("banana"));
