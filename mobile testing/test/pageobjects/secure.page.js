

const Page = require('./page');

class SecurePage extends Page {

    get flashAlert () {
        return $('#flash');
    }

    async faa () {
        super.open('uehu')
    }
}

module.exports = new SecurePage();
