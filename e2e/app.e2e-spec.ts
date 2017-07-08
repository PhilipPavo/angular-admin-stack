import { AdminStackPage } from './app.po';

describe('admin-stack App', () => {
  let page: AdminStackPage;

  beforeEach(() => {
    page = new AdminStackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
