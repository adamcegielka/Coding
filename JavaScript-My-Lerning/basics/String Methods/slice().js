// slice(start, end) - Downloads a string fragment

let message = '012345678';

let a = message.slice(1, 6);
console.log(a);         // 12345

let b = message.slice(-1, 9);
console.log(b);         // 8

let c = message.slice(-3);
console.log(c)         // 678

let d = message.slice(-3, -1);
console.log(d)         // 56

// --------------------------------------

function getEmailParts(email) {
    const monkeyIndex = email.indexOf('@');
    if (monkeyIndex == -1)
    return null;

    // const dotIndex = email.indexOf('.', monkeyIndex);
    const dotIndex = email.lastIndexOf('.');
    if (dotIndex == -1)
    return null;

    const user = email.slice(0, monkeyIndex);
    const domainName = email.slice(monkeyIndex + 1, dotIndex);
    const domainExt = email.slice(dotIndex + 1, email.length);

    return {
        user: user,
        domainName: domainName,
        domainExt: domainExt
    }
};

console.log(getEmailParts('adam@example.com'));
    // {user: 'adam', domainName: 'example', domainExt: 'com'}