// String substring(), split(), slice()

function getEmailParts(email) {
    const monkeyIndex = email.indexOf('@');
    if (monkeyIndex == -1) return null;

    const dotIndex = email.lastIndexOf('.');
    if (dotIndex == -1) return null;

    const parts = email.split('@');

    const name = email.substring(0, monkeyIndex);

    const domainLen = dotIndex - monkeyIndex - 1;
    const domain = email.substr(monkeyIndex + 1, domainLen);

    const extLen = email.length - dotIndex - 1;
    const domainExt = email.slice(-extLen);

    return {
        len: email.length,
        parts: parts,
        name: name,
        domain: domain,
        domainExt: domainExt  
    };
}

console.log(getEmailParts('adam@example.com'));
console.log(getEmailParts('john.smith@sample.gov'));

/*
{len: 16, parts: Array(2), name: 'adam', domain: 'example', domainExt: 'com'}
    domain: "example"
    domainExt: "com"
    len: 16
    name: "adam"
    parts: Array(2)
        0: "adam"
        1: "example.com"
        length: 2
*/

/*
{len: 21, parts: Array(2), name: 'john.smith', domain: 'sample', domainExt: 'gov'}
    domain: "sample"
    domainExt: "gov"
    len: 21
    name: "john.smith"
    parts: Array(2)
        0: "john.smith"
        1: "sample.gov"
        length: 2
*/