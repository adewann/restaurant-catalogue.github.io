const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Resto');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// eslint-disable-next-line no-undef
Scenario('liking one resto', async ({ I }) => {
  I.see('No favorite restaurants found', '.content');
  I.amOnPage('/#/');
  I.wait(3);
  I.seeElement('.resto__title a');
  // eslint-disable-next-line no-undef
  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(5);
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

// eslint-disable-next-line no-undef
Scenario('unliking one resto', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('No favorite restaurants found', '.content');
  I.amOnPage('/#/');
  I.wait(5);
  I.seeElement('.resto__title a');
  // eslint-disable-next-line no-undef
  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.wait(5);
  I.seeElement('.resto__title a');
  const likedResto = locate('.resto__title a').first();
  const likedRestoTitle = await I.grabTextFrom(likedResto);
  I.click(likedResto);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('No favorite restaurants found', '.content');
});
