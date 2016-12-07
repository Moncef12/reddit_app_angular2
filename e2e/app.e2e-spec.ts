import { GeneratedNgCliPage } from './app.po';

describe('generated-ng-cli App', function() {
  let page: GeneratedNgCliPage;

  beforeEach(() => {
    page = new GeneratedNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
