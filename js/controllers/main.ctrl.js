/* global app */
app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.title = 'A Wolderfull Title Of An Image Gallery!'

    // Translate model ID to embed URL:
    $scope.embedUrl = modelId => {
        return `https://sketchfab.com/models/${modelId}/embed?autospin=0.2&amp;camera=0&scrollwheel=0`
    }

    // Load model for in-page display
    // TODO: Change to sketchfab API call:
    $http.get('fixtures/models.json')
        .then(res => {
            $scope.mayaModels = res.data
        })
        .catch(err => {
            console.log(`Cannot fetch remote JSON: ${err}`)
            // In local environment, JSON fetch will fail. Fallback to test JSON:
            $scope.mayaModels = [{
                title: 'This is a TEST environment!',
                src: 'http://www.networkforgood.com/wp-content/uploads/2015/08/bigstock-Test-word-on-white-keyboard-27134336.jpg'
            }, {
                title: 'A simple chair 2',
                id: '0d2ab169abce4754b5df4d22acafb8d2'
            }]
        })
}])
