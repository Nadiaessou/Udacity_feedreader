/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */

    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('feeds are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', () => {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', () => {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });


    /*  test suite named "The menu" */
    describe('The Menu', () => {

        /* test that ensures the menu element is
         * hidden by default.
         */

        it('menu element is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /*  test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('the menu changes visibility on click event', () => {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /*  test suite named "Initial Entries" */
    describe('Initial Entries', () => {

        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        var feedEntry;
        beforeEach((done) => {
            loadFeed(0, () => {
                feedEntry = $('.feed .entry').length;
                done();
            });
        });

        it('there is more than 0 entries', (done) => {
            expect(feedEntry).toBeGreaterThan(0);
            done();
        });
    });



    /*  test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {

        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var feedOne,
            feedTwo;

        beforeEach((done) => {
            loadFeed(0, () => {
                feedOne = $('.feed').find(allFeeds.url);
            });

            loadFeed(1, () => {
                feedTwo = $('.feed').find(allFeeds.url);
                done();
            });
        });

        it('a new feed is loaded', (done) => {
            expect(feedOne).not.toBe(feedTwo);
            done();
        });
    });

}());
