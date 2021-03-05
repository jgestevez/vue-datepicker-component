import { ref, onMounted, onBeforeUnmount } from 'vue';

export const useResize = (props?: unknown) => {
  const isMobile = ref(false);
  const setIsMobile = (val: boolean) => {
    isMobile.value = val;
  };

  const handleResize = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  onMounted(() => {
    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
  });

  onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize);
    }
  });

  return { isMobile };
};
