export function readingTime( text:string | undefined ): number  {
    const wordsPerMinute = 250;
    const words = text?.trim().split(/\s+/).length; // Splits by spaces to get word count
    if ( words === undefined ) return 0;
    const minutes = words / wordsPerMinute;
    return Math.ceil( minutes );
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

export const truncateString = (str: string, numOfWords: number): string => {
    const words = str.trim().split(/\s+/);
    if (words.length > numOfWords) return words.slice(0, numOfWords).join(" ") + "...";
    return str;
}