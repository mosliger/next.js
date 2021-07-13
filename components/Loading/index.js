import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true)
    };
    const handleComplete = (url) => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return loading && <div className="loading-page">Loading....{/*I have an animation here*/}</div>;
};

export default Loading;
