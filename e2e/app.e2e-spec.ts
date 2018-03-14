import { GamegamePage } from './app.po';

describe('gamegame App', () => {
  let page: GamegamePage;

  beforeEach(() => {
    page = new GamegamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
