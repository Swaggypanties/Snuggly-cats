export async function fetchEntries() {
    try {
      const response = await fetch('/api/getall');
      const entries = await response.json();
      return entries;
    } catch (error) {
      console.error('Error loading entries:', error);
      return [];
    }
  }