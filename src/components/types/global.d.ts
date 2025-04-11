
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module 'smoothscroll-polyfill' {
    export function polyfill(): void;
}

// Hỗ trợ cho scroll-to-element
declare module 'scroll-to-element' {
    interface ScrollToElementOptions {
        offset?: number;
        ease?: string;
        duration?: number;
    }

    export default function scrollToElement(
        selectorOrElement: string | Element,
        options?: ScrollToElementOptions
    ): void;
}
