export interface Session {
	id: string;
	title: string;
	speaker: string;
	description?: string;
	type: 'session' | 'workshop' | 'lightning' | 'panel' | 'keynote' | 'break' | 'welcome';
	duration: number; // in minutes
	startTime: string; // format: "HH:MM"
	endTime: string; // format: "HH:MM"
	abstract?: string; // Full abstract from CSV
	speakerBio?: string; // Speaker biography
	speakerLinks?: {
		linkedin?: string;
		twitter?: string;
		website?: string;
		other?: string;
	};
	panelists?: string[]; // Panelists
	panelModerator?: {
		name: string;
		linkedin: string;
	}; // Panel Moderator
	panelListLinkedin?: {
		name: string;
		linkedin: string;
	}[]; // Panelists LinkedIn links
	slidesLink?: string; // Link to presentation slides
	resourcesLink?: string; // Additional resources
	sessionNotes?: string; // Any additional notes from CSV
}

export interface TimeSlot {
	time: string;
	label: string;
}

export interface Track {
	id: 'track1' | 'track2' | 'track3';
	name: string;
	description: string;
	sessions: Session[];
	timeSlots: TimeSlot[];
}

// Common sessions for all tracks
const commonSessions: Session[] = [
	{
		id: 'registration',
		title: 'Registration',
		speaker: 'GDG Chennai Team',
		description: 'Check-in, welcome kit distribution, and networking',
		type: 'break',
		duration: 75,
		startTime: '08:00',
		endTime: '09:15'
	},
	{
		id: 'keynote',
		title: 'Welcome to Devfest 2025',
		speaker: 'GDG Chennai Organizers',
		description: 'Welcome & Opening Note',
		type: 'keynote',
		duration: 30,
		startTime: '09:15',
		endTime: '09:45'
	},
	{
		id: 'keynote',
		title: 'Devfest Keynote',
		speaker: 'Revealing soon...',
		description: 'Interesting keynote to kick start the day',
		type: 'keynote',
		duration: 30,
		startTime: '09:45',
		endTime: '10:30'
	},
	{
		id: 'keynote',
		title: 'The Journey from Startup Stack to AI-Powered Commerce',
		speaker: 'Abhay Kumar, Aravind Ravi',
		description:
			'Get ready to dive deep into the world of AI-Powered E-Commerce- Sponsor Talk (Poshmark)',
		type: 'keynote',
		duration: 30,
		startTime: '10:30',
		endTime: '11:00'
	},
	{
		id: 'break-1',
		title: 'Gear up for all the amazing talks',
		speaker: '',
		type: 'break',
		duration: 15,
		startTime: '11:00',
		endTime: '11:15'
	},
	{
		id: 'lunch',
		title: 'Lunch & Networking',
		speaker: 'GDG Chennai Team',
		description: 'Enjoy delicious food and connect with fellow developers',
		type: 'break',
		duration: 60,
		startTime: '13:00',
		endTime: '14:00'
	},
	{
		id: 'closing',
		title: 'Closing Note',
		speaker: 'GDG Chennai Team',
		description: 'Thank you for joining us at DevFest Chennai 2025!',
		type: 'keynote',
		duration: 15,
		startTime: '17:00',
		endTime: '17:15'
	}
];

// Track 1: AI & Machine Learning Sessions
const track1Sessions: Session[] = [
	...commonSessions,
	{
		id: 'track1-session6',
		title: 'Supercharging Google Cloud Deployments with Gemini CLI: From Code to Cloud in Minutes',
		speaker: 'Jitendra Gupta',
		description: "From Code to Cloud in Minutes using Google's Gemini CLI tools",
		type: 'session',
		duration: 35,
		startTime: '11:15',
		endTime: '11:50',
		abstract:
			"Deploying applications to the cloud often involves complex CLI commands, multiple configuration steps, and switching between tools. With the arrival of Gemini CLI, developers can now simplify and accelerate this journey by combining the power of Google Cloud's services with AI-assisted workflows. In this session, we'll explore how Gemini CLI can help you seamlessly scaffold, configure, and deploy applications on Google Cloud — from Cloud Run to GKE, BigQuery, and Vertex AI. Through live demos and real-world scenarios, you'll see how AI-powered command generation, context-aware troubleshooting, and automation capabilities reduce developer toil and speed up cloud adoption. Whether you're a beginner or an advanced cloud practitioner, this talk will equip you with practical tips to make your Google Cloud deployments smarter, faster, and future-ready.",
		speakerBio:
			'Jitendra Gupta is 13 years experienced IT professional with expertise in information security, GenAI, and cloud computing. As a sought-after speaker, with a proven track record of implementing security best practices for GenAI and cloud environments, Jitendra is dedicated to empowering fellow IT professionals with actionable takeaways to safeguard their applications, data and infrastructure on Google Cloud.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/jitu028',
			twitter: 'https://x.com/jitu028',
			website: 'https://linktr.ee/jitu028'
		},
		resourcesLink: 'https://medium.com/@jitu028',
		sessionNotes:
			'In the past 2-3 years I have delivered more than 75+ sessions organized by GDG, GDG Cloud and Google ML Community. Looking forward to an impactful session at Devfest Chennai - 2025.'
	},

	{
		id: 'track1-session2',
		title: 'AI Agent (and MCP) Vulnerabilities and Security',
		speaker: 'Nikhilesh Tayal',
		description:
			'Understanding security challenges in AI agents and Model Context Protocol implementations',
		type: 'session',
		duration: 35,
		startTime: '11:50',
		endTime: '12:25',
		abstract:
			'While everyone discusses building AI Agents, few discuss the security risks involved.\n\nAI Agents and MCP are a security nightmare and we will deep dive into this.\n\nWe will talk about prompt injection, jailbreaking, tool poisoning, command injection, Privilege escalation and various other techniques through which hackers can easily hack your AI Agents\n\nFinally, we will discuss how to secure and scale our AI Agents.\n\nThis would be a fun session, which will also make you think.',
		speakerBio:
			'Nikhilesh is an entrepreneur, teacher and tech nerd. He is an IIT Kharagpur alumnus. He is also a Google Developer Expert for AI and has 13000+ followers on LinkedIn. Currently, he runs AI ML etc. - an AI-enabled personalised teacher with self-managing memory. He has 20+ years of work experience, of which 14+ is in entrepreneurship. Previously he had built 2 startups. He raised funds for his previous startup - CvBhejo (a mobile-based recruitment platform) and then got a successful exit. He is also felicitated by the Chief Minister of Rajasthan for his contribution to startups and education.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/nikhileshtayal/',
			website: 'https://www.aimletc.com/'
		},
		slidesLink: 'https://drive.google.com/open?id=1vUOKDf6OsnwobCRYxTVi_BIt4ub3DxUh',
		sessionNotes:
			'I delivered a talk for GDG Cloud Chennai in July as well. You could take the feedback from them as well.'
	},
	{
		id: 'track1-session3',
		title: 'From Queries to Clusters: Building High-Performance Node.js Backends',
		speaker: 'Hemant Gupta',
		description:
			'Advanced techniques for scaling Node.js applications with clustering and performance optimization',
		type: 'session',
		duration: 35,
		startTime: '12:25',
		endTime: '13:00',
		abstract:
			"Building fast and reliable backends requires more than writing code it's about optimising both the application and the database. In this session, I'll share practical strategies for scaling Node.js applications using clustering and load balancing, while also optimising SQL queries for high-traffic systems. You'll see real-world examples, including a query reduced from 4 minutes to 4 seconds, and actionable techniques you can apply immediately. Developers will leave with tools and insights to boost performance, reliability, and scalability in production systems.",
		speakerBio:
			'Hemant Gupta is a Full Stack engineer with 4+ years of experience building scalable systems using Node.js, SQL, and cloud-native architectures. Experienced in optimising high-traffic applications, Hemant enjoys sharing practical lessons and real-world insights with developer communities to help developers build faster, more reliable applications.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/hemant-gupta-8b1674177/',
			twitter: 'https://x.com/hemant__g'
		},
		slidesLink:
			'https://docs.google.com/presentation/d/1GkEtrgjYC_8DZoBLzQEbM2KvPAnJEyF83-6fVOKK4-A/edit?usp=sharing'
	},
	{
		id: 'track1-session4',
		title: 'The Future is Spatial (XR): Building for Android XR with Gemini',
		speaker: 'Aditya Shinde',
		description: 'Explore the intersection of Extended Reality and AI in Android development',
		type: 'session',
		duration: 35,
		startTime: '14:00',
		endTime: '14:35',
		abstract:
			"Discover how Android XR is redefining the future of app development by bringing immersive spatial computing and Google's GenAI-powered experiences to headsets and smart glasses. This session dives into the Android XR platform, developer-friendly tools, and migration strategies to seamlessly transition your apps into 3D space.\n\nLearn how Gemini AI integration enhances user interactions and explore the complete development cycle from prototyping with Jetpack XR to deployment. If you're ready to expand your Android skills into the next era of spatial computing, this talk is your gateway to building revolutionary XR apps.\n\n💡 Perfect For:\nProfessional Android developers ready to expand into XR, mobile architects planning spatial experiences, and technical leads evaluating Android XR for their teams. Whether you're migrating existing apps or building from scratch, you'll leave with actionable strategies and hands-on experience.\n\n🌟 Take Away\nBy the end of this session, you'll understand how to leverage Android XR's open ecosystem to create immersive experiences that were science fiction just years ago, using the Android skills you've already mastered, enhanced with AI that understands the world around your users.\n\nExperience the future of Android development. The spatial revolution starts now.",
		speakerBio:
			'Technical Advisor for Mobile at Risk Guard Enterprise Solutions India, with experience in Android, Flutter, and Kotlin Multiplatform technologies. With over 3.5 years of experience in Android development, bringing a background as the ex-founder of the FinSpare startup and a seasoned freelancer, collaborating with diverse startups and MSMEs, including notable work with JungleeRummy. Delivered 15+ speaker sessions and workshops across Android, Flutter, FlutterFlow, and Kotlin Multiplatform, engaging over 3,000 attendees. Creator behind the Android-focused YouTube channel @DeveloperChunk with 1,000+ subscribers, and shares technical articles on Medium @DeveloperChunk.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/adityashinde1095/'
		},
		slidesLink:
			'https://www.figma.com/deck/56ofeDD73KrWsqGwK024vw/Android-XR?node-id=59-367&t=8vTd7MI5qr1v6DIj-1',
		resourcesLink: 'https://drive.google.com/open?id=1XpnF9-_UTJo74_vAbhVB0itiCAtTa1DI'
	},
	{
		id: 'track1-session1',
		title: 'Gemma-licious AI: Cooking Up Smart Apps with Flutter',
		speaker: 'Kamal Shree',
		description:
			"Learn how to integrate AI capabilities into Flutter applications using Google's Gemma models",
		type: 'session',
		duration: 35,
		startTime: '14:35',
		endTime: '15:10',
		abstract:
			"What happens when you mix the elegance of Flutter with the intelligence of Gemma 3? You get \"Gemma-licious AI\"—a recipe for building apps that are not just beautiful, but smart, responsive, and always available.\n\nIn this session, we'll explore how developers can integrate Gemma 3, Google's latest lightweight AI model, directly into Flutter applications to deliver intelligent, on-device experiences. From natural language understanding to context-aware features, you'll see how Gemma 3 enables apps to remain powerful even when connectivity drops.\n\nThrough live demos and practical code examples, we'll walk through:\n\n• Setting up Gemma 3 with Flutter.\n• Designing AI-driven features that enhance user productivity.\n• Leveraging on-device inference for speed, privacy, and offline capability.\n• Best practices for combining Flutter's cross-platform reach with Gemma's AI capabilities.\n\nBy the end, you'll leave with the tools (and the recipe!) to cook up your own intelligent, cross-platform apps that delight users everywhere.",
		speakerBio:
			'Senior Developer Advocate @Microsoft, Google Developer Expert in Flutter & Dart with 14 years of experience in Web Technologies, Android, Flutter, HarmonyOS and Microsoft M365. I have worked for multinational firms in India, the Netherlands, and the USA. I am a Women Techmakers Ambassador!, Youtuber (whatsupcoders), Mentor @MentorCruise, and Open-Source Community Builder.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/kamalshree/',
			twitter: 'https://x.com/whatsupcoders',
			website: 'https://sessionize.com/kamal-shree/'
		},
		slidesLink: 'https://drive.google.com/open?id=1LaTtTx4ya2hP5uLaEONJ0ogcLGd1AcUG'
	},
	{
		id: 'track1-panel1',
		title: 'What could possibly go wrong? Everything',
		speaker: 'TBD',
		panelists: [
			'ArunRaj B',
			'Bhaarath Vijay Ramesh',
			'Aadithya Sathishkumar',
			'Manivarna',
			'Pragadeesh'
		],
		panelModerator: {
			name: 'Rashmi Ashokan',
			linkedin: 'https://www.linkedin.com/in/rashmi-asokan/'
		},
		panelListLinkedin: [
			{
				name: 'ArunRaj B',
				linkedin: 'https://www.linkedin.com/in/arunrajb/'
			},
			{
				name: 'Bhaarath Vijay Ramesh',
				linkedin: 'https://www.linkedin.com/in/bhaarathvijayramesh/'
			},
			{
				name: 'Aadithya Sathishkumar',
				linkedin: 'https://www.linkedin.com/in/aadithya-sathishkumar-ask-22a342114/'
			},
			{ name: 'Manivarna', linkedin: 'https://www.linkedin.com/in/mdirisina/' },
			{ name: 'Pragadeesh', linkedin: 'https://www.linkedin.com/in/pragadeesh-kannan/' }
		],
		description: `Building products has never been easier or riskier. This panel brings together product leaders, designers, and technologists to unpack the chaos of innovation—from breakthrough ideas to epic failures, and why a little "wrong" often leads to the most interesting things.`,
		type: 'panel',
		duration: 40,
		startTime: '15:10',
		endTime: '15:45'
	},
	{
		id: 'track1-session5',
		title: 'Build Super Fast web apps using Local First Approach',
		speaker: 'Varun Raj Manoharan',
		description:
			'Learn how to build lightning-fast web applications using local-first architecture patterns',
		type: 'session',
		duration: 35,
		startTime: '15:45',
		endTime: '16:20',
		abstract:
			"Building Local First Web Apps – Future of the Web\n\nIn this talk, we'll explore the Local-First approach to building web apps — where data lives close to the user, sync happens seamlessly in the background, and performance feels instant.\n\nWe'll cover the principles behind Local-First, real-world examples, and practical steps to implement it in your apps.",
		speakerBio:
			'Co-Founder and CIO at Skcript, Google Developer Expert for Firebase, and a software developer from India. Varun Raj Manoharan is an entrepreneur and a software developer from India, Currently running Skcript Technologies Pvt, Ltd. a software consulting company based out of Chennai, India. He is also a Google Developer Expert for Firebase. He is into the software industry for more than 10 years now, and the world of web technology, Spent most of his time with Javascript and Typescript eco-system.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/varunrajm/',
			twitter: 'https://twitter.com/zathvarun',
			website: 'https://varunraj.in/'
		},
		resourcesLink: 'https://lofi.so/'
	},
	{
		id: 'track1-panel2',
		title: 'Staring Into the Void Until It Makes Sense',
		speaker: '',
		description: `What really happens when AI meets enterprise deadlines? Our panel shares real stories, lessons, and laughs from turning AI chaos into clarity—one log, one prompt, and one crash at a time.`,
		type: 'panel',
		duration: 35,
		panelists: ['Kayalvizhi Karthikeyan', 'Janet Rajan', 'Mary Helena Rose A', 'Prashant'],
		panelModerator: {
			name: 'Bhavani Codes',
			linkedin: 'https://www.linkedin.com/in/bhavanicodes/'
		},
		panelListLinkedin: [
			{
				name: 'Kayalvizhi Karthikeyan',
				linkedin: 'https://www.linkedin.com/in/kayalvizhi-karthikeyan/'
			},
			{ name: 'Janet Rajan', linkedin: 'https://www.linkedin.com/in/janetrajan/' },
			{
				name: 'Mary Helena Rose A',
				linkedin: 'https://www.linkedin.com/in/maryhelenarose-a-587a90123/'
			},
			{ name: 'Prashant', linkedin: 'https://www.linkedin.com/in/prashantsrinivasan14/' }
		],
		startTime: '16:20',
		endTime: '17:00'
	}
];

// Track 2: Mobile & Web Development
const track2Sessions: Session[] = [
	...commonSessions,
	{
		id: 'track2-session1',
		title: "Getting Started with MCP Toolbox for Databases in Google's ADK",
		speaker: 'Aryan Irani',
		description:
			"Introduction to Model Context Protocol for database operations in Google's AI Development Kit",
		type: 'session',
		duration: 35,
		startTime: '11:15',
		endTime: '11:50',
		abstract:
			"Curious how to make your AI agents smarter with real-time data access? In this hands-on session, you'll learn how to integrate databases into your agent workflows using the MCP Toolbox and Google's Agent Development Kit (ADK).",
		speakerBio: 'I write and create on the internet. Google Developer Expert for Google Workspace.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/aryanirani123/',
			twitter: 'https://x.com/aryanirani123',
			website: 'https://www.aryanirani123.com/'
		},
		resourcesLink: 'https://www.aryanirani123.com/#h.d8bz98k4pdlv'
	},
	{
		id: 'track2-session2',
		title:
			"From Cloud to Pocket: Refining Stories with Google's Gemini API and Gemma On-Device Model",
		speaker: 'Mayur Madnani',
		description:
			'Building mobile applications that leverage both cloud and on-device AI capabilities',
		type: 'session',
		duration: 35,
		startTime: '11:50',
		endTime: '12:25',
		abstract:
			"Context and Background\nGenerative AI has opened up new creative possibilities, but most applications rely on cloud-based models, which can introduce latency, privacy, and cost challenges. In this session, we explore how to shift from server-side story generation to efficient on-device personalization. By using Google's Gemini API and Gemma models, we demonstrate a hybrid approach that maintains quality while optimizing for responsiveness, adaptability, and user control.\n\nAbstract:\nJoin us as we journey from the cloud to your pocket, using Google's Gemini API and Gemma on-device model to refine story generation. We'll start with cloud-based story creation and then shift to running models directly on-device, showcasing how to enhance outputs with tuning techniques. By the end, you'll see how to measure and compare the results of each stage.\n\nWhat the Session Covers:\nThis session dives deep into the practical use of language models for story generation, moving from a Gemini model to on-device Gemma models and refining them for richer output. We'll explore the transition to on-device models that can be progressively tuned.\n\n• Starting with a Gemini API to generate initial stories.\n• Transitioning to on-device models for offline and personalized story generation.\n• Demonstrating three stages of on-device model use: the base model, a prompt-tuned version, and a fine-tuned version using adapter tuning.\n• Evaluation methods to compare and measure the improvements in story quality across these different models.\n\nSession Highlights:\n• Practical steps for moving from API-based generation to on-device models.\n• A detailed look at how prompt tuning and fine-tuning can enhance on-device model outputs.\n• Simple evaluation metrics to assess the quality of generated stories.\n\nKey Takeaways:\nAttendees will gain insight into how to evolve from cloud-based to on-device models, how to refine model outputs through tuning, and how to evaluate the improvements effectively.",
		speakerBio:
			'Mayur Madnani is a seasoned engineer specializing in AI, data, and backend systems, with experience building scalable platforms at JioHotstar, Intuit, Walmart, and SAP. He is passionate about mentoring and community engagement, helping engineers grow through structured guidance, workshops, and knowledge-sharing. With multiple patents, publications, and industry recognitions, Mayur combines deep technical expertise with a commitment to enabling others to thrive in the fields of AI and distributed systems.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/mayurmadnani/'
		},
		resourcesLink: 'https://drive.google.com/open?id=13gZ5L2rvJRvCFGPg4lDOT0poclJFbDvf'
	},
	{
		id: 'track2-session3',
		title: 'Beyond Code Sharing: Building Smarter Mobile Apps with KMP and Agents (Koog)',
		speaker: 'Rivu Chakraborty',
		description: 'Advanced Kotlin Multiplatform development with AI agent integration',
		type: 'session',
		duration: 35,
		startTime: '12:25',
		endTime: '13:00',
		abstract:
			"For years we've talked about code sharing with Kotlin Multiplatform (KMP). This talk explores the next frontier: integrating AI agents directly into your KMP architecture to create intelligent, context-aware mobile applications.\n\nI'll start by explaining KMP and Koog, then I'll demonstrate usages and power of Koog by building a document management app that evolves from a simple KMP baseline to an AI-powered assistant—all from a single codebase serving Android, iOS, and backend.\n\nThe Journey:\nAct 1: The Foundation\n• Building a document scanner app with shared business logic across platforms\n• Implementing OCR, storage (SQLDelight), and sync (Ktor) in common modules\n• Structuring your KMP project for future agent integration\nAct 2: Intelligence Layer with Koog\n• What is Koog and how it simplifies AI agent integration in Kotlin\n• Adding an agent that auto-classifies documents and extracts key fields\n• Enabling natural language queries: \"show my last electricity bill\"\n• Building proactive features: automatic reminders for document renewals\nAct 3: Architectural Patterns\n• Clean separation between business logic, and agent capabilities.\n• How agent integration in KMP actually simplifies your architecture\n• Practical patterns for handling agent responses across platforms\n• Testing strategies for agent-enhanced features\nAct 4: Production Reality\n• Battle-tested patterns from scaling KMP at unicorn startups\n• Why agent integration in KMP actually reduces complexity (counterintuitive but true)\nKey Takeaways:\n• Complete architectural blueprint with code samples and diagrams\n• Step-by-step guide to adding Koog to existing KMP projects\n• Common patterns for agent-UI interaction in multiplatform apps\n• Real examples you can adapt for your own use cases\n\nThis isn't about AI hype—it's about pragmatically extending your Kotlin skills to build the next generation of mobile apps. You'll leave with actionable insights and real code you can apply immediately.",
		speakerBio:
			"Rivu Chakraborty is an Android GDE (Google Developer Expert) and India's first Kotlin GDE, a community person, & one of the early adopters of Kotlin. With overall 13+ years of experience, he is currently running Mobrio Studio (https://mobrio.studio). He has previously worked with the biggest organisations from India and South-East-Asia, his last stint was working at JioHotstar / JioCinema (India's biggest OTT+Streaming platform) as Mobile Architect / Principal Engineer, he also previously worked at Meesho (a leading unicorn E-Commerce Startup from India), Gojek (one of South-East Asia's biggest startups), Paytm (India's biggest Fintech startup), and Byju's (one of India's biggest Edtech startup). He has contributed to multiple Kotlin and Android Development books including authoring Reactive Programming in Kotlin, co-authoring Functional Kotlin the first-ever book to help Kotlin developers learn Functional Programming and use Arrow-kt in their projects, and co-authoring Hands-On Data Structures and Algorithms with Kotlin. He has been using Kotlin since December 2015. Rivu formed KotlinKolkata User Group, the first active Kotlin User Group in India.",
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/rivuchk',
			twitter: 'https://x.com/rivuchakraborty',
			website: 'https://rivu.dev'
		},
		slidesLink: 'https://drive.google.com/open?id=1PQp6IMLYRNQKiOgsBkfWiGeqsIAtsXzJ'
	},
	{
		id: 'track2-session4',
		title: 'A Lightning tour of Vision Language Models',
		speaker: 'Sairam Sundaresan',
		description: 'Quick overview of the latest developments in vision-language model capabilities',
		type: 'session',
		duration: 35,
		startTime: '14:00',
		endTime: '14:35',
		abstract:
			'Vision Language Models are rapidly changing how AI connects sight and language, allowing systems to describe, reason, and interact with the world in richer ways. Google has been at the center of this shift, showing how scaling, data, and architecture choices can merge perception and reasoning into a single model. This talk gives developers a fast, clear tour of the core ideas behind these systems, what they make possible today, and where they are heading. You will leave with a sharper understanding of the breakthroughs driving the field and how to apply them to real problems.',
		speakerBio:
			'Sairam Sundaresan is a machine learning researcher, educator, and author with 15 years of experience turning AI into real-world systems. He has shipped vision technology to millions of devices at Qualcomm, advanced deep learning at Intel Labs, and now leads research in autonomous vehicles at Valeo. He has mentored NASA teams, published at NeurIPS, and holds multiple machine learning patents. He writes Gradient Ascent, a newsletter read by over 25,000 engineers and leaders, and is the author of the book AI for the Rest of Us, published by Bloomsbury.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/sairam-sundaresan/',
			twitter: 'https://x.com/DSaience',
			website: 'https://newsletter.artofsaience.com'
		},
		slidesLink: 'https://drive.google.com/open?id=1Ava-o9djkNixE6JHtxjq594gZ5sIN6e2'
	},
	{
		id: 'track2-session5',
		title: 'Power of BuildContext in Flutter',
		speaker: 'Abhishek Doshi',
		description:
			"Deep dive into Flutter's BuildContext and its role in widget lifecycle management",
		type: 'session',
		duration: 35,
		startTime: '14:35',
		endTime: '15:10',
		abstract:
			"BuildContext is at the heart of Flutter's widget tree, yet its true potential often goes untapped. In this talk, we'll find out what BuildContext really represents, how it connects widgets to their position in the tree, and the powerful capabilities it unlocks.\n\nYou'll learn how to access ancestors and inherited widgets, navigate safely, avoid common pitfalls, and optimize performance. We'll also explore advanced tricks — including using context to measure a widget's dimensions and dynamically size another widget — giving you the tools to write cleaner, more adaptable Flutter UIs.",
		speakerBio:
			"Abhishek Doshi is a Google Developer Expert for Dart, Flutter & Firebase. He's working in Flutter & Firebase since past 7 years now and currently working as Tech Lead at Qvin helping empower women health",
		speakerLinks: {
			linkedin: 'https://abhishekdoshi.dev/linkedin',
			twitter: 'https://abhishekdoshi.dev/twitter',
			website: 'https://abhishekdoshi.dev'
		},
		slidesLink: 'https://drive.google.com/open?id=1auk5mnXqcpB4yZfB4qHmP9nN0WLLFjDK'
	},
	{
		id: 'track2-session6',
		title: 'Memory in Agentic AI',
		speaker: 'Vipin Kumar Agrahari',
		description:
			'Understanding how AI agents maintain and utilize memory for better decision making',
		type: 'session',
		duration: 35,
		startTime: '15:10',
		endTime: '15:45',
		abstract:
			'Memory is what turns AI from a one-off assistant into an adaptive, long-term collaborator. In agentic AI applications, memory enables systems to learn from past interactions, adapt to new contexts, and plan strategically—much like humans do. This talk explores how different types of memory (short-term, long-term, and procedural) are shaping the next generation of AI agents, the challenges of scaling and managing memory, and the opportunities it unlocks for creating more reliable, personalized, and context-aware AI.',
		speakerBio:
			'I love to play with technologies and develop solutions which are simple and smart. Currently working on Agentic AI.',
		speakerLinks: {
			linkedin: 'linkedin.com/in/vipinagrahari',
			website: 'https://adityamahakali.vercel.app/'
		},
		slidesLink: 'https://drive.google.com/open?id=1_IG5x_NDTelg3apQUwK14rOWbBgBz3-P',
		resourcesLink:
			'https://www.canva.com/design/DAGye_boC38/YsfY4t2Z8RqI7Hw311wfJw/edit?utm_content=DAGye_boC38&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
	},
	{
		id: 'track2-session7',
		title: 'Rethinking AI UX',
		speaker: 'Sanju Sivalingam',
		description:
			'Design principles and best practices for creating intuitive AI-powered user experiences',
		type: 'session',
		duration: 35,
		startTime: '15:45',
		endTime: '16:20',
		abstract:
			"this is a talk about missing pieces in ai experiences. i'll show why chat-first ai interface is too limited/fails and what to do instead. think autopilot vs copilot, summarize then decide, watch then trigger. you'll see how these cut steps from 8 to 2 and save up to 60% time.",
		speakerBio:
			"I'm Sanju, founder of ThisUX, a design studio building tools for next-gen founders and startups. I have spoken at many events across India, including GDG Chennai.",
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/imsanju',
			twitter: 'https://x.com/spikeysanju',
			website: 'https://sanju.sh'
		},
		resourcesLink: 'https://sanju.sh/ai-ux',
		sessionNotes:
			'i\'m part of the gdg chennai core team and have spoken at several tech events across india. this talk can take between 30–40 minutes or a shorter 15–20 minute lightning version depending on your schedule needs. i\'m aiming for an intermediate audience who knows the basics of ai but struggles with the "now what?" of actually building useful products. the content is very demo-heavy with real examples, so attendees walk away with actionable patterns they can start using next week.'
	},
	{
		id: 'track2-session8',
		title: 'End to end agent development life cycle using Google ADK',
		speaker: 'Bhavishya Pandit',
		description: 'Complete agent development lifecycle using Google ADK',
		type: 'session',
		duration: 35,
		startTime: '16:20',
		endTime: '17:00',
		abstract:
			"Craft production-ready, self-evolving AI agents by mastering the end-to-end development lifecycle with Google's Agent Development Kit (ADK). This overview covers designing capabilities, integrating robust CI/CD pipelines for automated testing and deployment, and implementing data-driven feedback loops that allow the agent to learn and improve autonomously. Move beyond simple conversational design to build a scalable, intelligent system that continuously refines its performance and operates reliably in a live environment.",
		speakerBio:
			'Senior Data Scientist, GDE AI, Creator with 40 million+ views, speaker @ 100events',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/bhavishya-pandit'
		},
		slidesLink: 'https://drive.google.com/open?id=1wpJlcHSrAjtWD-eADA-jRvF_vG__gaJg',
		sessionNotes:
			'Notes for Reviewers:\n• Technical Depth: The session will provide concrete code snippets for webhook logic, Cloud Build CI/CD configurations, and the architecture for the auto-healing feedback loop.\n• Beyond Demos: Focus is on operational excellence monitoring (Cloud Logging/Monitoring), scalability (Cloud Run), and automated recovery, moving beyond a simple demo.\n• Key Differentiator: The "auto-healing" component is a advanced, rarely covered topic that addresses a major pain point in agent maintenance.\n• GCP Integration: Highlights the powerful synergy between Google ADK and core GCP services (Cloud Functions, Pub/Sub, etc.) for a fully integrated cloud-native solution.'
	}
];

// Track 3: Workshops & Lightning Talks
const track3Sessions: Session[] = [
	...commonSessions,
	{
		id: 'track3-workshop1',
		title: 'Workshop 1: Deploy a secure MCP server on Cloud Run',
		speaker: 'Bhaarat Krishnan',
		description:
			'Hands-on workshop on deploying Model Context Protocol servers securely on Google Cloud Run',
		type: 'workshop',
		duration: 60,
		startTime: '11:15',
		endTime: '12:15',
		abstract:
			'In this workshop, we will build and deploy a Model Context Protocol server in serverless container with Cloud Run. MCP servers are useful for providing LLMs access with external tools and services. We will configure it secure and production ready that can be accessible by multiple clients.',
		speakerBio: 'Member Technical Staff at Zoho',
		speakerLinks: {
			linkedin: 'https://in.linkedin.com/in/bhaarat-krishnan',
			website: 'Bhaaratkrishnan.com'
		},
		slidesLink: 'https://drive.google.com/open?id=1ej1f7GBp2NBW02P5D_0_BsPRsqqGvP6J',
		resourcesLink:
			'https://codelabs.developers.google.com/codelabs/cloud-run/how-to-deploy-a-secure-mcp-server-on-cloud-run#0',
		sessionNotes: 'This is a official Google codelab'
	},
	{
		id: 'track3-lightning1',
		title:
			'Lightning talk: Solutions Mindset: Exploring new technologies from Developer to Solutionist: Reclaiming Purpose in the Age of AI',
		speaker: 'Eganathan R',
		description:
			"Reclaiming Purpose in the Age of AI - A developer's journey to becoming a solution architect",
		type: 'lightning',
		duration: 20,
		startTime: '12:15',
		endTime: '12:35',
		abstract:
			"In this talk, we explore why the label 'developer' is no longer enough. We'll explore how adopting the Solutionist mindset can empower you to solve real-world problems with agility, empathy, and creativity, especially in the age of AI.\n\nThis talk challenges the traditional \"developer\" label and introduces the Solutionist mindset: a way of thinking that goes beyond coding to solving real-world problems with empathy, creativity, and systems thinking. It emphasizes how AI can act as a collaborator, not a competitor, and shares personal stories of building small but impactful projects (like budget trackers, bookmarking tools, and task managers) to highlight practical lessons learnt, building, exploring, hosting and using different services etc.\n\nAttendees will leave inspired to look beyond frameworks and tech stacks, and instead approach problems with a broader, solution-driven perspective that's especially relevant in today's AI-driven era.",
		speakerBio: 'Android Developer/MTS at Zoho Corp',
		speakerLinks: {
			linkedin: 'http://linkedin.com/in/eganathan/',
			twitter: 'https://x.com/eknath_dev',
			website: 'eknath.dev'
		},
		slidesLink: 'https://drive.google.com/open?id=1Y9vCHTx9SEjTHbo_mNHl3h2t4CtivzIK',
		resourcesLink: 'https://md.eknath.dev/posts/software-development/solutionist/'
	},
	{
		id: 'track3-lightning2',
		title: 'Lightning talk: Checks and Privacy Sandbox - An Interesting Duo',
		speaker: 'Vijayabharathi Karuppasamy',
		description: 'Understanding the relationship between privacy checks and sandbox environments',
		type: 'lightning',
		duration: 20,
		startTime: '12:35',
		endTime: '13:00',
		abstract:
			"The Privacy Sandbox is an initiative from Google aims to create technologies that both protect people's privacy online and give companies and developers tools to build thriving digital businesses. This provides alternative solutions for browsing without third-party cookies and reduce cross-site and cross-app tracking while helping to keep online content. Checks is used for Automated compliance analysis and E2E monitoring.",
		speakerBio:
			'Cybersecurity professional working on Application and cloud security. Lead Consultant- Cybersecurity at Infosys Limited',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/imthevb',
			twitter: 'https://x.com/imthevb'
		},
		slidesLink: 'https://drive.google.com/open?id=1lT9YdxCtpjeWjr4HJ0ktTyVC0P56IC5b',
		resourcesLink: 'https://privacysandbox.com/\nhttps://checks.google.com/'
	},
	{
		id: 'track3-workshop2',
		title: 'Workshop 2: Securing your codebase using ADK and A2A',
		speaker: 'Aditya Mahakali',
		description:
			"Workshop on implementing security best practices using Google's AI Development Kit and Application-to-Application authentication",
		type: 'workshop',
		duration: 60,
		startTime: '14:00',
		endTime: '15:00',
		abstract:
			"I'm building lightweight agents that run automated security scans across code, dependencies, and infra — and I'll show you how to do the same, safely. In this 45-minute session we'll use the Agent Development Kit (ADK) and Agent-to-Agent (A2A) patterns to design scanning agents that are secure, auditable, and CI/CD-friendly. You'll get practical guidance on agent identity and least-privilege authorization, encrypted A2A messaging, safe delegation of scanning tasks, and tamper-evident reporting. Live demos will cover integrating agents into pipelines, handling false positives, and building an audit trail so scans are both automated and trustworthy. Walk away with patterns and code-level ideas to deploy security-scanning agents without expanding your attack surface.",
		speakerBio: 'AI Engineer at IBM',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/aditya-mahakali-b81758168/',
			website: 'https://adityamahakali.vercel.app/'
		},
		slidesLink: 'https://drive.google.com/open?id=14ga_ImHixGItr-0M6ACPoIkYdvXDvlVi'
	},
	{
		id: 'track-new-lightning3',
		title: 'There has never been a better time to build',
		speaker: 'Abinash Muralidharan',
		description:
			"This talk explores today's unprecedented opportunities for builders and makers. We'll discuss the explosion of AI tools, open-source technologies, and global communities that empower anyone to launch projects faster and bigger than ever before. ",
		type: 'lightning',
		duration: 20,
		startTime: '15:00',
		endTime: '15:25',
		abstract:
			"In an era defined by rapid technological innovation, there truly has never been a better time to build. This talk will inspire developers and creators to seize today's unique opportunities—highlighting how advancements in AI, democratized open-source tools, and the rise of worldwide developer communities are lowering barriers and accelerating innovation. Attendees will learn how they can leverage this ecosystem to start projects with greater speed and ambition than ever before, regardless of their background or resources. Join us to discover practical strategies, mindsets, and resources for turning your ideas into impactful, real-world solutions in the modern builder's landscape.",
		speakerBio: 'Associate Software Developer at AVK Tech Solutions',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/abinash-m-m/'
		}
	},

	{
		id: 'track3-lightning4',
		title:
			'Lightning Talk: Make Me Productive: Building a Chrome Extension to Stay Focused on YouTube',
		speaker: 'Sahithya B A',
		description:
			'Learn how to build productivity-focused browser extensions for better focus and time management',
		type: 'lightning',
		duration: 20,
		startTime: '15:25',
		endTime: '15:45',
		abstract:
			"In this talk, I will share the journey of creating Make Me Productive – YouTube Focus Buddy, an open-source Chrome extension designed to help users reduce distractions and focus on educational content. I'll walk through the motivation behind building it, the technical implementation with Manifest V3, content scripts, and DOM manipulation, as well as how I published it to the Chrome Web Store. Along the way, I'll highlight challenges, privacy considerations, and lessons learned about balancing user experience, productivity, and compliance with Google's policies. This session is aimed at developers interested in building their own Chrome extensions and leveraging them to solve real-world problems.\n\nThe extension is fully open-source and publicly available on GitHub. Built using Manifest V3, focusing on productivity and user well-being. The talk is structured for a 15–20 min session, with practical takeaways for developers. It combines both technical depth (manifest, content scripts, permissions, publishing) and impact-driven storytelling (how tech can improve digital habits).",
		speakerBio:
			'Sahithya Balasubramaniam is a multifaceted professional—a Software Developer at GUVI, a bestselling author of five books, an accomplished writer and poetess, a dynamic public speaker and emcee, and a digital content creator. In her leisure time, she explores creative and technical pursuits that blend innovation, storytelling, and community impact.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/sahithyaba/',
			website: 'sahithyaba.baserock.in'
		},
		slidesLink: 'https://drive.google.com/open?id=1RtSvfGtoPqUK8vtVRu7XXopZiQnZjAy1',
		resourcesLink:
			'https://chromewebstore.google.com/detail/agmfananbobmjlkfmiclhpclhinkdapb?utm_source=item-share-cb',
		sessionNotes: 'https://sessionize.com/sahithyaba'
	},
	{
		id: 'track3-lightning5',
		title:
			'Lightning Talk: Orchestrating Synthetic Minds: Cognitive Architectures in the Age of LLMs',
		speaker: 'Mahati Chandramohan',
		description:
			'Exploring cognitive architectures and their implementation in large language model systems',
		type: 'lightning',
		duration: 20,
		startTime: '15:45',
		endTime: '16:10',
		abstract:
			"As organizations embrace AI agents, a pressing question emerges: How can we design systems that reliably think, remember, and act over time? While Large Language Models (LLMs) excel at language generation, they lack the cognitive structures required for sustained reasoning and adaptive behavior. Cognitive architectures for LLM agents aim to fill this gap, offering blueprints that integrate memory, planning, reflection, and decision-making—drawing inspiration from decades of human-centered cognitive research.\n\nThis talk will introduce the core components of such architectures, including multi-level memory systems, reasoning and planning modules, reflection loops for self-correction, and action layers for tool use and real-world interaction. Building on recent advances such as CoALA, ReflAct, and the Task Memory Engine, we will explore how these designs are transforming LLMs into more capable and reliable agents.\n\nWe will also highlight emerging design patterns—from ReAct's integration of reasoning and acting, to Reflexion's self-critique, to PreAct's predictive planning—while addressing the open challenges of scaling context and memory, mitigating hallucinations, defining evaluation benchmarks, and ensuring ethical, safe deployment.\n\nBy weaving together insights from cognitive science and the latest LLM research, this session paints a vision of synthetic cognition: a future where AI agents evolve from reactive tools into adaptive collaborators—capable of learning, reflecting, and co-creating alongside humans.",
		speakerBio:
			'Mahati ChandraMohan exemplifies what it means to be a true technologist. Someone who combines deep technical expertise with leadership, community spirit, and inclusivity. With over 13 years at PayPal, she has built and enhanced large-scale risk and compliance systems that power fraud prevention and global regulatory adherence. Her technical contributions not only showcase innovation but also deliver real-world impact that touches millions of users. Beyond her engineering achievements, Mahati is a mentor and guide to cross-functional teams, helping others grow while streamlining complex workflows. She embodies the principle that great technologists are not only problem-solvers but also enablers who multiply the success of those around them. What sets her apart is her commitment to community building and inclusive technology. As a strong advocate for diversity, equity, and inclusion (DEI), she champions spaces where voices from all backgrounds can be heard and valued. Her belief that "technology becomes transformative when powered by community and knowledge-sharing" inspires technologists to see beyond code to the people and communities technology serves.',
		speakerLinks: {
			linkedin: 'https://www.linkedin.com/in/mahati-chandramohan-05a959138/'
		},
		slidesLink: 'https://drive.google.com/open?id=11fZ01NNTU4Bh-LHjzSRNjJKqjuABbjsz',
		resourcesLink:
			'https://arxiv.org/html/2309.02427v3\nhttps://www.youtube.com/watch?v=Qj7jPTQa2f4\nhttps://www.cognee.ai/blog/fundamentals/cognitive-architectures-for-language-agents-explained'
	},
	{
		id: 'track3-lightning3',
		title:
			'Lightning Talk: Building NanoAgents: Create and Deploy Custom Agentic Framework similar to Langchain and Langgraph and submit to PyPi',
		speaker: 'Navuluri Balaji',
		description:
			'Create and Deploy Custom Agentic Framework similar to Langchain and Langgraph and submit to PyPi',
		type: 'lightning',
		duration: 20,
		startTime: '16:10',
		endTime: '16:35',
		abstract:
			'Designing NanoAgents that are easy to build and extend\nPackaging and publishing them to PyPI, making them instantly available to the global developer ecosystem\nDemonstrating real-world use cases where NanoAgents can accelerate innovation.\n\nBy the end of the session, attendees will be equipped to not only create their own NanoAgents but also contribute to a growing ecosystem of reusable AI components.\n\nA nano, minimalistic, and lightweight library for building ReACT-based AI agents that use tools to solve tasks.',
		speakerBio: 'Associate Software Developer at AVK Tech Solutions',
		speakerLinks: {
			linkedin: 'http://www.linkedin.com/in/navuluri-balaji',
			twitter: 'https://x.com/navuluribalaji?s=21',
			website: 'https://linktr.ee/BalajiNavuluri'
		},
		slidesLink: 'https://drive.google.com/open?id=1XIXoqDhZ_xHDvsj13Ns7Pr9gwDvFbKaE',
		resourcesLink: 'https://pypi.org/project/nbagents/',
		sessionNotes: 'https://github.com/NavuluriBalaji/NKit'
	},
	{
		id: 'networking-track3',
		title: 'Networking',
		speaker: 'GDG Chennai Team',
		description: 'Networking',
		type: 'break',
		duration: 30,
		startTime: '16:35',
		endTime: '17:00'
	}
];

// Generate time slots for each track based on their sessions
function generateTimeSlots(sessions: Session[]): TimeSlot[] {
	const times = new Set<string>();

	sessions.forEach((session) => {
		times.add(session.startTime);
		times.add(session.endTime);
	});

	const sortedTimes = Array.from(times).sort();

	return sortedTimes.map((time) => ({
		time,
		label: formatTimeLabel(time)
	}));
}

function formatTimeLabel(time: string): string {
	const [hours, minutes] = time.split(':').map(Number);
	const hour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
	const ampm = hours >= 12 ? 'PM' : 'AM';
	return `${hour}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

export const tracks: Track[] = [
	{
		id: 'track1',
		name: 'Track 1',
		description: 'AI & Machine Learning Sessions',
		sessions: track1Sessions,
		timeSlots: generateTimeSlots(track1Sessions)
	},
	{
		id: 'track2',
		name: 'Track 2',
		description: 'Mobile & Web Development',
		sessions: track2Sessions,
		timeSlots: generateTimeSlots(track2Sessions)
	},
	{
		id: 'track3',
		name: 'Track 3',
		description: 'Workshops & Lightning Talks',
		sessions: track3Sessions,
		timeSlots: generateTimeSlots(track3Sessions)
	}
];

export function getTrackById(trackId: 'track1' | 'track2' | 'track3'): Track | undefined {
	return tracks.find((track) => track.id === trackId);
}

export function getSessionTypeStyles(type: string) {
	switch (type) {
		case 'keynote':
			return {
				borderColor: 'border-purple-200',
				bgColor: 'bg-purple-50',
				textColor: 'text-purple-800',
				badgeColor: 'bg-purple-100 text-purple-700'
			};
		case 'session':
			return {
				borderColor: 'border-blue-200',
				bgColor: 'bg-blue-50',
				textColor: 'text-blue-800',
				badgeColor: 'bg-blue-100 text-blue-700'
			};
		case 'workshop':
			return {
				borderColor: 'border-orange-200',
				bgColor: 'bg-orange-50',
				textColor: 'text-orange-800',
				badgeColor: 'bg-orange-100 text-orange-700'
			};
		case 'lightning':
			return {
				borderColor: 'border-green-200',
				bgColor: 'bg-green-50',
				textColor: 'text-green-800',
				badgeColor: 'bg-green-100 text-green-700'
			};
		case 'panel':
			return {
				borderColor: 'border-indigo-200',
				bgColor: 'bg-indigo-50',
				textColor: 'text-indigo-800',
				badgeColor: 'bg-indigo-100 text-indigo-700'
			};
		case 'break':
		default:
			return {
				borderColor: 'border-gray-200',
				bgColor: 'bg-gray-50',
				textColor: 'text-gray-700',
				badgeColor: 'bg-gray-100 text-gray-600'
			};
	}
}
