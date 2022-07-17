export function api<T>(url: string, options?: RequestInit): Promise<T> {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });

};
