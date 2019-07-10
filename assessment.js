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
        '{userName}のいいところは声です。',
        '{userName}のいいところはまなざしです。',
        '{userName}のいいところは情熱です。',
        '{userName}のいいところは厳しさです。',
        '{userName}のいいところは知識です。',
        '{userName}のいいところはユニークさです。',
        '{userName}のいいところは用心深さです。',
        '{userName}のいいところは見た目です。',
        '{userName}のいいところは決断力です。',
        '{userName}のいいところは思いやりです。',
        '{userName}のいいところは感受性です。',
        '{userName}のいいところは節度です。',
        '{userName}のいいところは好奇心です。',
        '{userName}のいいところは気配りです。',
        '{userName}のいいところはその全てです。',
        '{userName}のいいところは自制心です。',
        '{userName}のいいところは優しさです。'
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
