new Vue({  //创建一个vue实例来关联id为“app”的这个div标签
    el: "#app",
    data: {  //定义数据模型
        user: {id:"",username:"",password:"",age:"",sex:"",email:""},
        userList: []
    },
    methods: {
        findAll() {
            //在方法中定义一个变量，表名是vue对象
            var _this = this;  //this代表的是vue父实例，_this代表的是当前方法中的vue实例。
            // 因为axios发送请求之后获取的数据是在该方法中的，该方法中没有userList，无法进行赋值，所以需要将父实例中的数据模型复制一份到该方法中，然后才能对userList赋值

            axios.get("/vuejsDemo/user/findAll.do").then(function (response) {
                _this.userList = response.data;
                console.log(_this.userList);
            }).catch(function (err) {
                console.log(err);
            });
        },
        findById(userid) {
            var _this = this;
            axios.get("/vuejsDemo/user/findById.do", {
                params: {
                    id: userid
                }
            }).then(function (response) {
              _this.user = response.data;
                $('#myModal').modal("show");
            }).catch(function (err) {
            });

        },
        updateUser(user) {
            var _this = this;
            axios.post("/vuejsDemo/user/updateUser.do",_this.user).then(function (response) {
                _this.findAll();  //点击修改按钮进行提交，然后在此处就会发送异步请求，执行成功后，在回调函数中在执行findAll()方法进行数据的查询展示
            }).catch(function (err) {
            });
        }
    },
    created(){ //钩子函数：在页面加载完成后就执行该函数就行查询
        this.findAll();
    }
});