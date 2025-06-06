import { useEffect, useState } from 'react';

export default function useDarkMode() {
    const [isDark, setIsDark] = useState(() =>
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

useEffect(() => {
    const root = window.document.documentElement;
    if(isDark) {
        rootClassList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}, [isDark]);

return [isDark, setIsDark];
}