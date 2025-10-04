/**
 * Utility function to merge classes
 * @param classes - The classes to merge
 * @returns The merged classes
 */
export const cn = (...classes: string[]) => {
	return classes.filter(Boolean).join(' ');
};
