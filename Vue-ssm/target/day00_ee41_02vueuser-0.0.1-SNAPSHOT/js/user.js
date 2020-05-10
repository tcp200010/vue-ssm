new Vue({  //创建一个vue实例来关联id为“app”的这个div标签
    el: "#app",
    data: {  //定义数据模型
        user: {id:"",username:"",password:"",age:"",sex:"",email:""},
        userList: []
    },
    methods: {
        findAll() {
            var _this = this;
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
                _this.findAll();
            }).catch(function (err) {
            });
        }
    },
    created(){
        this.findAll();
    }
});