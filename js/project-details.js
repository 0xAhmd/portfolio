// Project Details Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    
    if (projectId && projectsData[projectId]) {
        loadProjectDetails(projectsData[projectId]);
        setupProjectNavigation(projectId);
    } else {
        // Redirect to portfolio if no valid project ID
        window.location.href = 'index.html#projects';
    }
});

// Load and display project details
function loadProjectDetails(project) {
    // Update page title
    document.title = `${project.name} - Ahmed Hesham`;
    
    // Update hero section
    const projectNameEl = document.getElementById('project-name');
    const projectTaglineEl = document.getElementById('project-tagline');
    
    if (projectNameEl) projectNameEl.textContent = project.name;
    if (projectTaglineEl) projectTaglineEl.textContent = project.tagline;
    
    // Update description
    const descriptionContainer = document.getElementById('project-description');
    if (descriptionContainer) {
        descriptionContainer.innerHTML = '';
        project.description.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            descriptionContainer.appendChild(p);
        });
    }
    
    // Update main image
    const mainImage = document.getElementById('main-project-image');
    if (mainImage && project.mainImage) {
        mainImage.src = project.mainImage;
        mainImage.alt = project.name;
        mainImage.onerror = function() {
            this.src = 'assets/images/placeholder.jpg';
        };
    }
    
    // Update additional images
    const additionalImagesContainer = document.getElementById('additional-images');
    if (additionalImagesContainer) {
        additionalImagesContainer.innerHTML = '';
        if (project.additionalImages && project.additionalImages.length > 0) {
            project.additionalImages.forEach(imageSrc => {
                const img = document.createElement('img');
                img.src = imageSrc;
                img.alt = `${project.name} screenshot`;
                img.addEventListener('click', () => openImageModal(imageSrc));
                img.onerror = function() {
                    this.style.display = 'none';
                };
                additionalImagesContainer.appendChild(img);
            });
        }
    }
    
    // Update contributions
    const contributionsContainer = document.getElementById('project-contributions');
    if (contributionsContainer) {
        contributionsContainer.innerHTML = '';
        project.contributions.forEach(contribution => {
            const card = createContributionCard(contribution);
            contributionsContainer.appendChild(card);
        });
    }
    
    // Update tools
    const toolsContainer = document.getElementById('project-tools');
    if (toolsContainer) {
        toolsContainer.innerHTML = '';
        project.tools.forEach(tool => {
            const badge = createToolBadge(tool);
            toolsContainer.appendChild(badge);
        });
    }
    
    // Update team section
    const teamSection = document.getElementById('team-section');
    const teamContainer = document.getElementById('project-team');
    
    if (teamSection && teamContainer) {
        teamContainer.innerHTML = '';
        
        if (project.teammates && project.teammates.length > 0) {
            teamSection.style.display = 'block';
            project.teammates.forEach(teammate => {
                const memberCard = createTeamMemberCard(teammate);
                teamContainer.appendChild(memberCard);
            });
        } else {
            teamSection.style.display = 'none';
        }
    }
    
    // Update links
    const linksSection = document.getElementById('links-section');
    const linksContainer = document.getElementById('project-links');
    
    if (linksSection && linksContainer) {
        linksContainer.innerHTML = '';
        
        if (project.links && project.links.length > 0) {
            linksSection.style.display = 'block';
            project.links.forEach(link => {
                const linkButton = createLinkButton(link);
                linksContainer.appendChild(linkButton);
            });
        } else {
            linksSection.style.display = 'none';
        }
    }
    
    // Initialize animations
    initializePageAnimations();
}

// Create contribution card
function createContributionCard(contribution) {
    const card = document.createElement('div');
    card.className = 'contribution-card';
    
    const title = document.createElement('h3');
    title.innerHTML = `<span class="icon">${contribution.icon}</span> ${contribution.title}`;
    card.appendChild(title);
    
    const list = document.createElement('ul');
    contribution.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    card.appendChild(list);
    
    return card;
}

// Create tool badge
function createToolBadge(tool) {
    const badge = document.createElement('div');
    badge.className = 'tool-badge';
    badge.innerHTML = `<span class="tool-icon">${tool.icon}</span> ${tool.name}`;
    return badge;
}

// Create team member card
function createTeamMemberCard(teammate) {
    const card = document.createElement('div');
    card.className = 'team-member';
    
    const avatar = document.createElement('div');
    avatar.className = 'team-avatar';
    avatar.textContent = teammate.initials;
    card.appendChild(avatar);
    
    const name = document.createElement('h4');
    name.textContent = teammate.name;
    card.appendChild(name);
    
    const role = document.createElement('div');
    role.className = 'role';
    role.textContent = teammate.role;
    card.appendChild(role);
    
    const contribution = document.createElement('div');
    contribution.className = 'contribution';
    contribution.textContent = teammate.contribution;
    card.appendChild(contribution);
    
    return card;
}

// Create link button
function createLinkButton(link) {
    const button = document.createElement('a');
    button.className = 'link-button';
    button.href = link.url;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.innerHTML = `<span class="link-icon">${link.icon}</span> ${link.text}`;
    
    if (link.url === '#') {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showComingSoonMessage();
        });
    }
    
    return button;
}

// Setup project navigation - FIXED VERSION
function setupProjectNavigation(currentProjectId) {
    const projectIds = Object.keys(projectsData);
    const currentIndex = projectIds.indexOf(currentProjectId);
    
    const prevButton = document.getElementById('prev-project');
    const nextButton = document.getElementById('next-project');
    
    console.log('Current project:', currentProjectId);
    console.log('Current index:', currentIndex);
    console.log('Project IDs:', projectIds);
    console.log('Prev button:', prevButton);
    console.log('Next button:', nextButton);
    
    // Previous project
    if (prevButton) {
        if (currentIndex > 0) {
            const prevProjectId = projectIds[currentIndex - 1];
            const prevProjectName = projectsData[prevProjectId].name;
            
            prevButton.href = `project-details.html?project=${prevProjectId}`;
            prevButton.style.display = 'flex';
            prevButton.innerHTML = `<span>←</span> ${prevProjectName}`;
            
            // Add click event listener as backup
            prevButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = `project-details.html?project=${prevProjectId}`;
            });
            
            console.log('Previous project set:', prevProjectId);
        } else {
            prevButton.style.display = 'none';
            console.log('No previous project available');
        }
    }
    
    // Next project
    if (nextButton) {
        if (currentIndex < projectIds.length - 1) {
            const nextProjectId = projectIds[currentIndex + 1];
            const nextProjectName = projectsData[nextProjectId].name;
            
            nextButton.href = `project-details.html?project=${nextProjectId}`;
            nextButton.style.display = 'flex';
            nextButton.innerHTML = `${nextProjectName} <span>→</span>`;
            
            // Add click event listener as backup
            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = `project-details.html?project=${nextProjectId}`;
            });
            
            console.log('Next project set:', nextProjectId);
        } else {
            nextButton.style.display = 'none';
            console.log('No next project available');
        }
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && prevButton && prevButton.style.display !== 'none') {
            prevButton.click();
        } else if (e.key === 'ArrowRight' && nextButton && nextButton.style.display !== 'none') {
            nextButton.click();
        }
    });
}

// Initialize page animations
function initializePageAnimations() {
    // Fade in sections
    const sections = document.querySelectorAll('.project-section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Animate contribution cards
    const contributionCards = document.querySelectorAll('.contribution-card');
    contributionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }, index * 100);
    });
    
    // Animate tool badges
    const toolBadges = document.querySelectorAll('.tool-badge');
    toolBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.8)';
        setTimeout(() => {
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
            badge.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        }, index * 50);
    });
}

// Open image in modal (optional feature)
function openImageModal(imageSrc) {
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: zoom-out;
        animation: fadeIn 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: zoomIn 0.3s ease;
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // Close on click
    modal.addEventListener('click', () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }, 300);
    });
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.click();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Show coming soon message
function showComingSoonMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #7777c6, #ff77c6);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 1.1rem;
        z-index: 10000;
        animation: bounceIn 0.5s ease;
        box-shadow: 0 10px 40px rgba(119, 119, 198, 0.4);
    `;
    message.textContent = 'Coming Soon!';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'bounceOut 0.5s ease';
        setTimeout(() => {
            if (document.body.contains(message)) {
                document.body.removeChild(message);
            }
        }, 500);
    }, 2000);
}

// Add necessary CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes zoomIn {
        from { transform: scale(0.8); }
        to { transform: scale(1); }
    }
    
    @keyframes bounceIn {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.05); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes bounceOut {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
    }
    
    .project-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4rem 0 2rem;
        gap: 1rem;
    }
    
    .nav-button {
        padding: 12px 24px;
        background: linear-gradient(135deg, #7777c6, #ff77c6);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 500;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 150px;
        justify-content: center;
    }
    
    .nav-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(119, 119, 198, 0.4);
    }
    
    .nav-button.center {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .nav-button span {
        font-size: 1.2em;
    }
    
    @media (max-width: 768px) {
        .project-navigation {
            flex-direction: column;
            gap: 1rem;
        }
        
        .nav-button {
            width: 100%;
        }
    }
`;
document.head.appendChild(style);