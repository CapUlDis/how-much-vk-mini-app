import { Page, Router } from '@happysanta/router';

export const PAGE_GUESS = '/';

export const VIEW_MAIN = 'view_main';

export const PANEL_GUESS = 'PANEL_GUESS';

const routes = {
  [PANEL_GUESS]: new Page(PANEL_GUESS, VIEW_MAIN),
};

export const router = new Router(routes);

router.start();
