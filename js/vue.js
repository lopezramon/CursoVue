var app = new Vue ({
    el: '#vue',
    data: {
        mensaje:'Aprende Vue JS - Ramon',
        src: 'https://vuejs.org/images/logo.png'
    },
    beforeCreate: function(){
        console.log('Llamado a beforeCreate');
    },
    beforeMount: function(){
        console.log('Llamado a beforeMount');
    },
    beforeUpdate: function(){
        console.log('Llamado a beforeUpdate');
    },
    
    beforeDestroy: function(){
        console.log('Llamado a beforeDestroy');
    },
    methods: {
        destruir: function(){
            this.$destroy();
        }
    }
})