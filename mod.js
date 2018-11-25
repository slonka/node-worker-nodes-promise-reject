module.exports = {
    with: async function() {
        return new Promise((succ, fail ) => {
            fail('with');
        })
    },
    without: async function() {
        return new Promise((succ, fail ) => {
            fail();
        })
    }
}
