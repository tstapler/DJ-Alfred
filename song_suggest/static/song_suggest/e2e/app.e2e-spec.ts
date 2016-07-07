import { DjAlfredPage } from './app.po';

describe('dj-alfred App', function() {
  let page: DjAlfredPage;

  beforeEach(() => {
    page = new DjAlfredPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
