export interface Session {
	id: string;
	title: string;
	speaker: string;
	description?: string;
	type: 'session' | 'workshop' | 'lightning' | 'panel' | 'keynote' | 'break';
	duration: number; // in minutes
	startTime: string; // format: "HH:MM"
	endTime: string; // format: "HH:MM"
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
		title: 'Registration & Welcome',
		speaker: 'GDG Chennai Team',
		description: 'Check-in, welcome kit distribution, and networking',
		type: 'break',
		duration: 90,
		startTime: '08:00',
		endTime: '09:30'
	},
	{
		id: 'keynote',
		title: 'Keynote by [ NAME ]',
		speaker: 'Keynote Speaker',
		description: 'Welcome to DevFest Chennai 2025',
		type: 'keynote',
		duration: 45,
		startTime: '09:30',
		endTime: '10:15'
	},
	{
		id: 'break-1',
		title: 'Moving between halls and track setup',
		speaker: '',
		type: 'break',
		duration: 15,
		startTime: '10:15',
		endTime: '10:30'
	},
	{
		id: 'lunch',
		title: 'Lunch & Networking',
		speaker: 'GDG Chennai Team',
		description: 'Enjoy delicious food and connect with fellow developers',
		type: 'break',
		duration: 60,
		startTime: '12:30',
		endTime: '13:30'
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
		id: 'track1-session1',
		title: 'Gemma-licious AI: Cooking Up Smart Apps with Flutter',
		speaker: 'Kamal Shree',
		description:
			"Learn how to integrate AI capabilities into Flutter applications using Google's Gemma models",
		type: 'session',
		duration: 35,
		startTime: '10:30',
		endTime: '11:05'
	},
	{
		id: 'track1-buffer1',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '11:05',
		endTime: '11:10'
	},
	{
		id: 'track1-session2',
		title: 'AI Agent (and MCP) Vulnerabilities and Security',
		speaker: 'Nikhilesh Tayal',
		description:
			'Understanding security challenges in AI agents and Model Context Protocol implementations',
		type: 'session',
		duration: 35,
		startTime: '11:10',
		endTime: '11:45'
	},
	{
		id: 'track1-buffer2',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '11:45',
		endTime: '11:50'
	},
	{
		id: 'track1-session3',
		title: 'From Queries to Clusters: Building High-Performance Node.js Backends',
		speaker: 'Hemant Gupta',
		description:
			'Advanced techniques for scaling Node.js applications with clustering and performance optimization',
		type: 'session',
		duration: 35,
		startTime: '11:50',
		endTime: '12:25'
	},
	{
		id: 'track1-session4',
		title: 'The Future is Spatial (XR): Building for Android XR with Gemini',
		speaker: 'Aditya Shinde',
		description: 'Explore the intersection of Extended Reality and AI in Android development',
		type: 'session',
		duration: 35,
		startTime: '13:40',
		endTime: '14:15'
	},
	{
		id: 'track1-buffer3',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '14:15',
		endTime: '14:20'
	},
	{
		id: 'track1-session5',
		title: 'Build Super Fast web apps using Local First Approach',
		speaker: 'Varun Raj Manoharan',
		description:
			'Learn how to build lightning-fast web applications using local-first architecture patterns',
		type: 'session',
		duration: 35,
		startTime: '14:20',
		endTime: '14:55'
	},
	{
		id: 'track1-buffer4',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '14:55',
		endTime: '15:00'
	},
	{
		id: 'track1-panel1',
		title: 'Panel 1',
		speaker: 'TBD',
		description: 'TBD',
		type: 'panel',
		duration: 40,
		startTime: '15:00',
		endTime: '15:40'
	},
	{
		id: 'track1-buffer5',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '15:40',
		endTime: '15:45'
	},
	{
		id: 'track1-session6',
		title: 'Supercharging Google Cloud Deployments with Gemini CLI: From Code to Cloud in Minutes',
		speaker: 'Jitendra Gupta',
		description: "From Code to Cloud in Minutes using Google's Gemini CLI tools",
		type: 'session',
		duration: 35,
		startTime: '15:45',
		endTime: '16:20'
	},
	{
		id: 'track1-buffer6',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '16:20',
		endTime: '16:25'
	},
	{
		id: 'track1-panel2',
		title: 'Panel 2',
		speaker: 'TBD',
		description: 'TBD',
		type: 'panel',
		duration: 35,
		startTime: '16:25',
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
		duration: 60,
		startTime: '10:30',
		endTime: '11:30'
	},
	{
		id: 'track2-buffer1',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '11:30',
		endTime: '11:35'
	},
	{
		id: 'track2-session2',
		title:
			"From Cloud to Pocket: Refining Stories with Google's Gemini API and Gemma On-Device Model",
		speaker: 'Mayur Madnani',
		description:
			'Building mobile applications that leverage both cloud and on-device AI capabilities',
		type: 'session',
		duration: 20,
		startTime: '11:35',
		endTime: '11:55'
	},
	{
		id: 'track2-buffer2',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '11:55',
		endTime: '12:00'
	},
	{
		id: 'track2-session3',
		title: 'Beyond Code Sharing: Building Smarter Mobile Apps with KMP and Agents (Koog)',
		speaker: 'Rivu Chakraborty',
		description: 'Advanced Kotlin Multiplatform development with AI agent integration',
		type: 'session',
		duration: 20,
		startTime: '12:00',
		endTime: '12:20'
	},
	{
		id: 'track2-session4',
		title: 'A Lightning tour of Vision Language Models',
		speaker: 'Sairam Sundaresan',
		description: 'Quick overview of the latest developments in vision-language model capabilities',
		type: 'session',
		duration: 60,
		startTime: '13:50',
		endTime: '14:50'
	},
	{
		id: 'track2-session5',
		title: 'Power of BuildContext in Flutter',
		speaker: 'Abhishek Doshi',
		description:
			"Deep dive into Flutter's BuildContext and its role in widget lifecycle management",
		type: 'session',
		duration: 35,
		startTime: '14:20',
		endTime: '14:55'
	},
	{
		id: 'track2-buffer3',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '14:55',
		endTime: '15:00'
	},
	{
		id: 'track2-session6',
		title: 'Memory in Agentic AI',
		speaker: 'Vipin Kumar Agrahari',
		description:
			'Understanding how AI agents maintain and utilize memory for better decision making',
		type: 'session',
		duration: 20,
		startTime: '15:00',
		endTime: '15:20'
	},
	{
		id: 'track2-buffer4',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '15:20',
		endTime: '15:25'
	},
	{
		id: 'track2-session7',
		title: 'Rethinking AI UX',
		speaker: 'Sanju Sivalingam',
		description:
			'Design principles and best practices for creating intuitive AI-powered user experiences',
		type: 'session',
		duration: 20,
		startTime: '15:25',
		endTime: '15:45'
	},
	{
		id: 'track2-session8',
		title: 'End to end agent development life cycle using Google ADK',
		speaker: 'Bhavishya Pandit',
		description: 'Complete agent development lifecycle using Google ADK',
		type: 'session',
		duration: 35,
		startTime: '16:25',
		endTime: '17:00'
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
		startTime: '10:30',
		endTime: '11:30'
	},
	{
		id: 'track3-buffer1',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '11:30',
		endTime: '11:35'
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
		startTime: '11:35',
		endTime: '11:55'
	},
	{
		id: 'track3-buffer2',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '11:55',
		endTime: '12:00'
	},
	{
		id: 'track3-lightning2',
		title: 'Lightning talk: Checks and Privacy Sandbox - An Interesting Duo',
		speaker: 'Vijayabharathi Karuppasamy',
		description: 'Understanding the relationship between privacy checks and sandbox environments',
		type: 'lightning',
		duration: 20,
		startTime: '12:00',
		endTime: '12:20'
	},
	{
		id: 'track3-workshop2',
		title: 'Workshop 2: Securing your codebase using ADK and A2A',
		speaker: 'Aditya Mahakali',
		description:
			"Workshop on implementing security best practices using Google's AI Development Kit and Application-to-Application authentication",
		type: 'workshop',
		duration: 60,
		startTime: '13:50',
		endTime: '14:50'
	},
	{
		id: 'track3-buffer3',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '14:50',
		endTime: '14:55'
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
		startTime: '15:00',
		endTime: '15:20'
	},
	{
		id: 'track3-buffer4',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '15:20',
		endTime: '15:25'
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
		endTime: '15:45'
	},
	{
		id: 'track3-buffer5',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '15:45',
		endTime: '15:50'
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
		startTime: '15:50',
		endTime: '16:10'
	},
	{
		id: 'track3-buffer6',
		title: 'Break',
		speaker: '',
		description: '',
		type: 'break',
		duration: 5,
		startTime: '16:10',
		endTime: '16:15'
	},
	{
		id: 'track3-panel',
		title: 'Panel: Know your community',
		speaker: 'Panel Moderator',
		description: 'Community discussion and networking session',
		type: 'panel',
		duration: 20,
		startTime: '16:15',
		endTime: '16:35'
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
