/* ============================================
   TAB SWITCHING FUNCTIONALITY
   This code handles switching between tabs
   when a user clicks on a tab button.

   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content areas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the ID of the tab to show
            const tabId = this.getAttribute('data-tab');
            
            // Remove 'active' class from all buttons and content areas
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add 'active' class to clicked button and its content
            this.classList.add('active');
            document.getElementById(tabId + '-content').classList.add('active');
        });
    });
});

/* ============================================
   ADD YOUR CUSTOM JAVASCRIPT BELOW THIS LINE
   
   
   ============================================ */

// Initialize pie chart when page loads
document.addEventListener('DOMContentLoaded', function() {
    createPieChart();
});

function createPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    // Improve canvas quality for crisp rendering
    const canvas = ctx.canvas;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    // Register the plugin
    Chart.register(ChartDataLabels);
    
    const pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Roses', 'Violets', 'Tulips'],
            datasets: [{
                data: [300, 500, 100],
                backgroundColor: [
                    '#FF4081', // Vibrant pink for Roses
                    '#9C27B0', // Rich purple for Violets  
                    '#FFC107'  // Bright yellow for Tulips
                ],
                borderWidth: 3,
                borderColor: '#ffffff',
                hoverBorderWidth: 4,
                hoverBorderColor: '#333333'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            devicePixelRatio: dpr,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rect',
                        padding: 20,
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                datalabels: {
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 16
                    },
                    formatter: (value) => {
                        return value;
                    },
                    textStrokeColor: '#000000',
                    textStrokeWidth: 1
                }
            },
            animation: {
                animateRotate: true,
                duration: 1500
            }
        },
        plugins: [ChartDataLabels]
    });
}