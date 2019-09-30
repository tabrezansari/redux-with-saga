export function apiPost(url, data = {}) {
  const response = fetch(url, {
    /// all the logic for handling the request
  });

  return response.json();
}
