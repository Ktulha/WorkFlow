// Define a new component called todo-item
Vue.component('todo-item', {
    props: ['todo']
    , template: '<li @click="onCl">{{todo.text}}</li>'
    , methods: {
        onCl: function () {
            console.log('click')
        }
    }
})
var app1 = new Vue({
    el: "#app"
    , data: {
        mlist: [{
            id: 0
            , text: 'Lorem ipsum dolor sit.'
        }, {
            id: 1
            , text: 'Lorem ipsum dolor sit amet.'
        }, {
            id: 2
            , text: 'rdhrddu  rhe h'
        }, {
            id: 3
            , text: 'sdyvdrhdrh hshr jyjrt'
        }, {
            id: 4
            , text: 'srth jh djd dty'
        }, {
            id: 5
            , text: 'dtyhjty yj jyj'
        }, {
            id: 6
            , text: 'dtyj dyjtj tyj'
        }, {
            id: 7
            , text: 'dyujt yj '
        }]
    }
})