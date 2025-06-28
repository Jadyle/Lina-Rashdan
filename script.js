// Resume data for the chatbot
const resumeData = {
    "basics": {
        "name": "Lina Rashdan",
        "label": "IT & Cybersecurity Professional",
        "location": {
            "city": "Paris",
            "country": "France"
        },
        "email": "L.rashdan@outlook.com",
        "phone": "+33 3 33 33 33 33 3",
        "whatsapp": true,
        "profiles": {
            "linkedin": "https://www.linkedin.com/in/lina-rashdan",
            "github": "https://github.com/Jadyle"
        }
    },
    "education": [
        {
            "degree": "Bachelor of Science in Computer Science",
            "institution": "Université du Québec à Chicoutimi (UQAC)",
            "location": "Quebec, Canada",
            "date": "2024 - 2025",
            "details": "Concentration in Cybersecurity • GPA: 3.99 • Dual degree exchange program with University Paris-Saclay",
            "honors": ["Thesis: Security of Satellite Communications Systems"]
        },
        {
            "degree": "Bachelor Universitaire Technologique in Network and Telecommunications",
            "institution": "UVSQ - Université de Versailles Saint-Quentin × University Paris-Saclay",
            "location": "Vélizy-Villacoublay, France",
            "date": "2023 - 2024",
            "details": "Network and Telecommunications • Concentration in Cybersecurity"
        },
        {
            "degree": "Brevet de Technicien Supérieur (BTS)",
            "institution": "Lycée Fénelon Sainte-Marie",
            "location": "Paris, France",
            "date": "2022 - 2023",
            "details": "IT & Networks"
        }
    ],
    "experience": [
        {
            "title": "Cybersecurity Engineer - Intern",
            "company": "DOCAPOSTE",
            "location": "Paris, France",
            "date": "May 2025 - Present",
            "tasks": [
                "Conducted penetration testing and reported critical vulnerabilities.",
                "Implemented secure AI agents to enhance productivity in the team.",
                "Developed Business Continuity and Disaster Recovery Plan simulating ransomware attack."
            ]
        },
        {
            "title": "Research Associate, AI Security",
            "company": "UQAC",
            "location": "Quebec, Canada",
            "date": "Jan 2025 - Apr 2025",
            "tasks": [
                "Researched vulnerabilities in AI language models.",
                "Writing a paper for AI vulnerabilities and developed an ontology for AI vulnerabilities."
            ]
        },
        {
            "title": "Network Systems Administrator (Part-time)",
            "company": "CLAAS",
            "location": "Velizy-Villacoublay, France",
            "date": "Sep 2022 - Aug 2024",
            "tasks": [
                "Planned IT projects and resolved network issues.",
                "Onboarded 300+ employees and configured IT systems.",
                "Trained 1,000+ staff on Microsoft 365 tools.",
                "Presented identity management protocols and integration."
            ]
        }
    ],
    "projects": [
        {
            "title": "Stegano-Application",
            "tools": ["Python", "GUI"],
            "description": "Conceals messages within images using LSB steganography."
        },
        {
            "title": "Password Manager",
            "tools": ["Rust", "OpenSSL", "SQLite", "SQLCipher"],
            "description": "Educational tool explaining encryption/decryption."
        },
        {
            "title": "Network Scanner",
            "tools": ["Rust", "TCP/IP", "Socket"],
            "description": "High-performance CLI TCP port scanner with multi-threading."
        }
    ],
    "skills": {
        "languages": ["Python", "Java", "C", "C++", "Rust", "PHP", "HTML", "CSS", "JavaScript", "SQL", "PowerShell"],
        "technologies": ["AWS", "VMware", "Docker", "Ansible", "AzureDevOps", "Cloud", "AD", "Windows Server", "Linux", "MySQL", "Git"],
        "security": ["Penetration Testing", "Cryptography", "Network Security", "OWASP", "MITRE ATT&CK", "Kali Linux", "Burp Suite"]
    },
    "certifications": [
        {
            "name": "CCNA Security/R&S",
            "issuer": "CISCO",
            "date": "Jul 2024"
        },
        {
            "name": "CCNA",
            "issuer": "CISCO",
            "date": "Expected Apr 2025"
        }
    ]
};

// Enhanced chatbot responses with personal information
class VirtualTwinChatbot {
    constructor() {
        this.responses = {
            greeting: [
                "Hello! I'm Lina's virtual twin. I'm here to answer any questions about my background, experience, and expertise in cybersecurity and IT.",
                "Hi there! I'm excited to chat with you about my journey in cybersecurity and technology. What would you like to know?",
                "Welcome! I'm Lina's AI twin, ready to discuss my experience in cybersecurity, network administration, and AI security research."
            ],
            experience: [
                "I have diverse experience in cybersecurity and IT. Currently, I'm working as a Cybersecurity Engineer Intern at DOCAPOSTE in Paris, where I conduct penetration testing and implemented secure AI agents to enhance productivity in the team. I also worked as a Research Associate in AI Security at UQAC, researching vulnerabilities in AI language models.",
                "My professional journey includes roles at DOCAPOSTE as a Cybersecurity Engineer, UQAC as an AI Security Research Associate, and CLAAS as a Network Systems Administrator where I managed IT infrastructure for over 1,000 employees.",
                "I've gained hands-on experience in penetration testing, AI security research, network administration, and IT project management across different organizations in France and Canada."
            ],
            education: [
                "I completed my Bachelor of Science in Computer Science with a concentration in Cybersecurity at UQAC in Quebec, Canada, achieving a GPA of 3.99. This was part of a dual degree exchange program with University Paris-Saclay. My thesis focused on Security of Satellite Communications Systems.",
                "My educational journey includes a Bachelor Universitaire Technologique in Network and Telecommunications at UVSQ-University Paris-Saclay, and a BTS in IT & Networks at Lycée Fénelon Sainte-Marie in Paris. I transferred directly from the first year of BTS to the second year of BUT - my academic results and determination helped me succeed and place in the top 10%.",
                "My educational background spans both France and Canada, giving me a diverse perspective on cybersecurity and technology approaches. I was featured in articles about my exchange experience at UQAC and my department testimonial."
            ],
            skills: [
                "I'm proficient in multiple programming languages including Python, Rust, Java, C/C++, and PowerShell. My cybersecurity expertise includes penetration testing, cryptography, network security, and familiarity with frameworks like OWASP and MITRE ATT&CK.",
                "My technical skills cover cloud technologies (AWS, Azure), virtualization (VMware, Docker), security tools (Kali Linux, Burp Suite), and various operating systems including Linux and Windows Server.",
                "I have strong expertise in network security, identity management, cryptography, and AI security research. I'm also experienced with DevOps tools and automation technologies."
            ],
            projects: [
                "I've worked on several interesting projects including a Stegano-Application for concealing messages in images, a Password Manager built with Rust for demonstrating encryption principles, and a high-performance Network Scanner for security assessments.",
                "Some of my notable projects include an Active Directory Pentesting Lab for training purposes, a Web Pentesting CTF Platform, and automated serverless applications using Azure Functions.",
                "My projects span from cryptography and steganography applications to network security tools and cloud-based automation solutions. Each project demonstrates different aspects of cybersecurity and software development."
            ],
            certifications: [
                "I hold CCNA Security/R&S certification from CISCO (July 2024) and I'm working towards my full CCNA certification expected in April 2025. I also completed TOEFL iBT and have CISA training from ISACA.",
                "My certifications include CISCO CCNA Security/R&S, and I'm actively pursuing additional certifications to stay current with industry standards and best practices in cybersecurity."
            ],
            contact: [
                "You can reach me at L.rashdan@outlook.com or connect with me on LinkedIn at linkedin.com/in/lina-rashdan. I'm also available on WhatsApp at +33 3 33 33 33 33 3.",
                "I'm always open to discussing cybersecurity opportunities and collaborations. Feel free to contact me via email or LinkedIn for professional inquiries. I'm based in Paris and available for coffee chats to discuss opportunities!"
            ],
            location: [
                "I'm currently based in Paris, France, where I'm working at DOCAPOSTE. I love connecting with fellow professionals in the cybersecurity field. Feel free to book a coffee chat with me using the link on my website!",
                "I'm located in Paris and love connecting with fellow professionals in the cybersecurity field. Feel free to book a coffee chat with me!"
            ],
            blog: [
                "I regularly write about technology trends, cybersecurity insights, and AI developments on my blog. You can find my latest articles covering topics like AI transformation in tech, zero trust architecture, and cybersecurity best practices.",
                "My blog 'Latest in Tech' features insights into technology, innovation, and the digital future from a cybersecurity perspective. I cover everything from AI security to emerging threats and defense strategies."
            ],
            personal: [
                "I believe we are all meant to become the person we aspire to be, both personally and professionally. The journey may not always be easy, but by believing in our abilities and staying persistent, we learn to appreciate both our wins and our losses. I love the arts and studied in a specialized high school for art, which fuels my creativity in developing tech projects.",
                "I'm driven by purpose and constantly intrigued by how the technologies around us work. Each question leads to another, making discovery an endless and exciting pursuit. I'm passionate about technology and people - we all have something valuable to contribute."
            ],
            creative: [
                "I love the arts and studied in a specialized high school for art. This background fuels my creativity in developing tech projects and innovative ideas. I believe creativity and technology go hand in hand.",
                "My artistic background from studying in a specialized art high school really influences how I approach technical problems. It helps me think outside the box and come up with creative solutions in cybersecurity."
            ],
            default: [
                "That's an interesting question! While I may not have specific information about that topic, I'd be happy to discuss my experience in cybersecurity, my educational background, technical skills, or any of my projects.",
                "I'd love to help you learn more about my background! Feel free to ask about my work experience, education, technical skills, projects, or how to get in touch with me.",
                "I'm here to share information about my professional journey in cybersecurity and IT. What specific aspect of my background would you like to explore?"
            ]
        };
        
        this.suggestions = [
            "Tell me about your education",
            "What's your experience in cybersecurity?",
            "What projects have you worked on?",
            "What are your technical skills?",
            "How can I contact you?",
            "Tell me about your creative side",
            "What's your LinkedIn bio about?"
        ];
    }

    generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Greeting patterns
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return this.getRandomResponse('greeting');
        }
        
        // Experience patterns
        if (message.includes('experience') || message.includes('work') || message.includes('job') || 
            message.includes('career') || message.includes('docaposte') || message.includes('claas') || 
            message.includes('uqac') || message.includes('intern')) {
            return this.getRandomResponse('experience');
        }
        
        // Education patterns
        if (message.includes('education') || message.includes('degree') || message.includes('university') || 
            message.includes('study') || message.includes('school') || message.includes('bachelor') || 
            message.includes('but') || message.includes('bts') || message.includes('uqac') || 
            message.includes('paris-saclay')) {
            return this.getRandomResponse('education');
        }
        
        // Skills patterns
        if (message.includes('skill') || message.includes('technology') || message.includes('programming') || 
            message.includes('language') || message.includes('python') || message.includes('rust') || 
            message.includes('security') || message.includes('penetration') || message.includes('network')) {
            return this.getRandomResponse('skills');
        }
        
        // Projects patterns
        if (message.includes('project') || message.includes('portfolio') || message.includes('build') || 
            message.includes('develop') || message.includes('stegano') || message.includes('password') || 
            message.includes('scanner') || message.includes('ctf')) {
            return this.getRandomResponse('projects');
        }
        
        // Certifications patterns
        if (message.includes('certification') || message.includes('ccna') || message.includes('cisco') || 
            message.includes('certificate') || message.includes('qualified')) {
            return this.getRandomResponse('certifications');
        }
        
        // Contact patterns
        if (message.includes('contact') || message.includes('email') || message.includes('linkedin') || 
            message.includes('reach') || message.includes('connect') || message.includes('whatsapp')) {
            return this.getRandomResponse('contact');
        }

        // Location patterns
        if (message.includes('location') || message.includes('where') || message.includes('based') || 
            message.includes('paris') || message.includes('france') || message.includes('coffee') || 
            message.includes('meet')) {
            return this.getRandomResponse('location');
        }

        // Blog patterns
        if (message.includes('blog') || message.includes('article') || message.includes('write') || 
            message.includes('writing') || message.includes('publish')) {
            return this.getRandomResponse('blog');
        }

        // Personal/Creative patterns
        if (message.includes('creative') || message.includes('art') || message.includes('artistic') || 
            message.includes('creativity')) {
            return this.getRandomResponse('creative');
        }

        if (message.includes('personal') || message.includes('linkedin bio') || message.includes('philosophy') || 
            message.includes('believe') || message.includes('passion')) {
            return this.getRandomResponse('personal');
        }
        
        // Specific technical questions
        if (message.includes('cybersecurity') || message.includes('cyber security')) {
            return "I specialize in cybersecurity with hands-on experience in penetration testing, AI security research, and network security. I've worked on vulnerability assessments, secure AI agent implementation, and developed comprehensive security frameworks including disaster recovery plans. You can learn more in my Professional Background section!";
        }
        
        if (message.includes('ai security') || message.includes('artificial intelligence')) {
            return "I have specialized experience in AI security research from my time at UQAC, where I researched vulnerabilities in AI language models and am writing a paper for AI vulnerabilities. I also implemented secure AI agents at DOCAPOSTE to enhance productivity in the team. Check out my blog for more insights on AI and security!";
        }
        
        if (message.includes('penetration testing') || message.includes('pentest')) {
            return "I have practical experience in penetration testing from my current role at DOCAPOSTE, where I conduct comprehensive security assessments and report critical vulnerabilities. I've also built an Active Directory Pentesting Lab for training purposes. You can see more of my security projects in the Projects section!";
        }

        if (message.includes('gpa') || message.includes('grades') || message.includes('academic')) {
            return "I achieved a GPA of 3.99 during my Bachelor's at UQAC and was able to transfer directly from the first year of BTS to the second year of BUT. My academic results and determination helped me succeed and place in the top 10%. I was also featured in articles about my academic journey!";
        }
        
        // Default response
        return this.getRandomResponse('default');
    }
    
    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    getRandomSuggestions(count = 3) {
        const shuffled = [...this.suggestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
}

// Initialize chatbot
const chatbot = new VirtualTwinChatbot();

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Update toggle icon
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Social Sharing Functionality
class SocialSharing {
    constructor() {
        this.init();
    }

    init() {
        // Initialize sharing buttons on page load
        this.setupSharingButtons();
    }

    setupSharingButtons() {
        const shareButtons = document.querySelectorAll('.share-btn');
        shareButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = this.getPlatformFromButton(button);
                this.shareArticle(platform);
            });
        });
    }

    getPlatformFromButton(button) {
        if (button.classList.contains('twitter')) return 'twitter';
        if (button.classList.contains('linkedin')) return 'linkedin';
        if (button.classList.contains('facebook')) return 'facebook';
        if (button.classList.contains('email')) return 'email';
        return null;
    }

    getArticleInfo() {
        const title = document.querySelector('.article-title')?.textContent || document.title;
        const url = window.location.href;
        const description = document.querySelector('.article-intro')?.textContent || 
                          document.querySelector('meta[name="description"]')?.getAttribute('content') || 
                          'Check out this article by Lina Rashdan on cybersecurity and technology.';
        
        return { title, url, description };
    }

    shareArticle(platform) {
        const { title, url, description } = this.getArticleInfo();
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);
        const encodedDescription = encodeURIComponent(description);

        let shareUrl = '';

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=myuserisjadyle`;
                break;
            
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
                break;
            
            case 'email':
                const subject = encodeURIComponent(`Interesting article: ${title}`);
                const body = encodeURIComponent(`I thought you might find this article interesting:\n\n${title}\n\n${description}\n\nRead more: ${url}\n\nShared from Lina Rashdan's blog via @myuserisjadyle.`);
                shareUrl = `mailto:?subject=${subject}&body=${body}`;
                break;
        }

        if (shareUrl) {
            if (platform === 'email') {
                window.location.href = shareUrl;
            } else {
                window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
            }
        }
    }

    // Method to copy article URL to clipboard
    copyToClipboard() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            this.showCopyNotification();
        }).catch(err => {
            console.error('Failed to copy URL: ', err);
        });
    }

    showCopyNotification() {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.textContent = 'Article URL copied to clipboard!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent-primary);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize social sharing
const socialSharing = new SocialSharing();

// DOM elements
const virtualTwin = document.getElementById('virtualTwin');
const chatInterface = document.getElementById('chatInterface');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');
const chatSuggestions = document.getElementById('chatSuggestions');
const contactForm = document.getElementById('contactForm');

// Chat functionality
if (virtualTwin) {
    virtualTwin.addEventListener('click', () => {
        chatInterface.classList.add('active');
        virtualTwin.style.display = 'none';
        chatInput.focus();
        updateSuggestions();
    });
}

if (chatClose) {
    chatClose.addEventListener('click', () => {
        chatInterface.classList.remove('active');
        virtualTwin.style.display = 'block';
    });
}

function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${content}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-message';
    typingDiv.innerHTML = `
        <div class="message-content typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

function updateSuggestions() {
    const suggestions = chatbot.getRandomSuggestions(4);
    chatSuggestions.innerHTML = '';
    
    suggestions.forEach(suggestion => {
        const btn = document.createElement('button');
        btn.className = 'suggestion-btn';
        btn.textContent = suggestion;
        btn.addEventListener('click', () => {
            chatInput.value = suggestion;
            sendUserMessage();
        });
        chatSuggestions.appendChild(btn);
    });
}

function sendUserMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, true);
    chatInput.value = '';
    
    // Update suggestions
    setTimeout(() => updateSuggestions(), 2000);
    
    // Add typing indicator
    const typingIndicator = addTypingIndicator();
    
    // Simulate thinking time and generate response
    setTimeout(() => {
        typingIndicator.remove();
        const response = chatbot.generateResponse(message);
        addMessage(response);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

if (sendMessage) {
    sendMessage.addEventListener('click', sendUserMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
}

// Contact form functionality
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:L.rashdan@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message! Your email client should open with the pre-filled message.');
        
        // Reset form
        contactForm.reset();
    });
}

// Newsletter form functionality
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your newsletter service
        alert('Thank you for subscribing! You\'ll receive our latest tech insights soon.');
        form.reset();
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Check if href is not just "#" and is a valid selector
        if (href && href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--navbar-bg)';
    } else {
        navbar.style.background = 'var(--navbar-bg)';
    }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.querySelectorAll('.project-card, .resume-card, .contact-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Virtual twin floating animation
function animateVirtualTwin() {
    const twin = document.querySelector('.virtual-twin');
    if (!twin) return;
    
    let position = 0;
    
    setInterval(() => {
        position += 0.02;
        const offset = Math.sin(position) * 5;
        twin.style.transform = `translateY(${offset}px)`;
    }, 50);
}

// Initialize animations
animateVirtualTwin();

// Preload avatar GIF
const avatarImg = new Image();
avatarImg.src = '/0615(1).gif';

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

console.log('🚀 Lina Rashdan Portfolio - Enhanced Virtual Twin AI Loaded Successfully!');