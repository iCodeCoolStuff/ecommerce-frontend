export function setToken(token) {
  localStorage.setItem('jwt', JSON.stringify(token));
}

export function getToken() {
  return JSON.parse(localStorage.getItem('jwt'))['access'];
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

export function getPayload(token) {
  let payload = localStorage.getItem('jwt').split('.')[1];
  return JSON.parse(atob(payload));
}

export function checkAuth() {
  let payload = getPayload();
  

  if (payload['exp'] > new Date().getTime()/1000) {
    return true;
  }

  return false;
}