// write a function to beautify timer value in the format of relative format from seconds
export const beautifyTimer = (seconds: number): string => {
    if (seconds === 0) {
        return '';
    } else
    if (seconds < 60) {
        return `${seconds} seconds`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ${seconds % 60} seconds`;
    } else {
        const hours = Math.floor(seconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ${Math.floor((seconds % 3600) / 60)} minute${Math.floor((seconds % 3600) / 60) > 1 ? 's' : ''}`;
    }
}