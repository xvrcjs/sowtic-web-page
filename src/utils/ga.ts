export const pageview = (url: string): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-PS883B5CL3', { page_path: url });
  }
};

interface EventProps {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const event = ({ action, category, label, value }: EventProps): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
