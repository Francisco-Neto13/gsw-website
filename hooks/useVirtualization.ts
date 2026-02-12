import { useState, useEffect, useRef, useCallback } from 'react';

interface VirtualizationOptions {
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
}

interface VirtualizationResult<T> {
  virtualItems: Array<{
    index: number;
    item: T;
    style: React.CSSProperties;
  }>;
  totalHeight: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function useVirtualization<T>(
  items: T[],
  options: VirtualizationOptions
): VirtualizationResult<T> {
  const { itemHeight, containerHeight, overscan = 3 } = options;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  );

  const virtualItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    virtualItems.push({
      index: i,
      item: items[i],
      style: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        transform: `translateY(${i * itemHeight}px)`,
      },
    });
  }

  return {
    virtualItems,
    totalHeight,
    containerRef,
  };
}