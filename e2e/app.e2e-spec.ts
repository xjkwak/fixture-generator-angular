import { FixtureGeneratorAngularPage } from './app.po';

describe('fixture-generator-angular App', function() {
  let page: FixtureGeneratorAngularPage;

  beforeEach(() => {
    page = new FixtureGeneratorAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
