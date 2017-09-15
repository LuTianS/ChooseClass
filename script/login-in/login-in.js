new Vue({
    el:'#account-text',
    data:{
        input:'',
    }
});
new Vue({
    el:'#password-text',
    data:{
        input:'',
    }
});
new Vue({
    el:'#login-button',
    data:{

    }
});
new Vue({
    el:'#forget',
    data:{

    }
});
//  var eventBus=new Vue({});
var  teacher=new Vue({
    el:'.teacher',
    data:{
        choose1:false,
        choose:'',
    },
    methods:{
        enter:function()
        {
            this.choose='choose';
        },
        leave:function()
        {
            if(this.choose1){

            }
            else{this.choose=''}
        },
        click:function(){
            this.choose1=true;
            this.choose='choose';
            // eventBus.$emit('change','');
            student.choose='';
            student.choose1=false;
            admin.choose='';
            admin.choose1=false;
        },

    }
});

var  student=new Vue({
    el:'.student',
    data:{
        choose1:true,
        choose:'choose'
    },
//        created() {
//            eventBus.$on('change', value=>{
//                this.choose='';this.choose1=false;
//                console.log(this);
//            })
//            // 这里必须将 this 绑定在组件实例上。如果不使用 bind , 也可以使用箭头函数。
//        },
    methods:{

        enter:function()
        {
            this.choose='choose';
        },
        leave:function()
        {
            if(this.choose1){

            }
            else{this.choose=''}
        },
        click:function(){
            this.choose1=true;
            this.choose='choose';
            teacher.choose='';
            teacher.choose1=false;
            admin.choose='';
            admin.choose1=false;
        }


    }
});
var  admin=new Vue({
    el:'.admin',
    data:{
        choose1:false,
        choose:''
    },
    methods:{
        enter:function()
        {
            this.choose='choose';
        },
        leave:function()
        {
            if(this.choose1){

            }
            else{this.choose=''}
        },
        click:function(){
            this.choose1=true;
            this.choose='choose';
            student.choose='';
            student.choose1=false;
            teacher.choose='';
            teacher.choose1=false;
        }


    }
});
function login(){
    var identify= $('#choose')[0].className;
    var account = $('#account-text1 input:first').val();
    var password = $('password-text1 input:first').val();
    $.ajax({
        type:'POST',
        url:'',
        data:{

        },
        dataType:'json',
        success:function(){

        },

        error: function(xhr){
            $('#message p:first').html('发生错误'+xhr.status);
        }
    });


}