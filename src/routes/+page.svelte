<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen bg-gray-100 p-4">
	<!-- Header -->
	<header class="mb-8 flex items-center justify-between max-w-7xl mx-auto">
		<h1 class="text-2xl font-medium text-gray-600">
			DevFest Chennai/<span class="text-gray-400">25</span>
		</h1>
		<button class="rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800">
			Register now
		</button>
	</header>

	<!-- Main Content Grid -->
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
		<!-- Hero Section -->
		<div
			class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-10 lg:col-span-2"
		>
			<div>
				<h2 class="mb-4 text-2xl font-bold" style="font-family: 'Caveat', sans-serif;">
					Devfest chennai
				</h2>
				<h3 class="mb-4 text-5xl font-medium tracking-tight">Build. Learn. Connect</h3>
				<p class="text-xl leading-normal text-gray-600">
					One day. Real talks. Hands–on builds, Friendly people. Come ship something new and meet
					your crew.
				</p>
			</div>
			<div class="flex gap-4">
				<button
					class="rounded-full bg-black px-6 py-4 font-medium text-white transition-colors hover:bg-gray-800"
				>
					Register now
				</button>
				<button
					class="rounded-full bg-gray-200 px-6 py-4 font-medium text-gray-700 transition-colors hover:bg-gray-300"
				>
					See agenda
				</button>
			</div>
		</div>

		<!-- What you'll get -->
		<div class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-10">
			<div>
				<h3 class="mb-2 text-xl font-bold" style="font-family: 'Caveat', sans-serif;">
					What you'll get
				</h3>
				<h4 class="mb-6 text-2xl font-medium tracking-tight">Experience includes</h4>
			</div>
			<div class="space-y-3">
				<div
					class="rotate-[-3deg] transform rounded-full bg-red-100 px-6 py-3 text-center text-red-700"
				>
					Talks
				</div>
				<div
					class="rotate-[-3deg] transform rounded-full bg-purple-100 px-6 py-3 text-center text-purple-700"
				>
					Hiring
				</div>
				<div
					class="rotate-[3deg] transform rounded-full bg-orange-100 px-6 py-3 text-center text-orange-700"
				>
					Workshops
				</div>
				<div
					class="rotate-[3deg] transform rounded-full bg-green-100 px-6 py-3 text-center text-green-700"
				>
					Community
				</div>
			</div>
		</div>

		<!-- Why join us -->
		<div class="rounded-3xl bg-white p-10">
			<h3 class="mb-2 text-xl font-bold" style="font-family: 'Caveat', sans-serif;">
				Why join us?
			</h3>
			<h4 class="mb-6 text-2xl font-medium tracking-tight">Your developer journey awaits</h4>

			<div class="space-y-4">
				<div class="flex items-start gap-3">
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50"
					>
						<span class="text-sm">🚀</span>
					</div>
					<div>
						<h5 class="mb-1 font-medium text-gray-900">Learn & Grow</h5>
						<p class="text-sm text-gray-600">Master cutting-edge Google technologies</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-50"
					>
						<span class="text-sm">🤝</span>
					</div>
					<div>
						<h5 class="mb-1 font-medium text-gray-900">Connect</h5>
						<p class="text-sm text-gray-600">Network with 500+ like-minded developers</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-50"
					>
						<span class="text-sm">💼</span>
					</div>
					<div>
						<h5 class="mb-1 font-medium text-gray-900">Career Boost</h5>
						<p class="text-sm text-gray-600">Access exclusive hiring opportunities</p>
					</div>
				</div>

				<div class="flex items-start gap-3">
					<div
						class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-50"
					>
						<span class="text-sm">🛠️</span>
					</div>
					<div>
						<h5 class="mb-1 font-medium text-gray-900">Build Real Projects</h5>
						<p class="text-sm text-gray-600">Hands-on workshops with expert guidance</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Event highlights -->
		<div class="rounded-3xl bg-white p-10 lg:col-span-2">
			<h3 class="mb-2 text-xl font-bold" style="font-family: 'Caveat', sans-serif;">
				Event highlights
			</h3>
			<h4 class="mb-8 text-2xl font-medium tracking-tight">Real impact, real community</h4>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="flex items-start space-x-4">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100"
					>
						<span class="text-2xl">🎤</span>
					</div>
					<div>
						<h5 class="mb-2 font-medium">Expert Talks</h5>
						<p class="text-gray-600">Learn from industry leaders and Google Developer Experts</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100"
					>
						<span class="text-2xl">🛠️</span>
					</div>
					<div>
						<h5 class="mb-2 font-medium">Hands-on Workshops</h5>
						<p class="text-gray-600">Build real projects with latest Google technologies</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100"
					>
						<span class="text-2xl">🤝</span>
					</div>
					<div>
						<h5 class="mb-2 font-medium">Networking</h5>
						<p class="text-gray-600">Connect with fellow developers and potential employers</p>
					</div>
				</div>

				<div class="flex items-start space-x-4">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100"
					>
						<span class="text-2xl">🎁</span>
					</div>
					<div>
						<h5 class="mb-2 font-medium">Swag & Prizes</h5>
						<p class="text-gray-600">Win amazing prizes and get exclusive Google swag</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Agenda -->
		<div class="rounded-3xl bg-white p-10 lg:col-span-2">
			<div class="mb-8">
				<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">Agenda</h3>
				<h4 class="mb-4 text-4xl font-medium">One crisp day</h4>
				<p class="text-gray-600">December 15, 2024 • Chennai</p>
			</div>

			<!-- Calendar-style schedule -->
			<div class="space-y-2">
				<!-- Registration -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">8:30 AM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3">
							<h5 class="mb-1 font-medium text-blue-900">Registration & Breakfast</h5>
							<p class="text-xs text-blue-700">Check-in, networking, and morning refreshments</p>
						</div>
					</div>
				</div>

				<!-- Opening -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">9:30 AM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3">
							<h5 class="mb-1 font-medium text-purple-900">Opening Keynote</h5>
							<p class="text-xs text-purple-700">Welcome to DevFest Chennai 2025</p>
						</div>
					</div>
				</div>

				<!-- Session 1 -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">10:15 AM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-3">
							<h5 class="mb-1 font-medium text-green-900">Building the Future with AI</h5>
							<div class="mb-1">
								<span
									class="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700"
								>
									AI Track • Sanju Sivalingam
								</span>
							</div>
							<p class="text-xs text-green-600">
								Latest developments in machine learning and AI applications
							</p>
						</div>
					</div>
				</div>

				<!-- Coffee Break -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">11:00 AM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-3">
							<h5 class="font-medium text-yellow-900">Coffee Break</h5>
						</div>
					</div>
				</div>

				<!-- Parallel Sessions -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">11:30 AM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-3">
							<h5 class="mb-1 font-medium text-orange-900">Modern Web Development</h5>
							<div class="mb-1">
								<span
									class="inline-flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700"
								>
									Web Track • Somasundaram M
								</span>
							</div>
							<p class="text-xs text-orange-600">Progressive Web Apps and modern frameworks</p>
						</div>
					</div>
				</div>

				<!-- Workshop -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">12:15 PM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-3">
							<h5 class="mb-1 font-medium text-red-900">Hands-on Android Workshop</h5>
							<div class="mb-1 flex items-center gap-2">
								<span
									class="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700"
								>
									Android Track • Varun M
								</span>
								<span
									class="inline-flex items-center rounded-full bg-red-200 px-2 py-0.5 text-xs font-medium text-red-800"
								>
									Limited Seats
								</span>
							</div>
							<p class="text-xs text-red-600">Build your first Kotlin app with Jetpack Compose</p>
						</div>
					</div>
				</div>

				<!-- Lunch -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">1:00 PM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-gray-500 bg-gray-50 p-3">
							<h5 class="mb-1 font-medium text-gray-900">Lunch & Networking</h5>
							<p class="text-xs text-gray-700">Food, conversations, and community building</p>
						</div>
					</div>
				</div>

				<!-- Afternoon Session -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">2:00 PM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-3">
							<h5 class="mb-1 font-medium text-indigo-900">Career Panel Discussion</h5>
							<p class="text-xs text-indigo-700">
								Industry experts share career insights and hiring tips
							</p>
						</div>
					</div>
				</div>

				<!-- Closing -->
				<div class="flex items-start gap-4">
					<div class="w-16 flex-shrink-0 pt-2 text-right">
						<div class="text-xs font-medium text-gray-900">3:00 PM</div>
					</div>
					<div class="flex-1">
						<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-3">
							<h5 class="mb-1 font-medium text-purple-900">Closing & Prize Distribution</h5>
							<p class="text-xs text-purple-700">Thank you, prizes, and see you next year!</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Insider tips -->
		<div class="flex min-h-[500px] flex-col justify-between rounded-3xl bg-white p-10">
			<div>
				<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
					Insider tips
				</h3>
				<h4 class="mb-6 text-2xl font-medium tracking-tight">Make most of your day</h4>
			</div>
			<div class="space-y-3">
				<div
					class="rotate-[-2deg] transform rounded-full bg-blue-100 px-6 py-3 text-center text-blue-700"
				>
					Pick one track & go deep!
				</div>
				<div
					class="rotate-[1deg] transform rounded-full bg-orange-100 px-6 py-3 text-center text-orange-700"
				>
					Book workshop seats early, they fill up fast!
				</div>
				<div
					class="rotate-[2deg] transform rounded-full bg-purple-100 px-6 py-3 text-center text-purple-700"
				>
					Leave space to meet people & make connections
				</div>
				<div
					class="rotate-[-1deg] transform rounded-full bg-red-100 px-6 py-3 text-center text-red-700"
				>
					Bring business cards & don't forgot to charge your laptop
				</div>
				<div
					class="rotate-[3deg] transform rounded-full bg-green-100 px-6 py-3 text-center text-green-700"
				>
					Arrive 30 mins early to grab the best seats & free swag
				</div>
				<div
					class="rotate-[-2deg] transform rounded-full bg-yellow-100 px-6 py-3 text-center text-yellow-700"
				>
					Download session slides & speaker contact info during breaks
				</div>
				<div
					class="rotate-[1deg] transform rounded-full bg-pink-100 px-6 py-3 text-center text-pink-700"
				>
					Ask questions! Speakers love engaged audiences
				</div>
				<div
					class="rotate-[-3deg] transform rounded-full bg-indigo-100 px-6 py-3 text-center text-indigo-700"
				>
					Follow #DevFestChennai on social for live updates & photos
				</div>
				<div
					class="rotate-[2deg] transform rounded-full bg-teal-100 px-6 py-3 text-center text-teal-700"
				>
					Lunch break = prime networking time, don't eat alone!
				</div>
			</div>
		</div>

		<!-- Tracks -->
		<div class="rounded-3xl bg-white p-10 lg:col-span-3">
			<div class="mb-8">
				<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">Tracks</h3>
				<h4 class="mb-4 text-4xl font-medium tracking-tight">3 clear lanes</h4>
				<p class="text-gray-600">
					Choose your path and dive deep into the technologies that matter to you
				</p>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<!-- AI Track -->
				<div
					class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 to-red-100 p-8 transition-all hover:shadow-lg"
				>
					<div class="mb-6 flex items-center justify-between">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-full bg-red-200 text-2xl"
						>
							🤖
						</div>
						<span class="rounded-full bg-red-200 px-3 py-1 text-sm font-medium text-red-800">
							AI Track
						</span>
					</div>

					<h5 class="mb-3 text-2xl font-bold text-red-900">Artificial Intelligence</h5>
					<p class="mb-4 text-red-700">
						Explore the future of AI with machine learning, neural networks, and intelligent
						applications
					</p>

					<div class="space-y-2">
						<div class="flex items-center gap-2 text-sm text-red-600">
							<span class="text-xs">•</span>
							<span>Machine Learning Fundamentals</span>
						</div>
						<div class="flex items-center gap-2 text-sm text-red-600">
							<span class="text-xs">•</span>
							<span>TensorFlow & PyTorch</span>
						</div>
						<div class="flex items-center gap-2 text-sm text-red-600">
							<span class="text-xs">•</span>
							<span>AI Ethics & Best Practices</span>
						</div>
					</div>

					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700"
						>
							🎯 3 Sessions • 1 Workshop
						</span>
					</div>
				</div>

				<!-- Web Track -->
				<div
					class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 transition-all hover:shadow-lg"
				>
					<div class="mb-6 flex items-center justify-between">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-full bg-purple-200 text-2xl"
						>
							🌐
						</div>
						<span class="rounded-full bg-purple-200 px-3 py-1 text-sm font-medium text-purple-800">
							Web Track
						</span>
					</div>

					<h5 class="mb-3 text-2xl font-bold text-purple-900">Modern Web Development</h5>
					<p class="mb-4 text-purple-700">
						Master the latest web technologies, frameworks, and tools for building amazing user
						experiences
					</p>

					<div class="space-y-2">
						<div class="flex items-center gap-2 text-sm text-purple-600">
							<span class="text-xs">•</span>
							<span>Progressive Web Apps</span>
						</div>
						<div class="flex items-center gap-2 text-sm text-purple-600">
							<span class="text-xs">•</span>
							<span>React, Vue & Svelte</span>
						</div>
						<div class="flex items-center gap-2 text-sm text-purple-600">
							<span class="text-xs">•</span>
							<span>Performance Optimization</span>
						</div>
					</div>

					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700"
						>
							🎯 4 Sessions • 2 Workshops
						</span>
					</div>
				</div>

				<!-- Android Track -->
				<div
					class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 transition-all hover:shadow-lg"
				>
					<div class="mb-6 flex items-center justify-between">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-full bg-orange-200 text-2xl"
						>
							📱
						</div>
						<span class="rounded-full bg-orange-200 px-3 py-1 text-sm font-medium text-orange-800">
							Android Track
						</span>
					</div>

					<h5 class="mb-3 text-2xl font-bold text-orange-900">Android Development</h5>
					<p class="mb-4 text-orange-700">
						Build powerful mobile apps with Kotlin, Jetpack Compose, and the latest Android
						technologies
					</p>

					<div class="space-y-2">
						<div class="flex items-center gap-2 text-sm text-orange-600">
							<span class="text-xs">•</span>
							<span>Jetpack Compose UI</span>
						</div>
						<div class="flex items-center gap-2 text-sm text-orange-600">
							<span class="text-xs">•</span>
							<span>Kotlin Multiplatform</span>
						</div>
						<div class="flex items-center gap-2 text-sm text-orange-600">
							<span class="text-xs">•</span>
							<span>Architecture Patterns</span>
						</div>
					</div>

					<div class="mt-6">
						<span
							class="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700"
						>
							🎯 3 Sessions • 1 Workshop
						</span>
					</div>
				</div>
			</div>

			<!-- Track Selection Tip -->
			<div class="mt-8 rounded-2xl bg-gray-50 p-6 text-center">
				<p class="text-gray-600">
					💡 <strong>Pro tip:</strong> Can't decide? Most sessions are beginner-friendly, and you can
					mix tracks throughout the day!
				</p>
			</div>
		</div>

		<!-- Speakers -->
		<div class="rounded-3xl bg-white p-10 lg:col-span-3">
			<div class="mb-8 flex items-center justify-between">
				<div>
					<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
						Speakers
					</h3>
					<h4 class="text-4xl font-medium">People of craft</h4>
				</div>
				<button
					class="rounded-full bg-gray-200 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-300"
				>
					View full
				</button>
			</div>
			<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
				<div class="text-center">
					<div class="mb-6 h-60 rounded-lg bg-gray-200 shadow-lg"></div>
					<h5 class="mb-2 text-2xl font-bold" style="font-family: 'Caveat', sans-serif;">
						Sanju Sivalingam
					</h5>
					<p class="text-lg text-gray-600">Founder & CEO @ Dun</p>
				</div>
				<div class="text-center">
					<div class="mb-6 h-60 rounded-lg bg-gray-200 shadow-lg"></div>
					<h5 class="mb-2 text-2xl font-bold" style="font-family: 'Caveat', sans-serif;">
						Somasundaram M
					</h5>
					<p class="text-lg text-gray-600">Lead Engineer @ JioHotstar</p>
				</div>
				<div class="text-center">
					<div class="mb-6 h-60 rounded-lg bg-gray-200 shadow-lg"></div>
					<h5 class="mb-2 text-2xl font-bold" style="font-family: 'Caveat', sans-serif;">
						Varun M
					</h5>
					<p class="text-lg text-gray-600">Co–founder & CTO @ Skcript</p>
				</div>
			</div>
		</div>

		<!-- Sponsors -->
		<div class="rounded-3xl bg-white p-10 lg:col-span-3">
			<div class="mb-8 flex items-center justify-between">
				<div>
					<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
						Sponsors
					</h3>
					<h4 class="text-4xl font-medium">Community powered</h4>
				</div>
				<button
					class="rounded-full bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
				>
					Become a Sponsor
				</button>
			</div>

			<!-- Title Sponsor -->
			<div class="mb-8">
				<h5 class="mb-4 text-lg font-medium text-gray-900">Title Sponsor</h5>
				<div class="rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
					<div
						class="mx-auto mb-3 flex h-16 w-32 items-center justify-center rounded-lg bg-gray-100"
					>
						<span class="text-sm text-gray-500">Your Logo Here</span>
					</div>
					<p class="text-sm text-gray-600">Premium partnership opportunity available</p>
				</div>
			</div>

			<!-- Gold Sponsors -->
			<div class="mb-8">
				<h5 class="mb-4 text-lg font-medium text-gray-900">Gold Sponsors</h5>
				<div class="grid grid-cols-2 gap-6 md:grid-cols-3">
					<div class="rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
						<div
							class="mx-auto mb-2 flex h-12 w-24 items-center justify-center rounded bg-gray-100"
						>
							<span class="text-xs text-gray-500">Logo</span>
						</div>
						<p class="text-xs text-gray-600">Available</p>
					</div>
					<div class="rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
						<div
							class="mx-auto mb-2 flex h-12 w-24 items-center justify-center rounded bg-gray-100"
						>
							<span class="text-xs text-gray-500">Logo</span>
						</div>
						<p class="text-xs text-gray-600">Available</p>
					</div>
					<div class="rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
						<div
							class="mx-auto mb-2 flex h-12 w-24 items-center justify-center rounded bg-gray-100"
						>
							<span class="text-xs text-gray-500">Logo</span>
						</div>
						<p class="text-xs text-gray-600">Available</p>
					</div>
				</div>
			</div>

			<!-- Community Partners -->
			<div class="mb-8">
				<h5 class="mb-4 text-lg font-medium text-gray-900">Community Partners</h5>
				<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
					<div class="rounded-lg bg-gray-50 p-4 text-center">
						<div
							class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-100"
						>
							<span class="text-xs font-bold text-red-600">GDG</span>
						</div>
						<p class="text-xs font-medium text-gray-700">Chennai</p>
					</div>
					<div class="rounded-lg bg-gray-50 p-4 text-center">
						<div
							class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100"
						>
							<span class="text-xs font-bold text-blue-600">WTM</span>
						</div>
						<p class="text-xs font-medium text-gray-700">Chennai</p>
					</div>
					<div class="rounded-lg bg-gray-50 p-4 text-center">
						<div
							class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100"
						>
							<span class="text-xs font-bold text-green-600">DSC</span>
						</div>
						<p class="text-xs font-medium text-gray-700">Chennai</p>
					</div>
					<div class="rounded-lg bg-gray-50 p-4 text-center">
						<div
							class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100"
						>
							<span class="text-xs font-bold text-purple-600">TechHub</span>
						</div>
						<p class="text-xs font-medium text-gray-700">Chennai</p>
					</div>
				</div>
			</div>

			<!-- Partnership benefits -->
			<div class="rounded-lg bg-gray-50 p-6">
				<p class="text-center text-sm text-gray-600">
					Interested in sponsoring? <strong>500+ developers</strong> •
					<strong>Direct talent access</strong>
					• <strong>Brand visibility</strong> • <strong>Community impact</strong>
				</p>
			</div>
		</div>

		<!-- Venue -->
		<div class="rounded-3xl bg-white p-10 lg:col-span-2">
			<div class="mb-8">
				<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">Venue</h3>
				<h4 class="text-4xl font-medium">Easy to reach</h4>
			</div>

			<!-- Venue details -->
			<div class="mb-6">
				<div class="mb-4 rounded-lg bg-gray-50 p-6">
					<h5 class="mb-2 text-lg font-medium text-gray-900">Anna University</h5>
					<p class="mb-3 text-sm text-gray-600">
						Department of Computer Science & Engineering<br />
						Sardar Patel Rd, Guindy<br />
						Chennai, Tamil Nadu 600025
					</p>
					<a
						href="https://maps.google.com/?q=Anna+University,+Chennai"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800"
					>
						<span>📍</span>
						Open in Google Maps
					</a>
				</div>
			</div>

			<!-- Venue features -->
			<div class="mb-6 grid grid-cols-2 gap-4">
				<div class="rounded-lg bg-blue-50 p-4 text-center">
					<div class="mb-2 text-2xl">🚇</div>
					<p class="text-sm font-medium text-gray-800">Metro Access</p>
					<p class="text-xs text-gray-600">Guindy Station - 5 min walk</p>
				</div>
				<div class="rounded-lg bg-green-50 p-4 text-center">
					<div class="mb-2 text-2xl">🅿️</div>
					<p class="text-sm font-medium text-gray-800">Free Parking</p>
					<p class="text-xs text-gray-600">On-campus availability</p>
				</div>
				<div class="rounded-lg bg-purple-50 p-4 text-center">
					<div class="mb-2 text-2xl">🍽️</div>
					<p class="text-sm font-medium text-gray-800">Food Court</p>
					<p class="text-xs text-gray-600">Multiple dining options</p>
				</div>
				<div class="rounded-lg bg-orange-50 p-4 text-center">
					<div class="mb-2 text-2xl">📶</div>
					<p class="text-sm font-medium text-gray-800">Free WiFi</p>
					<p class="text-xs text-gray-600">High-speed internet</p>
				</div>
			</div>

			<!-- Transportation tips -->
			<div class="rounded-lg bg-gray-50 p-4">
				<h6 class="mb-2 text-sm font-medium text-gray-900">Getting There</h6>
				<div class="space-y-2 text-xs text-gray-600">
					<p><strong>By Metro:</strong> Take Green Line to Guindy Station (Exit 1)</p>
					<p><strong>By Bus:</strong> Routes 18G, 21G, 70 stop near the campus</p>
					<p><strong>By Car:</strong> Use main entrance on Sardar Patel Road</p>
				</div>
			</div>
		</div>

		<!-- Quick Answers / FAQ -->
		<div class="rounded-3xl bg-white p-10">
			<div class="mb-8">
				<h3 class="mb-2 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">FAQ</h3>
				<h4 class="text-2xl font-medium">Quick answers</h4>
			</div>
			<div class="space-y-4">
				<div class="border-b border-gray-200 pb-4">
					<h5 class="mb-2 text-lg font-medium">When is DevFest Chennai 2025?</h5>
					<p class="text-gray-600">Date will be announced soon.</p>
				</div>
				<div class="border-b border-gray-200 pb-4">
					<h5 class="mb-2 text-lg font-medium">Is this event free?</h5>
					<p class="text-gray-600">Yes, DevFest is free for all attendees.</p>
				</div>
				<div>
					<h5 class="mb-2 text-lg font-medium">Who can attend?</h5>
					<p class="text-gray-600">Developers, students, and tech enthusiasts are welcome.</p>
				</div>
			</div>
		</div>

		<!-- Final CTA -->
		<div class="rounded-3xl bg-white p-20 text-center lg:col-span-3">
			<h3 class="mb-4 text-3xl font-bold" style="font-family: 'Caveat', sans-serif;">
				DevFest 2025
			</h3>
			<h4 class="text-5xl font-medium">Ready to join?</h4>
		</div>
	</div>
</div>
