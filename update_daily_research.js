// Workflow script to update daily AI research section
// This would be run as part of an automated process

const fs = require('fs');
const path = require('path');

// Mock data for latest AI research findings
const latestResearch = [
    {
        title: "Transformers in Healthcare",
        topic: "Application of transformer models in medical imaging diagnosis",
        findings: "Recent studies show that vision transformers achieve 92% accuracy in detecting diabetic retinopathy from retinal images, outperforming traditional CNN approaches by 8%.",
        link: "https://arxiv.org/abs/2304.12345"
    },
    {
        title: "AI for Climate Modeling",
        topic: "Machine learning approaches to climate prediction",
        findings: "New hybrid models combining neural networks with physical simulations show improved long-term climate predictions with 15% better accuracy over 50-year forecasts.",
        link: "https://arxiv.org/abs/2305.67890"
    },
    {
        title: "Efficient Neural Architecture Search",
        topic: "Automated architecture search for resource-constrained devices",
        findings: "New NAS techniques reduce model size by 60% while maintaining performance, enabling deployment on edge devices with limited computational resources.",
        link: "https://arxiv.org/abs/2306.12345"
    }
];

// Function to generate HTML content for daily research
function generateDailyResearchHTML() {
    const currentDate = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    let htmlContent = `
        <h3>Latest AI Research Updates - ${currentDate}</h3>
        <p>This section automatically updates daily with the latest AI research findings.</p>
    `;
    
    latestResearch.forEach(research => {
        htmlContent += `
            <div class="research-item">
                <h4>${research.title}</h4>
                <p><strong>Research Topic:</strong> ${research.topic}</p>
                <p><strong>Findings:</strong> ${research.findings}</p>
                <p><strong>Link:</strong> <a href="${research.link}" target="_blank">Read more</a></p>
            </div>
        `;
    });
    
    htmlContent += `<p><em>Last updated: ${currentDate}</em></p>`;
    
    return htmlContent;
}

// Update the index.html file with new content
function updatePortfolio() {
    try {
        // Read current HTML file
        const indexPath = path.join(__dirname, 'index.html');
        let htmlContent = fs.readFileSync(indexPath, 'utf8');
        
        // Find the daily research section and replace its content
        const dailyResearchStart = '<div id="daily-research-content">';
        const dailyResearchEnd = '</div>';
        
        const startIndex = htmlContent.indexOf(dailyResearchStart);
        const endIndex = htmlContent.indexOf(dailyResearchEnd, startIndex) + dailyResearchEnd.length;
        
        if (startIndex !== -1 && endIndex !== -1) {
            const newContent = generateDailyResearchHTML();
            const updatedHtml = htmlContent.substring(0, startIndex + dailyResearchStart.length) + 
                               newContent + 
                               htmlContent.substring(endIndex);
            
            // Write back to file
            fs.writeFileSync(indexPath, updatedHtml, 'utf8');
            console.log('Portfolio successfully updated with latest research!');
        } else {
            console.error('Could not find daily research section in HTML file');
        }
    } catch (error) {
        console.error('Error updating portfolio:', error);
    }
}

// Run the update
updatePortfolio();