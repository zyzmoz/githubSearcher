import { GithubsearcherPage } from './app.po';

describe('githubsearcher App', () => {
  let page: GithubsearcherPage;

  beforeEach(() => {
    page = new GithubsearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
