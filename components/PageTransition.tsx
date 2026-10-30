'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);
  const [topBarWidth, setTopBarWidth] = useState(0);

  useEffect(() => {
    // When pathname changes, trigger smooth page transition animation
    setAnimating(true);
    setTopBarWidth(30);

    const step1 = setTimeout(() => {
      setTopBarWidth(75);
    }, 100);

    const step2 = setTimeout(() => {
      setTopBarWidth(100);
      setAnimating(false);
    }, 280);

    const step3 = setTimeout(() => {
      setTopBarWidth(0);
    }, 550);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, [pathname]);

  return (
    <>
      {/* Top Routing Progress Bar Beam */}
      <div
        className="page-switch-progress-beam"
        style={{
          width: `${topBarWidth}%`,
          opacity: topBarWidth > 0 && topBarWidth < 100 ? 1 : topBarWidth === 100 ? 0.8 : 0,
          transition: topBarWidth === 0 ? 'none' : 'width 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Page Content View with smooth keyframe animation on route change */}
      <div key={pathname} className="page-switch-viewport">
        {children}
      </div>
    </>
  );
}
