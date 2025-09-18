// Project Data Structure
const projectsData = {
    'graph-social': {
        id: 'graph-social',
        name: 'Graph - Social Media App',
        tagline: 'A comprehensive social media platform built with Flutter and Firebase',
        description: [
            'Graph is a full-featured social media application designed to connect people through meaningful interactions. Built with Flutter for cross-platform compatibility and Firebase for robust backend services, this app delivers a seamless social networking experience.',
            'The application features a modern, intuitive interface that prioritizes user engagement and content discovery. With real-time updates, push notifications, and smooth animations, Graph provides a native-like experience on both iOS and Android platforms.',
            'Key focus areas during development included performance optimization, scalable architecture implementation, and creating an engaging user experience that encourages social interaction while maintaining user privacy and data security.'
        ],
        mainImage: 'assets/images/graph.jpg',
        additionalImages: [
            'assets/images/graph-feed.jpg',
            'assets/images/graph-profile.jpg',
            'assets/images/graph-chat.jpg'
        ],
        contributions: [
            {
                title: 'UI/UX Design',
                icon: '🎨',
                items: [
                    'Created complete design system in Figma',
                    'Designed 50+ screens including onboarding, feed, and profile',
                    'Developed interactive prototypes for user testing',
                    'Established consistent visual language and branding'
                ]
            },
            {
                title: 'Frontend Development',
                icon: '📱',
                items: [
                    'Implemented responsive UI with Flutter',
                    'Built custom animated widgets and transitions',
                    'Integrated BLoC pattern for state management',
                    'Optimized performance for smooth 60fps scrolling'
                ]
            },
            {
                title: 'Backend Integration',
                icon: '🔧',
                items: [
                    'Set up Firebase Authentication with multiple providers',
                    'Implemented Firestore for real-time data synchronization',
                    'Configured Cloud Functions for server-side logic',
                    'Integrated FCM for push notifications'
                ]
            },
            {
                title: 'Features Implemented',
                icon: '✨',
                items: [
                    'Real-time chat with message status indicators',
                    'Dual feed system (Following & Explore)',
                    'User profiles with customization options',
                    'Content sharing with privacy controls'
                ]
            }
        ],
        tools: [
            { name: 'Flutter', icon: '📱' },
            { name: 'Dart', icon: '🎯' },
            { name: 'Firebase', icon: '🔥' },
            { name: 'BLoC', icon: '🏗️' },
            { name: 'Figma', icon: '🎨' },
            { name: 'Git', icon: '📚' },
            { name: 'REST APIs', icon: '🔌' },
            { name: 'Cloud Firestore', icon: '☁️' }
        ],
        teammates: [
            {
                name: 'Ahmed Ali',
                role: 'Backend Developer',
                initials: 'AA',
                contribution: 'Developed server-side APIs and database architecture'
            },
            {
                name: 'Sarah Mohamed',
                role: 'QA Engineer',
                initials: 'SM',
                contribution: 'Conducted comprehensive testing and bug reporting'
            }
        ],
        links: [
            { text: 'View on GitHub', url: 'https://github.com/0xAhmd/graph-social', icon: '🔗' },
            { text: 'Download APK', url: '#', icon: '⬇️' },
            { text: 'Figma Design', url: '#', icon: '🎨' }
        ]
    },
    'fakemind-ai': {
        id: 'fakemind-ai',
        name: 'Fake-Mind AI Chatbot',
        tagline: 'An intelligent conversational AI powered by Gemini',
        description: [
            'Fake-Mind is an advanced AI chatbot application that leverages the power of Gemini AI to provide intelligent, context-aware conversations. The app features a beautiful, responsive interface with full markdown support for rich text formatting.',
            'Built with Flutter and Provider for state management, the application offers a smooth, lag-free chat experience with features like conversation history, customizable themes, and export capabilities.',
            'The project focused on creating an intuitive user experience that makes AI accessible to everyone, with special attention to response formatting, error handling, and maintaining conversation context across sessions.'
        ],
        mainImage: 'assets/images/fakemind.png',
        additionalImages: [
            'assets/images/fakemind-chat.jpg',
            'assets/images/fakemind-settings.jpg',
            'assets/images/fakemind-history.jpg'
        ],
        contributions: [
            {
                title: 'Architecture Design',
                icon: '🏗️',
                items: [
                    'Implemented clean architecture principles',
                    'Designed modular component structure',
                    'Created reusable widget library',
                    'Set up dependency injection system'
                ]
            },
            {
                title: 'AI Integration',
                icon: '🤖',
                items: [
                    'Integrated Gemini AI API',
                    'Implemented streaming responses',
                    'Built context management system',
                    'Added prompt engineering features'
                ]
            },
            {
                title: 'UI Development',
                icon: '💻',
                items: [
                    'Created responsive chat interface',
                    'Implemented markdown rendering',
                    'Built custom message bubbles',
                    'Added typing indicators and animations'
                ]
            },
            {
                title: 'Features',
                icon: '⚡',
                items: [
                    'Conversation history with search',
                    'Export chat as PDF/Text',
                    'Dark/Light theme support',
                    'Code syntax highlighting'
                ]
            }
        ],
        tools: [
            { name: 'Flutter', icon: '📱' },
            { name: 'Dart', icon: '🎯' },
            { name: 'Gemini AI', icon: '🤖' },
            { name: 'Provider', icon: '🔄' },
            { name: 'Markdown', icon: '📝' },
            { name: 'Hive DB', icon: '💾' },
            { name: 'HTTP', icon: '🌐' }
        ],
        teammates: [], // Solo project
        links: [
            { text: 'GitHub Repository', url: 'https://github.com/0xAhmd/fakemind', icon: '🔗' },
            { text: 'Live Demo', url: '#', icon: '🚀' }
        ]
    },
    'aerogo-fitness': {
        id: 'aerogo-fitness',
        name: 'AeroGo - Fitness App',
        tagline: 'A comprehensive fitness tracking and workout planning application',
        description: [
            'AeroGo is a fitness application designed to help users track their workouts, monitor progress, and achieve their fitness goals. The project involved extensive UX research to understand user needs and create an intuitive, motivating experience.',
            'Working with a UI/UX design team, I developed a fitness app that resonates with users through its clean, modern interface and thoughtful user journey. The design process included user research, wireframing, prototyping, and usability testing.',
            'The app features personalized workout plans, progress tracking, social challenges, and integration with wearable devices. Special attention was paid to creating an encouraging, non-intimidating experience for users of all fitness levels.'
        ],
        mainImage: 'assets/images/aerogo.png',
        additionalImages: [
            'assets/images/aerogo-workout.jpg',
            'assets/images/aerogo-progress.jpg',
            'assets/images/aerogo-social.jpg'
        ],
        contributions: [
            {
                title: 'UX Research',
                icon: '🔍',
                items: [
                    'Conducted user interviews and surveys',
                    'Created user personas and journey maps',
                    'Analyzed competitor applications',
                    'Identified key pain points and opportunities'
                ]
            },
            {
                title: 'UI Design',
                icon: '🎨',
                items: [
                    'Designed complete app interface in Figma',
                    'Created custom icons and illustrations',
                    'Developed consistent design system',
                    'Built interactive prototypes'
                ]
            },
            {
                title: 'Prototyping',
                icon: '🔧',
                items: [
                    'Built high-fidelity interactive prototypes',
                    'Created animation specifications',
                    'Designed micro-interactions',
                    'Conducted usability testing sessions'
                ]
            },
            {
                title: 'Features Designed',
                icon: '💪',
                items: [
                    'Workout tracking and planning',
                    'Progress visualization dashboard',
                    'Social challenges and leaderboards',
                    'Nutrition tracking integration'
                ]
            }
        ],
        tools: [
            { name: 'Figma', icon: '🎨' },
            { name: 'Miro', icon: '📋' },
            { name: 'Adobe XD', icon: '🎯' },
            { name: 'Prototyping', icon: '🔄' },
            { name: 'User Research', icon: '📊' },
            { name: 'Wireframing', icon: '📐' }
        ],
        teammates: [
            {
                name: 'UI/UX Team Lead',
                role: 'Senior Designer',
                initials: 'TL',
                contribution: 'Provided design direction and mentorship'
            },
            {
                name: 'Research Team',
                role: 'UX Researchers',
                initials: 'RT',
                contribution: 'Collaborated on user research and testing'
            }
        ],
        links: [
            { text: 'View Figma Design', url: '#', icon: '🎨' },
            { text: 'Case Study', url: '#', icon: '📖' },
            { text: 'Prototype Demo', url: '#', icon: '▶️' }
        ]
    },
    'freekick-sports': {
        id: 'freekick-sports',
        name: 'Free-Kick Sports App',
        tagline: 'A sports booking and team management platform',
        description: [
            'Free-Kick is a comprehensive sports platform designed to connect players, manage teams, and book sports facilities. The project covered the entire UX design process from initial research to final prototypes.',
            'The application addresses the challenges of organizing amateur sports activities, finding players for games, and booking suitable venues. Through extensive user research, we identified key pain points in the current sports booking ecosystem.',
            'The design features an intuitive booking system, team management tools, player matching algorithms, and social features to build a community around local sports activities.'
        ],
        mainImage: 'assets/images/thumbnail.png',
        additionalImages: [
            'assets/images/freekick-booking.jpg',
            'assets/images/freekick-teams.jpg',
            'assets/images/freekick-matches.jpg'
        ],
        contributions: [
            {
                title: 'Research & Analysis',
                icon: '📊',
                items: [
                    'Conducted market research on sports apps',
                    'Interviewed 50+ amateur sports players',
                    'Created detailed user personas',
                    'Mapped user journey and pain points'
                ]
            },
            {
                title: 'Design Process',
                icon: '✏️',
                items: [
                    'Created information architecture',
                    'Developed wireframes and user flows',
                    'Designed high-fidelity mockups',
                    'Built clickable prototypes in Figma'
                ]
            },
            {
                title: 'Usability Testing',
                icon: '🧪',
                items: [
                    'Conducted 3 rounds of usability testing',
                    'Collected and analyzed user feedback',
                    'Iterated designs based on test results',
                    'Improved accessibility and navigation'
                ]
            },
            {
                title: 'Key Features',
                icon: '⚽',
                items: [
                    'Sports facility booking system',
                    'Team creation and management',
                    'Player matching and invitations',
                    'Event scheduling and reminders'
                ]
            }
        ],
        tools: [
            { name: 'Figma', icon: '🎨' },
            { name: 'Miro', icon: '📋' }            ,
            { name: 'Prototyping', icon: '🔄' },
            { name: 'User Research', icon: '📊' },
            { name: 'Wireframing', icon: '📐' }
        ],
        teammates: [
            {
                name: 'UI/UX Team Lead',
                role: 'Senior Designer',
                initials: 'TL',
                contribution: 'Provided design direction and mentorship'
            },
            {
                name: 'Research Team',
                role: 'UX Researchers',
                initials: 'RT',
                contribution: 'Collaborated on user research and testing'
            }
        ],
        links: [
            { text: 'View Figma Design', url: '#', icon: '🎨' },
            { text: 'Case Study', url: '#', icon: '📖' }    ,
            { text: 'Prototype Demo', url: '#', icon: '▶️' }
    ],