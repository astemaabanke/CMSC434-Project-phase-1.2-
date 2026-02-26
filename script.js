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


