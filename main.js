const helloButton = document.getElementById("helloButton");
const nameDisplay = document.getElementById("nameDisplay");

helloButton.onclick = function () {
  nameDisplay.textContent = "I'm Rio Abe.";
};

const AboutMe = {
  text: "About Me",
  // image: "Ganymede.jpg",
  choices: [
    {
      text: "プログラミング",
      feedback:
        "3ヶ月でiOSアプリをリリースしました。現在はweb開発も勉強中です。",
    },
    {
      text: "上智大学4年",
      feedback:
        "フランス語やフランス文学を勉強しています。大学3年から予定していたリール大学への留学が中止に。中国語も学びたいです。",
    },
    {
      text: "インターン",
      feedback:
        "プログラミングスクールの運営インターンをしています。アプリ開発のサポート、営業を行っています。",
    },
  ],
};
