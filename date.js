function checkDateObject() {
  // Dateオブジェクトを作成
  const date = new Date();
  console.log(date); // UTCで取得される
  // ローカル取得
  console.log(date.getFullYear()); // 2024
  console.log(date.getMonth()); // 0-11で返すため一つ前の月が返る
  console.log(date.getDate()); // 1-31
  console.log(date.getDay()); // 0-6 (0: 日曜日、1: 月曜日、2: 火曜日、3: 水曜日、4: 木曜日、5: 金曜日、6: 土曜日)
  console.log(date.getHours()); // 0-23
  console.log(date.getMinutes()); // 0-59
  console.log(date.getSeconds()); // 0-59
  console.log(date.getMilliseconds()); // 0-999 ミリ秒
  console.log(date.getTime()); // 1970年1月1日からのミリ秒数
  console.log(date.getTimezoneOffset()); // タイムゾーンとUTCの差を分単位で返す。協定世界時との時差を分単位で返す

  // ローカル設定
  // date.setFullYear(2024); // 年を設定
  // date.setMonth(0); // 月を設定 0-11で設定
  // date.setDate(1); // 日を設定 1-31で設定
  // date.setHours(0); // 時を設定 0-23で設定
  // date.setMinutes(0); // 分を設定 0-59で設定
  // date.setSeconds(0); // 秒を設定 0-59で設定
  // date.setMilliseconds(0); // ミリ秒を設定 0-999で設定
  // date.setTime(0); // 1970年1月1日からのミリ秒数を設定
  // console.log(date);

  //協定時取得
  console.log(date.getUTCFullYear()); // 2024
  console.log(date.getUTCMonth()); // 0-11で返すため一つ前の月が返る
  console.log(date.getUTCDate()); // 1-31
  console.log(date.getUTCDay()); // 0-6 (0: 日曜日、1: 月曜日、2: 火曜日、3: 水曜日、4: 木曜日、5: 金曜日、6: 土曜日)
  console.log(date.getUTCHours()); // 0-23
  console.log(date.getUTCMinutes()); // 0-59
  console.log(date.getUTCSeconds()); // 0-59
  console.log(date.getUTCMilliseconds()); // 0-999 ミリ秒
  console.log(date.getTime()); // 1970年1月1日からのミリ秒数
  console.log(date.getTimezoneOffset()); // タイムゾーンとUTCの差を分単位で返す。協定世界時との時差を分単位で返す

  // 協定時設定
  // date.setUTCFullYear(2024); // 年を設定
  // date.setUTCMonth(0); // 月を設定 0-11で設定
  // date.setUTCDate(1); // 日を設定 1-31で設定
  // date.setUTCHours(0); // 時を設定 0-23で設定
  // date.setUTCMinutes(0); // 分を設定 0-59で設定
  // date.setUTCSeconds(0); // 秒を設定 0-59で設定
  // date.setUTCMilliseconds(0); // ミリ秒を設定 0-999で設定
  // date.setTime(0); // 1970年1月1日からのミリ秒数を設定

  // 文字列変化
  console.log(date.toUTCString()); // 協定世界時を文字列として取得
  console.log(date.toLocaleString()); //ローカル時を文字列として取得
  console.log(date.toDateString()); // 日付を文字列として取得
  console.log(date.toTimeString()); // 時間を文字列として取得
  console.log(date.toLocaleDateString()); // ローカル日付を文字列として取得
  console.log(date.toString()); // 日時を文字列として取得
  console.log("JSON形式", date.toJSON()); // JSON形式で取得？になってない気がする
  
}

checkDateObject();
