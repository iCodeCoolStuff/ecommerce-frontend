export function setToken(token) {
  localStorage.setItem('jwt', token);
}

export function getToken() {
  return localStorage.getItem('jwt');
}

export function removeToken() {
  localStorage.removeItem('jwt');
}

export function getCSRFToken() {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].trim();
          if (cookie.substring(0, 'csrftoken'.length + 1) === ('csrftoken' + '=')) {
              cookieValue = decodeURIComponent(cookie.substring('csrftoken'.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}