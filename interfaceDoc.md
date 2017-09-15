##全局约定
```
    时间格式 : 2017-12-31 23:59:59
    url: 'http://hostname:port/'+interfacename
    
```

###无权限接口

####login
url:/login  
method:post  
req:
```json
    {
      "sid":"string",
      "password":"string"
    }

```
res:
```
    
    {
    	"status" : 200 ,
    	"message" : "OK" ,
    	"data":{}
    };
    {
    	"status" : 300 ,
    	"message" : "Username or password wrong" ,
    	"data":{}
    }
    
```



###学生权限接口

####getStudentInfo

url:/student/getStudentInfo/${sid}  
method:get  
req:
```json
    {}
```
res:
```json
    {
      "status" : 200 ,
      "message" : "OK" ,
      "data":{
          "name":"string",
          "class":"int",
          "age":"int",
          "sid":"string",
          "idCard":"string",
          "birth":"string",
          "gender":"string",
          "phone":"string",
          "registerTime":"string"
        }
    
    }
```

####putStudentInfo
url:/student/putStudentInfo/${sid}  
method:post  
req:
```json
    {
        "name":"string",
        "age":"int",
        "idCard":"string",
        "birth":"string",
        "gender":"string",
        "phone":"string"
    }
```
res:
```
    { 
        "status" : 200 ,
        "message" : "OK" 
        
    }
    {
        "status" : 300 ,
        "message" : "操作失败" 
        
    }
```

####getCourseList
url:/student/getCourseList/${sid}  
method:get  
req:
```json
    {}
```
res:
```json
    { 
      "status" : 200 ,
      "message" : "OK",
      "data": [{
          "course":"数据库",
          "courseTime":"1-2周$1-2,2-1,3-2,4-1",
          "courseAdd":"string",
          "courseTeacher":"string",
          "courseType":"必修/选修",
          "cid":"string"
      },{}]
    }
```
####getCourseScore
url:/student/getCourseScore/${sid}  
method:get  
req:
```json
    {}
```
res:
```json
    {
      "status":200,
      "message" : "ok",
      "data" : [
        {
          "course":"数据库",
          "courseScore":"int",
          "courseTeacher":"string",
          "cid":"string"
        },{}
      
      
      ]
      
    }
```

####studentChooseCourse
url:/student/chooseCourse/${sid}  
method:post  
req:
```json
    {
      "cid":"string"
    }
```
res:
```
    {
      "status":200,
      "message":"success",
      "data":{}
    },
    {
          "status":300,
          "message":"failed",
          "data":{}
        }
    
   
```

####studentDropCourse
url:/student/dropCourse/${sid}  
method:post  
req:
```json
    {
      "cid":"string"    
    }
```
res:
```
    {
      "status":200,
      "message":"success",
      "data":{}
    },
    {
          "status":300,
          "message":"failed",
          "data":{}
        }
```


###teacher auth

####getTeacherInfo
url:/teacher/getTeacherInfo/${tid}  
method:get  
req:
```json
    {}
```
res:
```json
    {"status":200,
      "message":"ok",
      "data":{
      
              "name":"string",
              "class":"int",
              "age":"int",
              "sid":"string",
              "idCard":"string",
              "birth":"string",
              "gender":"string",
              "phone":"string",
              "registerTime":"string"
      
      
      
      }
            }
```
####putTeacherInfo
url:/teacher/putTeacherInfo/${tid}  
method:post  
req:
```json
    {
            "name":"string",
            "age":"int",
            "idCard":"string",
            "birth":"string",
            "gender":"string",
            "phone":"string"
    }
```
res:
```
    {
      "status":200,
      "message":"ok",
      "data":{}
    }
    {
          "status":300,
          "message":"failed",
          "data":{}
        }
```
####t_getCourseList
url:/teacher/getCourseList/${tid}  
method:get  
req:
```json
    {}
```
res:
```json
    {      "status":200,
           "message":"ok",
           "data":[
            {"cid":"a",
             "cname":"a"
            },{}
           ]
    
    }
```
####getCourseStudent
url:/teacher/getCourseStudent/${tid}  
method:get  
req:
```json
    {
      "cid":""
    }
```
res:
```json
    {
                "status":200,
                 "message":"ok",
                 "data":[
                  {"sid":"a",
                   "sname":"a",
                   "smsg":[{"e_type":"","e_msg":"","e_id":""},{}],
                   "score":""
                  },{}
                 ]
    }
```
####scoreStudent
url:/teacher/scoreStudent/${tid}  
method:post  
req:
```json
    {
    "cid":"",
    "score":""
    }
```
res:
```json
    {"status":200,
      "message":"ok",
      "data":{}
    }
```
####putCourseDetail
url:/teacher/putCourseDetail/${tid}  
method:post  
req:
res:

<!--####publishCourse-->
<!--url:/teacher/publishCourse/${tid}  -->
<!--method:post  -->
<!--req:-->
<!--res:-->

<!--####deleteCourse-->

####putStudentExperience
url:/teacher/putStudentExperience/${tid}  
method:post  
req:
res:

####publishStudentExperience
url:/teacher/publishStudentExperience/${tid}  
method:post  
req:
res:

