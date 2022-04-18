function statement (invoice, plays) {
    return renderPlainText(invoice, plays);
}
function renderPlainText(invoice, plays) {
    let result = `Statement for ${invoice.customer}\n`;
    for (let perf of invoice.performances) {
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
    }r
    esult += `Amount owed is ${usd(totalAmount())}\n`;
    result += `You earned ${totalVolumeCredits()} credits\n`;
    return result;
    function totalAmount() {...}
    function totalVolumeCredits() {...}
    function usd(aNumber) {...}
    function volumeCreditsFor(aPerformance) {...}
    function playFor(aPerformance) {...}
    function amountFor(aPerformance) {...}