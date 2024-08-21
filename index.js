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

  // TODOsデータの件数を表示
  console.log(data.todos.length);

  // ユーザーデータの件数を絞り込む
  const filteredUsers = data.users.filter((user) => user.id < 5);
  console.log(filteredUsers);
}

main();
