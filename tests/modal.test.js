import { showModal, showModalFromToolbar, showModalFromTweet } from '../dist/test-bundle.js';

describe('Modal functions', () => {
  const originalCreateElement = document.createElement;

  afterEach(() => {
    document.createElement = originalCreateElement;
  });

  test('showModal', () => {
    const createElementMock = jest.fn();
    document.createElement = createElementMock;

    showModal('test text');
    
    expect(createElementMock).toHaveBeenCalledTimes(6);
    expect(createElementMock).toHaveBeenCalledWith('div');
    expect(createElementMock).toHaveBeenCalledWith('button');
    expect(createElementMock).toHaveBeenCalledWith('textarea');
  });

  test('showModalFromToolbar', () => {
    const showModalMock = jest.spyOn(global, 'showModal');

    showModalFromToolbar();

    expect(showModalMock).toHaveBeenCalledWith('');
  });

  test('showModalFromTweet', () => {
    const showModalMock = jest.spyOn(global, 'showModal');
    const tweetText = 'This is a test tweet';

    showModalFromTweet(tweetText);

    expect(showModalMock).toHaveBeenCalledWith(tweetText);
  });
});
