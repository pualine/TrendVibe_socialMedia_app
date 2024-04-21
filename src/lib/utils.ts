import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}


export function formatRelativeTime(dateString: string): string {
  const currentDate = new Date();
  const targetDate = new Date(dateString);

  const elapsedMilliseconds = currentDate.getTime() - targetDate.getTime();
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

  if (elapsedSeconds < 5) {
    return 'just now';
  } else if (elapsedSeconds < 60) {
    return `${elapsedSeconds} seconds ago`;
  } else if (elapsedSeconds < 3600) {
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    return `${elapsedMinutes} minutes ago`;
  } else if (elapsedSeconds < 86400) {
    const elapsedHours = Math.floor(elapsedSeconds / 3600);
    return `${elapsedHours} hours ago`;
  } else {
    const elapsedDays = Math.floor(elapsedSeconds / 86400);
    return `${elapsedDays} days ago`;
  }
}


// const dateString = '2024-04-19T19:03:25.008+00:00';
// const formattedTime = formatRelativeTime(dateString);
// console.log(formattedTime);

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};