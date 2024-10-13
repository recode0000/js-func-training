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
    console.log("ユーザーデータ:", userData);

    // 投稿データを取得
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postData = await postResponse.json();
    console.log("投稿データ:", postData);

    // 20件ずつのデータだけ返す
    return {
      todos: todoData.slice(0, 20),
      users: userData.slice(0, 20),
      posts: postData.slice(0, 20),
    };
  } catch (error) {
    console.error("データ取得エラー:", error);
    throw error;
  }
}

async function main() {
  const data = await getSampleData();

  //【1.基本】
  // データの件数を表示
  // console.log("データの件数", data.todos.length);
  // 指定したオブジェクトが配列かどうかを判定
  // console.log("配列かどうか判定", Array.isArray(data.todos));
  // 文字列へ変換
  // console.log("文字列へ変換", data.todos.toString());
  // 指定した要素に合致した最初のインデックスを取得
  // console.log("インデックス取得", data.todos.indexOf(1)); // -1 は見つからなかった場合
  // 指定した要素に合致した最後のインデックスを取得
  // console.log("インデックス取得", data.todos.lastIndexOf(1)); // -1 は見つからなかった場合
  // 全てのキー・値のペアを取得
  // console.log("全てのキー・値のペア", Object.entries(data.todos));
  // キーのみを取得
  // console.log("キーのみを取得", Object.keys(data.todos));
  // 値のみを取得
  // console.log("値のみを取得", Object.values(data.todos));

  // 【2.加工】
  // 指定配列を現在の配列に連結
  const concatTodos = data.todos.concat(data.users);
  console.log("連結", concatTodos);

  // 【3.追加/削除】
  // pop, push, shift, unshift は破壊的メソッド
  data.posts.pop(); // 末尾の要素を削除
  // console.log("末尾削除後のposts", data.posts);
  data.posts.push({ useId: 100, title: "pushで末尾追加" }); // 末尾に要素を追加
  // console.log("末尾追加後のposts", data.posts);
  data.posts.shift(); // 先頭の要素を削除
  // console.log("先頭削除後のposts", data.posts);
  data.posts.unshift({ useId: 0, title: "unshiftで先頭追加" }); // 先頭に要素を追加
  // console.log("先頭追加後のposts", data.posts);

  // 【4.並べ替え】
  // 逆順に並べ替え（reverse）
  const reversedTodos = data.todos.reverse();
  // console.log("idの降順で並べ替え", reversedTodos);

  // idの昇順で並べ替え（sort）
  const sortedTodos = data.todos.sort((a, b) => a.id - b.id);
  // console.log("idの昇順で並べ替え", sortedTodos);

  //【5.コールバック関数】

  // 配列内の要素を順に処理（forEach）
  const forEeachedTodos = data.todos.forEach((todo) => {
    todo.id = "【コールバック関数処理後】" + todo.id;
  });
  // console.log("todoのidを変更", forEeachedTodos); // undefined forEachは返り値がない
  // console.log(data.todos); // 元の配列のidが変更されている

  // 絞り込み（filter）
  const filteredUsers = data.users.filter((user) => user.id < 5);
  // console.log(filteredUsers);
}

main();
