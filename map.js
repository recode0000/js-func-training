async function getSampleData() {
  try {
    // TODOsデータを取得
    const todoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todoData = await todoResponse.json();

    // ユーザーデータを取得
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userData = await userResponse.json();

    // 投稿データを取得
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postData = await postResponse.json();

    return {
      todoData,
      userData,
      postData,
    };
  } catch (error) {
    console.error("データ取得エラー:", error);
    throw error;
  }
}

async function checkMapObject() {
  const data = await getSampleData();

  // Mapオブジェクトを作成
  const map = new Map();

  // Mapオブジェクトにデータを追加
  map.set("dog", "ワンワン");
  map.set("cat", "ニャー");
  map.set("mouse", "チュー");

  // 要素数を取得
  console.log(map.size); // 3

  // キーを指定して値を取得
  console.log(map.get("dog")); // ワンワン

  // 気が存在するか確認
  console.log(map.has("cat")); // true

  // キーを指定して削除
  console.log(map.delete("mouse")); // true
  console.log(map.size); // 2

  // すべてのキーを取得
  console.log(map.keys()); // MapIterator { 'dog', 'cat' }

  // すべての値を取得
  console.log(map.values()); // MapIterator { 'ワンワン', 'ニャー' }

  // すべてのキー/値を取得
  console.log(map.entries()); // MapIterator { [ 'dog', 'ワンワン' ], [ 'cat', 'ニャー' ] }

  // マップ内の要素を関数で順に処理
  map.forEach((value, key) => {
    key = "加工された：" + key;
    value = "加工された：" + value;
    console.log(key, value);
  });

  // すべての要素を削除
  console.log(map.clear()); // undefined
  console.log(map);
}

checkMapObject();
