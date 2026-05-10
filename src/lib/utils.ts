export function getAge(date: string | number | Date): number {
    const today = new Date();
    const past = new Date(date);
    
    let years = today.getFullYear() - past.getFullYear();
    const monthDiff = today.getMonth() - past.getMonth();

    // If we haven't reached the birth month yet, or it's the birth month 
    // but we haven't reached the birth day, subtract one year.
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < past.getDate())) {
        years--;
    }

    return years;
}

