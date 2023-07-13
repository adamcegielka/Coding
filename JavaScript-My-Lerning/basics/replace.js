function hideWords(text) {
    text = text.replace(/sql/gi, '******');
    text = text.replace(/api/gi, '*'.repeat(5));
    text = text.replace(/playwright/gi, '*'.repeat(5));
    text = text.replace(/javascript/gi, '*'.repeat(5));
    text = text.replace(/tester/gi, '*'.repeat(5));

    return text;
}

const mainText = 'I am a novice Tester, and so far I have learned SQL and how to test API. I am currently improving my skills in Playwright and JavaScript.';

let newContent = hideWords(mainText);
console.log(newContent);

// I am a novice *****, and so far I have learned ****** and how to test *****. I am currently improving my skills in ***** and *****.