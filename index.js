async function getSampleData() {
  try {
    // TODOsデータを取得
    const todoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todoData = await todoResponse.json();
    console.log("TODOsデータ:", todoData);

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

    return {
      todos: todoData,
      users: userData,
      posts: postData,
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
  console.log(data.todos.length);

  // 【2.加工】

  // 【3.追加/削除】

  // 【4.並べ替え】

  // 逆順に並べ替え（reverse）
  const reversedTodos = data.todos.reverse();
  console.log(reversedTodos); // idの降順で並べ替えになっている

  // idの昇順で並べ替え（sort）
  const sortedTodos = data.todos.sort((a, b) => a.id - b.id);
  console.log("idの昇順で並べ替え", sortedTodos);

  //【5.コールバック関数】

  // 配列内の要素を順に処理（forEach）
  const forEeachedTodos = data.todos.forEach((todo) => {
    todo.id = "【コールバック関数処理後】" + todo.id;
  });
  console.log("todoのidを変更", forEeachedTodos); // undefined forEachは返り値がない
  console.log(data.todos); // 元の配列のidが変更されている

  // 絞り込み（filter）
  const filteredUsers = data.users.filter((user) => user.id < 5);
  console.log(filteredUsers);
}

main();
