document.getElementById('profitForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const profit = parseFloat(document.getElementById('profit').value);
  const mpg = parseFloat(document.getElementById('mpg').value);
  const miles = parseFloat(document.getElementById('miles').value);
  const gallonPrice = 2.5;

  if (isNaN(profit) || isNaN(mpg) || isNaN(miles) || mpg <= 0) {
    showResults('Please enter valid numbers for all fields.');
    return;
  }

  // Calculate gas cost
  const gallonsUsed = miles / mpg;
  const gasCost = gallonsUsed * gallonPrice;
  const netProfit = profit - gasCost;

  // Split
  const driverShare = netProfit * 0.75;
  const helperShare = netProfit * 0.25;

  let resultHtml = `<strong>Results:</strong><br />`;
  resultHtml += `Total Gas Cost: <span style='color:#b388ff;'>$${gasCost.toFixed(2)}</span><br />`;
  resultHtml += `Net Profit After Gas: <span style='color:#b388ff;'>$${netProfit.toFixed(2)}</span><br /><br />`;
  resultHtml += `<span style='color:#a48be0;'>Driver (75%):</span> <strong>$${driverShare.toFixed(2)}</strong><br />`;
  resultHtml += `<span style='color:#a48be0;'>Helper (25%):</span> <strong>$${helperShare.toFixed(2)}</strong>`;

  showResults(resultHtml);
});

function showResults(html) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = html;
  resultsDiv.classList.add('active');
} 
