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
  // console.log("データの件数", data.todos.length); // データの件数を表示
  // console.log("配列かどうか判定", Array.isArray(data.todos)); // 指定したオブジェクトが配列かどうかを判定
  // console.log("文字列へ変換", data.todos.toString()); // 文字列へ変換
  // console.log("インデックス取得", data.todos.indexOf(1)); // 指定した要素に合致した最初のインデックスを取得 -1 は見つからなかった場合
  // console.log("インデックス取得", data.todos.lastIndexOf(1)); // 指定した要素に合致した最後のインデックスを取得 -1 は見つからなかった場合
  // console.log("全てのキー・値のペア", Object.entries(data.todos)); // 全てのキー・値のペアを取得
  // console.log("キーのみを取得", Object.keys(data.todos)); // キーのみを取得
  // console.log("値のみを取得", Object.values(data.todos)); // 値のみを取得

  // 【2.加工】
  const concatTodos = data.todos.concat(data.users); // 指定配列を現在の配列に連結
  // console.log("連結", concatTodos);
  const joinTodos = data.todos.map((todo) => todo.title).join(" / "); // 配列内の要素を区切り文字delで連結
  // console.log("区切り文字で連結", joinTodos);
  const sliceTodos = data.todos.slice(1, 3); // start + 1 ~ end 番目の要素の抜き出し 1 ~ 3 番目の要素を抜き出し
  // console.log("抜き出し", sliceTodos);
  const spliceTodos = data.todos.splice(1, 3); // start + 1 ~ end 番目の要素を削除 1 ~ 3 番目の要素を削除
  // console.log("削除", spliceTodos);

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
  const reversedTodos = data.todos.reverse(); // 逆順に並べ替え（reverse）
  // console.log("idの降順で並べ替え", reversedTodos);
  const sortedTodos = data.todos.sort((a, b) => a.id - b.id); // idの昇順で並べ替え（sort）
  // console.log("idの昇順で並べ替え", sortedTodos);

  //【5.コールバック関数】
  // 配列内の要素を順に処理（forEach）
  const forEeachedTodos = data.todos.forEach((todo) => {
    todo.id = "【コールバック関数処理後】" + todo.id;
  });
  // console.log("todoのidを変更", forEeachedTodos); // undefined forEachは返り値がない
  // console.log(data.todos); // 元の配列のidが変更されている

  /// 配列の要素を関数で順に加工
  const mappedTodos = data.todos.map((todo) => {
    return {
      ...todo,
      title: "【コールバック関数処理後】" + todo.title,
    };
  });
  // console.log("titleを変更", mappedTodos);

  // すべての配列内の要素が条件に合致するか判定
  const everyTodos = data.todos.every((todo) => todo.id < 1);
  // console.log("すべてのidが100未満か", everyTodos); // false 1つでも条件に合致しないものがある

  // いずれかの配列内の要素が条件に合致するか判定
  const someTodos = data.todos.some((todo) => (todo.id = 1));
  // console.log(someTodos); // true 1つでも条件に合致するものがある

  // 条件に合致した要素で配列を生成
  const filteredTodos = data.todos.filter((todo) => todo.id < 5);
  console.log(filteredTodos);

  // 関数がはじめてtrueを返した要素を取得
  const findTodos = data.todos.find((todo) => todo.id === 1);
  // console.log(findTodos);

  // 関数がはじめてtrueを返した要素のインデックスを取得
  const findIndexTodos = data.todos.findIndex((todo) => todo.id === 1);
  // console.log(findIndexTodos);

  // 隣同士の２つの要素を左から右へ関数で処理して単一の値にする
  const reducedTodos = data.todos.reduce((acc, todo) => {
    return acc + todo.id;
  }, 0);
  // console.log(reducedTodos);

  // 隣同士の２つの要素を右から左へ関数で処理して単一の値にする
  const reducedRightTodos = data.todos.reduceRight((acc, todo) => {
    return acc + todo.id;
  }, 0);
  // console.log(reducedRightTodos);

  // 絞り込み（filter）
  const filteredUsers = data.users.filter((user) => user.id < 5);
  // console.log(filteredUsers);
}

main();
