(function() {
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    function removeAllChildren(element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    assessmentButton.onclick = function() {
        const userName = userNameInput.value;
        if(userName.lentgth === 0) {
            return;
        }
        // 診断結果エリアの作成
        removeAllChildren(resultDivided);

        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);

        // TODO ツイートエリアの作成
        removeAllChildren(tweetDivided);
    }

    const answers = [
        '{userName}のいいところは声です。{userName}の特徴的な声は皆を聞いた人は死ぬ',
        '{userName}のいいところはまなざしです。{userName}に見つめられた人は死ぬ',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は死ぬ',
        '{userName}のいいところは厳しさです。{userName}の厳しさで死ぬ',
        '{userName}のいいところは知識です。博識な{userName}のせいで死ぬ',
        '{userName}のいいところはユニークさです。{userName}だけ死ぬ',
        '{userName}のいいところは用心深さです。{userName}がする決断で死ぬ',
        '{userName}のいいところは見た目です。内側から死ぬ',
        '{userName}のいいところは決断力です。{userName}がする決断で死ぬ',
        '{userName}のいいところは思いやりです。{userName}に気をかけて死ぬ',
        '{userName}のいいところは感受性です。{userName}が感じて死ぬ',
        '{userName}のいいところは節度です。強引すぎず死ぬ',
        '{userName}のいいところは好奇心です。新しいことに向かって死ぬ',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を殺す',
        '{userName}のいいところはその全てです。ありのまま死ぬ',
        '{userName}のいいところは自制心です。まずいと思ったときに死ぬ'
    ];

    function assessment(userName) {
        // 全文字のコード番号を取得してそれを足し合わせる
        let sumOfcharCode = 0;
        for(let i=0; i<userName.length; i++) {
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
        }

        // 文字コード番号の合計を回答の数で割って添字の数値を求める
        const index = sumOfcharCode % answers.length;
        let result = answers[index];

        result = result.replace(/{userName}/g, userName);

        // TODO {userName}をユーザーの名前に置き換える
        return result;
    }
})();
