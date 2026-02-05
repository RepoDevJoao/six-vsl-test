import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useUTM() {
  const [searchParams] = useSearchParams();
  const utmParamsRef = useRef({});

  useEffect(() => {
    // Captures UTMs from the URL
    const utms = {};
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        utms[key] = value;
      }
    });

    // If UTMs are found in the URL, saves them to localStorage
    if (Object.keys(utms).length > 0) {
      localStorage.setItem('utmParams', JSON.stringify(utms));
      utmParamsRef.current = utms;
    } else {
      // If not present in the URL, attempts to retrieve them from localStorage
      const savedUtms = localStorage.getItem('utmParams');
      if (savedUtms) {
        utmParamsRef.current = JSON.parse(savedUtms);
      }
    }
  }, [searchParams]);

  // Helper function to append UTMs to links/URLs
  const addUTMsToURL = (url) => {
    const savedUtms = localStorage.getItem('utmParams');
    if (!savedUtms) return url;

    const utms = JSON.parse(savedUtms);
    const urlObj = new URL(url, window.location.origin);
    
    Object.entries(utms).forEach(([key, value]) => {
      urlObj.searchParams.set(key, value);
    });

    return urlObj.toString();
  };

  // Returns only the query string with UTMs
  const getUTMString = () => {
    const savedUtms = localStorage.getItem('utmParams');
    if (!savedUtms) return '';

    const utms = JSON.parse(savedUtms);
    const utmString = Object.entries(utms)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    
    return utmString ? '?' + utmString : '';
  };

  // Function to get current UTMs
  const getUTMs = () => {
    const savedUtms = localStorage.getItem('utmParams');
    return savedUtms ? JSON.parse(savedUtms) : {};
  };

  return { getUTMs, addUTMsToURL, getUTMString };
}