'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + 160;
      let current = sectionIds[0] ?? '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop) {
          current = id;
        }
      }

      setActive(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
}
