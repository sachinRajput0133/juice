import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';

import ironOptions from './config';

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, ironOptions);
}

export function withSessionSsr(handler, options = {}) {
  return withIronSessionSsr(handler, { ...ironOptions, ...options });
}
