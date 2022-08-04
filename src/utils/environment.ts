/**
 * This function check if the window call is done in a browser or during the SSR
 * If the SSR is building, it is impossible to use window, so we need to put a check
 * @returns {window object | null}
 */
export const windowGlobal = () => {
    if (typeof window === 'undefined') {
        return null;
    }
    return window;
};

/**
 * This function check if the document call is done in a browser or during the SSR
 * If the SSR is building, it is impossible to use document, so we need to put a check
 * @returns {document object | null}
 */
export const documentGlobal = () => {
    if (typeof document === 'undefined') {
        return null;
    }
    return document;
};
