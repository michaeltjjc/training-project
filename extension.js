module.exports = {
    name: 'TrainingProject',
    publisher: 'JJC',
    cards: [{
        type: 'TrainingProjectCard',
        source: './src/cards/TrainingProjectCard',
        title: 'TrainingProject Card',
        displayCardType: 'TrainingProject Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
 //       pageRoute: {
 //           route: '/',
 //           excludeClickSelectors: ['a']
 //       }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};