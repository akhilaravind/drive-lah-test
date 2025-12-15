import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export function useQueryParams(keys) {
  const location = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);

  if (!keys) return queryParams; // If no keys provided, return the full URLSearchParams

  if (typeof keys === 'string') {
    return queryParams.get(keys); // Single key
  }

  if (Array.isArray(keys)) {
    const result = {};
    keys.forEach((key) => {
      result[key] = queryParams.get(key);
    });
    return result; // Object with all keys
  }

  return null;
}
