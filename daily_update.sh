#!/bin/bash

# Daily update script for AI Engineering Research Hub
# This script can be scheduled as a cron job to automatically update the research section

echo "Starting daily AI research update..."

# Navigate to project directory
cd "$(dirname "$0")"

# Run the Node.js script to update research content
node update_daily_research.js

# Check if git is available and commit changes if needed
if command -v git &> /dev/null; then
    echo "Git detected, checking for changes..."
    
    # Check if there are any changes
    if git diff-index --quiet HEAD --; then
        echo "No changes to commit"
    else
        echo "Changes detected, committing..."
        
        # Add all files
        git add .
        
        # Commit with a message
        git commit -m "Update daily AI research section $(date '+%Y-%m-%d')"
        
        # Push to remote (if configured)
        git push origin main 2>/dev/null || echo "No remote repository configured or push failed"
    fi
else
    echo "Git not found. Skipping version control steps."
fi

echo "Daily update completed successfully!"