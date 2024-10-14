async function checkSetObject() {
  const set = new Set();

  // 指定した値を追加
  set.add(10);
  set.add(99);
  set.add(200);
  set.add(5);
  set.add(10); // 重複しないオブジェクトを作るので無視される
  console.log(set); // Set { 10, 99, 200, 5 }

  // 要素数
  console.log(set.size); // 4
  // 指定した値が存在するかを判定
  console.log(set.has(10)); // true
  // 指定した値を削除
  console.log(set.delete(200));
  console.log(set); // Set { 10, 99, 5 }

  // 指定した各値に処理を行う
  set.forEach((value) => {
    value = value * 2;
    console.log(value); // 10, 99, 5
  });
  console.log(set); // Set { 10, 99, 5 } 元の値は変わっていない

  // 全てのキー/値を取得
  console.log(set.entries()); // SetIterator { [ 10, 10 ], [ 99, 99 ], [ 5, 5 ] }
  // 全てのキーを取得
  console.log(set.keys()); // SetIterator { 10, 99, 5 }
  // 全ての値を削除
  set.clear();
  console.log(set); // Set(0) {}

  // NaN／オブジェクトの比較ルール
  set.add(NaN);
  set.add(NaN);
  console.log(set); // Set { NaN } 同じ値は無視される

  set.add({});
  set.add({});
  console.log(set); // Set { NaN, {}, {} } 異なるオブジェクトは追加される
}

checkSetObject();
