export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export const openModal = (modal) => {
  return {
    type: OPEN,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE,
    component: null
  };
};
