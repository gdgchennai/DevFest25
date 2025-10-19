import type { Session } from '$lib/data/agenda';

/**
 * Generate an ICS (iCalendar) file content for a session
 */
export function generateICS(session: Session): string {
	const eventDate = '20251108'; // November 8, 2025 in YYYYMMDD format
	const startDateTime = `${eventDate}T${session.startTime.replace(':', '')}00`;
	const endDateTime = `${eventDate}T${session.endTime.replace(':', '')}00`;

	// Create a unique UID for the event
	const uid = `${session.id}@devfest.gdgchennai.in`;

	// Format description with speaker info if available
	let description = session.description || '';
	if (session.speaker && session.speaker !== 'TBD') {
		description = `Speaker: ${session.speaker}\n\n${description}`;
	}

	// Escape special characters for ICS format
	const escapeICS = (text: string): string => {
		return text
			.replace(/\\/g, '\\\\')
			.replace(/;/g, '\\;')
			.replace(/,/g, '\\,')
			.replace(/\n/g, '\\n')
			.replace(/\r/g, '');
	};

	const icsContent = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'PRODID:-//GDG Chennai//DevFest 2025//EN',
		'BEGIN:VEVENT',
		`UID:${uid}`,
		`DTSTART:${startDateTime}`,
		`DTEND:${endDateTime}`,
		`SUMMARY:${escapeICS(session.title)}`,
		`DESCRIPTION:${escapeICS(description)}`,
		'LOCATION:Chennai\\, India',
		'STATUS:CONFIRMED',
		'TRANSP:OPAQUE',
		'END:VEVENT',
		'END:VCALENDAR'
	].join('\r\n');

	return icsContent;
}

/**
 * Download an ICS file for a session
 */
export function downloadICS(session: Session): void {
	const icsContent = generateICS(session);
	const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
	const url = URL.createObjectURL(blob);

	const link = document.createElement('a');
	link.href = url;
	link.download = `${session.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
