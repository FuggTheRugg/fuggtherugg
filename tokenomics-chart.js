// tokenomics-chart.js

const ctx = document.getElementById('tokenomicsChart').getContext('2d');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Public (90%)', 'Family (6%)', 'Developer (2%)', 'Marketing (1%)', 'Community (1%)'],
    datasets: [{
      data: [90, 6, 2, 1, 1],
      backgroundColor: ['#a6e22e', '#f90', '#00f', '#f0f', '#222'],
      borderColor: '#000',
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: 'white',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'Fugg the Rugg Tokenomics',
        color: 'white',
        font: {
          size: 20
        }
      }
    }
  }
});
