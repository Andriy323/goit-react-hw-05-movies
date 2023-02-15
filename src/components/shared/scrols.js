export const scrols = ref => {
  ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
};
