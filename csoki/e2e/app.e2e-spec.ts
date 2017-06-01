import { CsokiPage } from './app.po';

describe('csoki App', () => {
  let page: CsokiPage;

  beforeEach(() => {
    page = new CsokiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
