import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const authGuardGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  if (localStorage.getItem('_Token2') !== null) {
    return true;
  } else {
    _Router.navigate(['/login']);
    return false;
  }
};
export default authGuardGuard;
