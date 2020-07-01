import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const useSelectorFactory = (selectorFactory, ...args) =>
    useSelector(useMemo(() => selectorFactory(...args), [...args]));
