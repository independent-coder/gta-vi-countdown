// Milestones tracking and display system
export class MilestonesManager {
    constructor(config) {
        this.config = config;
        this.milestones = [...config.MILESTONES];
    }

    updateMilestones() {
        const now = new Date().getTime();
        const milestonesContainer = document.getElementById('milestones-container');
        
        if (!milestonesContainer) return;

        // Clear existing milestones
        milestonesContainer.innerHTML = '';

        // Filter and sort milestones
        const upcomingMilestones = this.milestones
            .filter(milestone => milestone.date > now)
            .sort((a, b) => a.date - b.date)
            .slice(0, 3); // Show next 3 upcoming milestones

        const pastMilestones = this.milestones
            .filter(milestone => milestone.date <= now)
            .sort((a, b) => b.date - a.date)
            .slice(0, 2); // Show last 2 past milestones

        // Create milestone elements
        [...upcomingMilestones, ...pastMilestones].forEach(milestone => {
            const milestoneElement = this.createMilestoneElement(milestone, now);
            milestonesContainer.appendChild(milestoneElement);
        });
    }

    createMilestoneElement(milestone, now) {
        const isPast = milestone.date <= now;
        const timeUntil = milestone.date - now;
        
        const milestoneDiv = document.createElement('div');
        milestoneDiv.className = `milestone ${isPast ? 'past' : 'upcoming'}`;
        
        // Calculate time display
        let timeDisplay = '';
        if (isPast) {
            const daysPast = Math.floor((now - milestone.date) / (1000 * 60 * 60 * 24));
            timeDisplay = daysPast === 0 ? 'Today' : `${daysPast} days ago`;
        } else {
            timeDisplay = this.formatTimeUntil(timeUntil);
        }

        // Format the date
        const milestoneDate = new Date(milestone.date);
        const formattedDate = milestoneDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        milestoneDiv.innerHTML = `
            <div class="milestone-icon">
                <i class="fas ${milestone.icon}"></i>
            </div>
            <div class="milestone-content">
                <h3 class="milestone-title">${milestone.title}</h3>
                <p class="milestone-description">${milestone.description}</p>
                <div class="milestone-date">${formattedDate}</div>
                <div class="milestone-time">
                    ${isPast ? 
                        `<span class="milestone-status past">✓ Completed</span>` : 
                        `<span class="milestone-status upcoming">${timeDisplay}</span>`
                    }
                </div>
            </div>
        `;

        return milestoneDiv;
    }

    formatTimeUntil(timeUntil) {
        const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
        const months = Math.floor(days / 30);
        const remainingDays = days % 30;

        if (months > 0) {
            return months === 1 ? '1 month' : `${months} months`;
        } else if (days > 0) {
            return days === 1 ? '1 day' : `${days} days`;
        } else {
            const hours = Math.floor(timeUntil / (1000 * 60 * 60));
            return hours === 1 ? '1 hour' : `${hours} hours`;
        }
    }

    getNextMilestone() {
        const now = new Date().getTime();
        const upcoming = this.milestones
            .filter(milestone => milestone.date > now)
            .sort((a, b) => a.date - b.date);
        
        return upcoming.length > 0 ? upcoming[0] : null;
    }

    getMilestoneProgress() {
        const now = new Date().getTime();
        const totalMilestones = this.milestones.length;
        const completedMilestones = this.milestones.filter(milestone => milestone.date <= now).length;
        
        return {
            completed: completedMilestones,
            total: totalMilestones,
            percentage: (completedMilestones / totalMilestones) * 100
        };
    }
}
