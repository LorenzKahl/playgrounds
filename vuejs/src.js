window.onload = function () {
    var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
    var exampleId = '1';

    var demo = new Vue({

        el: '#demo',

        data: {
            "pageId": exampleData[exampleId].pageId || '',
            "campaignType": exampleData[exampleId].campaignType || '',
            "campaigns": exampleData[exampleId].campaigns || '',
            "gratifications": exampleData[exampleId].gratifications || '',
            "productGroups": exampleData[exampleId].productGroups || '',
            "selection": {}
        },

        created: function () {
            // do something
        },

        watch: {
            currentBranch: 'fetchData'
        },

        filters: {
            truncate: function (v) {
                var newline = v.indexOf('\n');
                return newline > 0 ? v.slice(0, newline) : v
            },
            formatDate: function (v) {
                return v.replace(/T|Z/g, ' ')
            }
        },

        methods: {
            fetchData: function () {
                var xhr = new XMLHttpRequest();
                var self = this;
                xhr.open('GET', apiURL + self.currentBranch);
                xhr.onload = function () {
                    self.commits = JSON.parse(xhr.responseText)
                };
                xhr.send()
            }
        }
    })
};